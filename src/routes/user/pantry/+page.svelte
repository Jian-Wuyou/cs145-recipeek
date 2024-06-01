<script lang="ts">
    import { ingredients2, ingredientsCategory } from '$lib/data/ingredients';
    import { auth, db } from '$lib/firebase/firebase.client';
    import { error } from '$lib/functions/toast';
    import type { Stock } from '$lib/models';
    import { getPantryStore } from '$lib/store/userContext';
    import {
        Autocomplete,
        InputChip,
        getModalStore,
        getToastStore,
        popup,
        type AutocompleteOption,
        type PopupSettings,
    } from '@skeletonlabs/skeleton';
    import { PencilLine, Plus, Settings2, Trash2 } from '@steeze-ui/lucide-icons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { ref } from 'firebase/database';
    import { decimalPlaces } from '$lib/functions/math';

    const modalStore = getModalStore();
    const toastStore = getToastStore();
    const pantryStore = getPantryStore();

    // Setup filter chips
    let filters: string[] = [];
    let filterInput = '';
    let filterChip: InputChip;

    // Setup popup autocomplete
    let categoryOptions = ingredientsCategory.map(v => ({
        label: v,
        value: v,
    }));

    let popupSettings: PopupSettings = {
        event: 'focus-click',
        target: 'popupAutocomplete',
        placement: 'bottom',
    };

    const onInputChipSelect = (event: CustomEvent<AutocompleteOption<string>>) => {
        filterChip.addChip(event.detail.value);
    };

    const user = auth.currentUser;

    let filtered: Stock = {};

    $: {
        if (filters.length == 0) {
            filtered = $pantryStore;
        } else {
            filtered = {};
            for (const [key, value] of Object.entries($pantryStore)) {
                if (value.category.some(v => filters.includes(v))) filtered[key] = value;
            }
        }
    }

    const modalDeleteItem = (itemName: string) => {
        modalStore.trigger({
            type: 'confirm',
            title: 'Delete item',
            body: `Are you sure you wish to delete ${itemName}?`,
            response: (r: boolean) => {
                if (!r) return;
                pantryStore.remove(itemName);
            },
        });
    };

    const verifyIngredient = (itemName: string) => {
        const valid = ingredients2.hasOwnProperty(itemName);
        if (!valid) {
            toastStore.trigger(error('Invalid ingredient'));
        }
        return valid;
    };

    const modalAddItem = () => {
        modalStore.trigger({
            type: 'component',
            component: 'addItemForm',
            title: 'Add item',
            body: '',
            response: (r: { itemName: string; amount: number }) => {
                if (!r) return;
                if (!verifyIngredient(r.itemName)) return;
                pantryStore.add(r.itemName, r.amount);
            },
        });
    };

    const modalEditItem = (itemName: string) => {
        modalStore.trigger({
            type: 'prompt',
            title: 'Edit amount',
            body: itemName,
            value: $pantryStore[itemName].available,
            valueAttr: { type: 'number', min: 0, required: true },
            response: (r: number) => {
                if (!r) return;
                pantryStore.edit(itemName, r);
            },
        });
    };

    const subscriptionsRef = ref(db, `users/${user?.uid}/subscriptions`);

    const modalSubscriptions = () => {
        modalStore.trigger({
            type: 'component',
            component: 'manageSubscriptions',
            title: 'Manage subscriptions',
            body: '',
        });
    };
</script>

<div class="flex flex-wrap items-center">
    <div class="flex w-full flex-wrap items-center justify-between">
        <span class="text-xl">Pantry</span>
        <div>
            <button
                class="mb-2 me-2 inline-flex items-center gap-2 justify-self-end rounded-lg bg-green-600 px-3 py-1.5 text-white hover:bg-green-700"
                on:click={modalAddItem}
            >
                <Icon class="w-5 stroke-2" src={Plus} />
                <span>Add Item</span>
            </button>
            <button
                class="mb-2 me-2 inline-flex items-center gap-2 justify-self-end rounded-lg bg-orange-600 px-3 py-1.5 text-white hover:bg-orange-700"
                on:click={modalSubscriptions}
            >
                <Icon class="w-5 stroke-2" src={Settings2} />
                <span>Subscriptions</span>
            </button>
        </div>
    </div>
    <span class="grow" use:popup={popupSettings}>
        <InputChip
            bind:input={filterInput}
            bind:value={filters}
            name="chips"
            whitelist={ingredientsCategory}
            bind:this={filterChip}
            placeholder="Find category..."
        />
    </span>
</div>
<div data-popup="popupAutocomplete">
    <div class="card max-h-48 w-full max-w-sm overflow-y-auto p-4" tabindex="-1">
        <Autocomplete
            bind:input={filterInput}
            options={categoryOptions}
            denylist={filters}
            on:selection={onInputChipSelect}
        />
    </div>
</div>
<div class="table-container block h-[65dvh] w-full">
    <table class="table-hover table-compact table w-full overflow-y-scroll">
        <thead class="sticky top-0">
            <tr>
                <th>Ingredient Name</th>
                <th>Category</th>
                <th>Available</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(filtered) as [name, { category, available }] (name)}
                <tr>
                    <td>{name}</td>
                    <td>
                        {#each category as c}
                            <span class="variant-filled chip mx-1">{c}</span>
                        {/each}
                    </td>
                    <td>{decimalPlaces(available, 0)}</td>
                    <td>
                        <button
                            class="rounded-lg bg-green-600 p-1.5 text-white hover:bg-green-700"
                            on:click={() => modalEditItem(name)}
                        >
                            <Icon class="w-5 stroke-2" src={PencilLine} />
                        </button>
                        <button
                            class="rounded-lg bg-red-600 p-1.5 text-white hover:bg-red-700"
                            on:click={() => modalDeleteItem(name)}
                        >
                            <Icon class="w-5 stroke-2" src={Trash2} />
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
