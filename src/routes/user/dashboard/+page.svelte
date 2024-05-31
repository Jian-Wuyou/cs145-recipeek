<script lang="ts">
    import { recipes } from '$lib/data/recipes';
    import { getPantryStore } from '$lib/store/userContext';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { MoveRight } from '@steeze-ui/lucide-icons';

    import { ArrowRight } from '@steeze-ui/heroicons';

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
    {#if enough.length > 0}
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
    {:else}
        <div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
            <h1
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
            >
                The pantry is nearly empty!
            </h1>
            <p class="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
                To get the best recipe suggestions, add more ingredients!
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a
                    href="/user/pantry"
                    class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                    Add ingredients
                    <Icon src={ArrowRight} class="relative ms-2 h-3.5 w-3.5 stroke-2" />
                    <!-- <svg
                        class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg> -->
                </a>
            </div>
        </div>
    {/if}
</div>
