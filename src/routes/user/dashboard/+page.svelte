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
    <div class=" w-full"><h1 class=" text-center text-5xl">Recipe of the Day</h1></div>
    <div class=" w-full">
        <div class="card flex overflow-hidden p-4 text-sm">
            <div class="relative w-[30%] flex-none overflow-hidden">
                <img alt={enough[pickedIndex]} src={pickedRecipe?.imgUrl} />
            </div>
            <div class="flex flex-col gap-4 px-5">
                <div class="text-center text-3xl">
                    {enough[pickedIndex]}
                </div>
                <div>
                    {pickedRecipe?.ingredients}
                </div>
                <hr />
                <div>
                    <p class="text-xl">Instructions</p>
                    <ol class="list">
                        {#if pickedRecipe}
                            {#each Object.entries(pickedRecipe.instructions) as [id, instruction]}
                                <li>
                                    <span>{Number(id) + 1}. {instruction}</span>
                                </li>
                            {/each}
                        {/if}
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>
