<script lang="ts">
    import { AddItemForm, ManageSubscriptions } from '$lib/components/modals';
    import { ingredients, ingredientsCategory } from '$lib/data/ingredients';
    import { auth, db } from '$lib/firebase/firebase.client';
    import type { Inventory, Subscriptions } from '$lib/models';
    import {
        Autocomplete,
        InputChip,
        getModalStore,
        popup,
        type AutocompleteOption,
        type ModalComponent,
        type ModalSettings,
        type PopupSettings,
    } from '@skeletonlabs/skeleton';
    import { PencilLine, Plus, Trash2, Settings2 } from '@steeze-ui/lucide-icons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { child, onValue, ref, remove, update } from 'firebase/database';
    import { array, minValue, number, object, string, type Output } from 'valibot';

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

    // Stock
    const StockEntry = object({
        category: array(string()),
        available: number([minValue(0)]),
    });

    let stock: { [name: string]: Output<typeof StockEntry> } = {};

    const user = auth.currentUser;
    const inventoryRef = ref(db, `users/${user?.uid}/inventory`);

    onValue(inventoryRef, snapshot => {
        const snapshotData: Inventory = snapshot.exists() ? snapshot.val() : {};
        const snapshotStock: typeof stock = {};
        for (const [k, v] of Object.entries(snapshotData)) {
            if (!ingredients.hasOwnProperty(k)) continue;
            snapshotStock[k] = {
                category: ingredients[k],
                available: v,
            };
        }
        stock = snapshotStock;
    });
    // TODO: Add cancelCallback

    let filtered: typeof stock = {};

    $: {
        if (filters.length == 0) {
            filtered = stock;
        } else {
            filtered = {};
            for (const [key, value] of Object.entries(stock)) {
                if (value.category.some(v => filters.includes(v))) filtered[key] = value;
            }
        }
    }

    const modalStore = getModalStore();

    const modalDeleteItem = (itemName: string) => {
        const modal: ModalSettings = {
            type: 'confirm',
            title: 'Delete item',
            body: `Are you sure you wish to delete ${itemName}?`,
            response: (r: boolean) => remove(child(inventoryRef, itemName)),
        };
        modalStore.trigger(modal);
    };

    const modalAddItem = () => {
        const modal: ModalSettings = {
            type: 'component',
            component: { ref: AddItemForm },
            title: 'Add item',
            body: '',
            response: (r: { itemName: string; amount: number }) => {
                const oldAmount = stock.hasOwnProperty(r.itemName) ? stock[r.itemName].available : 0;
                update(inventoryRef, { [r.itemName]: oldAmount + r.amount });
            },
        };
        modalStore.trigger(modal);
    };

    const modalEditItem = (itemName: string) => {
        const modal: ModalSettings = {
            type: 'prompt',
            title: 'Edit amount',
            body: itemName,
            value: stock[itemName].available,
            valueAttr: { type: 'number', min: 0, required: true },
            response: (r: number) => update(inventoryRef, { [itemName]: r }),
        };
        modalStore.trigger(modal);
    };

    const subscriptionsRef = ref(db, `users/${user?.uid}/subscriptions`);

    const modalSubscriptions = () => {
        const modal: ModalSettings = {
            type: 'component',
            component: { ref: ManageSubscriptions },
            title: 'Manage subscriptions',
            body: '',
        };
        modalStore.trigger(modal);
    };
</script>

<div class="p-12">
    <div class="flex flex-wrap items-center">
        <div class="flex w-full flex-wrap items-center justify-between">
            <span class="text-xl">Pantry</span>
            <div>
                <button
                    class="mb-2 me-2 inline-flex items-center gap-2 justify-self-end rounded-lg bg-green-500 px-3 py-1.5 hover:bg-green-700"
                    on:click={modalAddItem}
                >
                    <Icon class="w-5 stroke-2" src={Plus} />
                    <span>Add Item</span>
                </button>
                <button
                    class="mb-2 me-2 inline-flex items-center gap-2 justify-self-end rounded-lg bg-orange-500 px-3 py-1.5 hover:bg-orange-700"
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
    <div class="table-container">
        <table class="table table-hover table-compact">
            <thead>
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
                        <td>{available}</td>
                        <td>
                            <button
                                class="rounded-lg bg-green-500 p-1.5 hover:bg-green-700"
                                on:click={() => modalEditItem(name)}
                            >
                                <Icon class="w-5 stroke-2" src={PencilLine} />
                            </button>
                            <button
                                class="rounded-lg bg-red-500 p-1.5 hover:bg-red-700"
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
</div>
