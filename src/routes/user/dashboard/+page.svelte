<script lang="ts">
    import { recipes } from '$lib/data/recipes';
    import { getPantryStore } from '$lib/store/userContext';

    const pantryStore = getPantryStore();

    $: available = Object.keys($pantryStore);
    let filtered: { [recipeName: string]: number } = {};

    $: {
        filtered = {};
        for (const [recipeName, recipe] of Object.entries(recipes)) {
            filtered[recipeName] = Object.keys(recipe.ingredients).reduce(
                (acc, cur) => acc + (available.includes(cur) ? 0 : 1),
                0,
            );
        }
    }

    $: enough = Object.keys(filtered).filter(name => filtered[name] == 0);
</script>

<div class="flex h-dvh w-full items-center pb-20">
    <h1 class="w-full text-center text-5xl">Dashboard</h1>
    {#each enough as recipe (recipe)}
        <div class="card p-4 text-sm">{recipe}</div>
    {/each}
</div>
