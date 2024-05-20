<script lang="ts">
    import { type Output, array, minValue, number, object, string } from 'valibot';
    import { ingredients, ingredientsCategory } from '$lib/data/ingredients';
    import {
        InputChip,
        Autocomplete,
        type AutocompleteOption,
        popup,
        type PopupSettings,
    } from '@skeletonlabs/skeleton';

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

    // Create dummy stock data
    let count = 20;
    for (const [key, value] of Object.entries(ingredients)) {
        stock[key] = {
            category: value,
            available: count,
        };
        count += 20;
    }

    // Change displayed data whenever filters change
    let filtered = stock;

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
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
