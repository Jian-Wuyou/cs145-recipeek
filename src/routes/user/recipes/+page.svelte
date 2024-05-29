<script lang="ts">
    import { recipes } from '$lib/data/recipes';
    import { getPantryStore } from '$lib/store/userContext';

    const pantryStore = getPantryStore();

    let missing: { [id: string]: string[] } = {};

    $: {
        missing = {};
        for (const [name, recipe] of Object.entries(recipes)) {
            missing[name] = [];
            for (const ingredient of Object.keys(recipe.ingredients)) {
                if (!($pantryStore.hasOwnProperty(ingredient) && $pantryStore[ingredient].available > 0))
                    missing[name].push(ingredient);
            }
        }
    }
</script>

<div class="p-12">
    <div class="table-container block h-[75dvh] w-full">
        <table class="table table-hover table-compact w-full overflow-y-scroll">
            <thead class="sticky top-0">
                <tr>
                    <th>Recipe Name</th>
                    <th>Ingredients</th>
                    <th>Missing</th>
                    <th>Instructions</th>
                </tr>
            </thead>
            <tbody>
                {#each Object.entries(recipes) as [name, recipe] (name)}
                    <tr>
                        <td>{name}</td>
                        <td>{Object.keys(recipe.ingredients)}</td>
                        <td>{missing[name]}</td>
                        <td>{recipe.instructions}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
