<script lang="ts">
    import { type Output, array, minValue, number, object, string } from 'valibot';
    import { ingredients, ingredientsCategory } from '$lib/data/ingredients';
    import { InputChip } from '@skeletonlabs/skeleton';

    let filters: string[] = [];

    const StockEntry = object({
        category: array(string()),
        available: number([minValue(0)]),
    });

    let stock: { [name: string]: Output<typeof StockEntry> } = {};
    let count = 20;
    for (const [key, value] of Object.entries(ingredients)) {
        stock[key] = {
            category: value,
            available: count,
        };
        count += 20;
    }

    let filtered: typeof stock = stock;

    $: {
        if (filters.length == 0) {
            filtered = stock;
        } else {
            const filteredKeys = Object.keys(stock).filter(name => {
                return stock[name].category.some(v => filters.includes(v));
            });
            filtered = {};
            filteredKeys.forEach(key => {
                filtered[key] = stock[key];
            });
        }
    }
</script>

<div class="p-12">
    <InputChip bind:value={filters} name="chips" placeholder="Enter any value..." whitelist={ingredientsCategory} />
    <div class="table-container">
        <!-- Native Table Element -->
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
            <!-- <tfoot>
            <tr>
				<th colspan="3">Calculated Total Weight</th>
				<td>{totalWeight}</td>
			</tr>
        </tfoot> -->
        </table>
    </div>
</div>
