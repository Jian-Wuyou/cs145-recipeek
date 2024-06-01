<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { recipes } from '$lib/data/recipes';
    import { getPantryStore } from '$lib/store/userContext';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { MoveRight, RotateCw } from '@steeze-ui/lucide-icons';

    import { ArrowRight } from '@steeze-ui/heroicons';
    import { pick } from 'valibot';

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

    function refreshSelection() {
        if (enough.length <= 1) {
            return 0;
        }
        const prevIndex = pickedIndex;
        let newIndex = pickedIndex;
        while (newIndex == prevIndex) {
            newIndex = Math.floor(Math.random() * enough.length);
        }
        pickedIndex = newIndex;
    }
</script>

<div class="flex h-dvh w-full flex-col gap-5 max-sm:p-4 sm:p-6 md:p-12">
    {#if enough.length > 0}
        {#key enough[pickedIndex]}
            <section in:fly={{ y: 200, duration: 2000 }} out:fade>
                <div
                    class="relative mx-auto grid max-h-[75dvh] max-w-screen-xl max-lg:overflow-y-auto lg:grid-cols-12 lg:gap-8 xl:gap-0"
                >
                    <div
                        class="flex w-full flex-col items-center place-self-center max-lg:order-2 lg:order-1 lg:col-span-8"
                    >
                        <h1
                            class="mb-4 w-full max-w-2xl pt-2 text-center text-2xl font-extrabold leading-none tracking-tight dark:text-white max-lg:relative md:text-4xl"
                        >
                            <span class="pr-4">
                                {enough[pickedIndex]}
                            </span>
                            <button
                                type="button"
                                class="btn-icon bg-surface-200-700-token max-lg:inline max-lg:translate-y-2 lg:absolute lg:-right-[21.5px] lg:-top-[21.5px]"
                                on:click={refreshSelection}><Icon src={RotateCw} class="m-auto w-7" /></button
                            >
                        </h1>
                        <div class="flex h-[65dvh] max-md:flex-col max-md:divide-y-[1px] md:flex-row md:divide-x-[1px]">
                            <div class="max-lg:w-full max-lg:pb-4 lg:h-full lg:w-[40%]">
                                <h4 class="w-full pb-4 text-center text-xl font-bold">Ingredients</h4>
                                <ul class="list-inside list-disc">
                                    {#each Object.entries(pickedRecipe?.ingredients) as [name, fmt] (name)}
                                        <li>{fmt.replace(/\{0\}/, name)}</li>
                                    {/each}
                                </ul>
                            </div>
                            <div class="max-lg:w-full max-lg:pt-4 sm:pl-4 lg:h-full lg:w-[60%] lg:overflow-y-auto">
                                <h4 class="w-full pb-4 text-center text-xl font-bold">Instructions</h4>
                                <ol class="list">
                                    {#each Object.entries(pickedRecipe?.instructions) as [idx, instruction]}
                                        {#if idx != '0'}
                                            <div class="px-12 py-2">
                                                <hr class="divider border-t-[0.5px]" />
                                            </div>
                                        {/if}
                                        <li>
                                            <span class="badge-icon variant-soft-primary p-3">{Number(idx) + 1}</span>
                                            <span class="flex-auto">{instruction}</span>
                                        </li>
                                    {/each}
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div
                        class="m-auto overflow-hidden max-lg:order-1 max-lg:max-h-[200px] lg:order-2 lg:col-span-4 lg:mt-0 lg:flex"
                    >
                        <img alt={enough[pickedIndex]} src={pickedRecipe?.imgUrl} />
                    </div>
                </div>
            </section>
            <!-- <div class=" w-full"><h1 class=" text-center text-5xl">Recipe of the Day</h1></div>
        <div class=" w-full">
            <div class="card flex overflow-hidden p-4 text-sm max-sm:flex-col">
                <div class="relative flex-none overflow-hidden sm:order-last sm:w-[30%]">
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
        </div> -->
        {/key}
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
