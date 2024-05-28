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
    $: pickedIndex = Math.floor(Math.random() * enough.length);
    $: pickedRecipe = recipes[enough[pickedIndex]];
</script>

<div class="flex h-dvh w-full flex-col gap-5 p-12">
    <div class=" w-full"><h1 class=" text-center text-5xl">Dashboard</h1></div>
    <div class=" w-full">
        <div class="card p-4 text-sm">
            {enough[pickedIndex]}
            {pickedRecipe}
            {pickedRecipe.instructions}
        </div>
    </div>
</div>
