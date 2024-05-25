<script lang="ts">
    import { ingredients, ingredientsCategory } from '$lib/data/ingredients';
    import { auth, db } from '$lib/firebase/firebase.client';
    import { type Inventory } from '$lib/models';
    import {
        Autocomplete,
        InputChip,
        getModalStore,
        popup,
        type AutocompleteOption,
        type ModalSettings,
        type PopupSettings,
    } from '@skeletonlabs/skeleton';
    import { PencilLine, Trash2 } from '@steeze-ui/lucide-icons';
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
</script>

<div class="p-12">
    <span use:popup={popupSettings}>
        <InputChip
            bind:input={filterInput}
            bind:value={filters}
            name="chips"
            whitelist={ingredientsCategory}
            bind:this={filterChip}
        />
    </span>
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
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Ingredient Name</th>
                    <th>Category</th>
                    <th>Available</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {#each Object.entries(filtered) as [name, { category, available }]}
                    <tr>
                        <td>{name}</td>
                        <td>
                            {#each category as c}
                                <span class="variant-filled chip mx-1">{c}</span>
                            {/each}
                        </td>
                        <td>{available}</td>
                        <td>
                            <button class="btn-icon bg-red-500" on:click={() => modalDeleteItem(name)}>
                                <Icon class="w-6 stroke-2" src={Trash2} />
                            </button>
                            <button class="btn-icon bg-green-500" on:click={() => modalEditItem(name)}>
                                <Icon class="w-6 stroke-2" src={PencilLine} />
                            </button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
