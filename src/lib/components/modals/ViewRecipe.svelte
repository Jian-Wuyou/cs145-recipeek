<script lang="ts">
    import type { SvelteComponent } from 'svelte';

    import { getModalStore, type PopupSettings, popup } from '@skeletonlabs/skeleton';
    import { recipes } from '$lib/data/recipes';

    // Props
    /** Exposes parent props to this component. */
    export let parent: SvelteComponent;
    export let recipeName: string;
    $: selectedRecipe = recipes[recipeName];
    const popupHover: PopupSettings = {
        event: 'hover',
        target: 'popupHover',
        placement: 'bottom',
    };
    const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
    <div class="bg-surface-100-800-token h-[90dvh] w-full max-w-3xl overflow-hidden rounded-xl py-4 pl-4">
        <div class="h-full max-sm:overflow-y-auto">
            <h2 class="w-full pb-4 text-center text-2xl font-bold">{recipeName}</h2>
            <div class="flex h-full max-sm:flex-col max-sm:divide-y-[1px] sm:flex-row sm:divide-x-[1px]">
                <div class="max-sm:w-full max-sm:pb-4 sm:h-full sm:w-[40%]">
                    <h4 class="w-full pb-4 text-center text-xl font-bold">Ingredients</h4>
                    <ul class="list-inside list-disc">
                        {#each Object.entries(selectedRecipe?.ingredients) as [name, fmt] (name)}
                            <li>{fmt.replace(/\{0\}/, name)}</li>
                        {/each}
                    </ul>

                    {#if Object.keys(selectedRecipe?.otherIngredients ?? {}).length > 0}
                        <div class="px-12 py-2">
                            <hr class="divider border-t-[0.5px]" />
                        </div>
                        <ul class="list-inside list-disc [&>*]:pointer-events-none" use:popup={popupHover}>
                            {#each Object.entries(selectedRecipe?.otherIngredients ?? {}) as [name, fmt] (name)}
                                <li>{fmt.replace(/\{0\}/, name)}</li>
                            {/each}
                        </ul>
                        <div class="bg-warning-200-700-token rounded-md p-1 text-sm" data-popup="popupHover">
                            <p>Untracked ingredients</p>
                            <div class="arrow bg-warning-200-700-token" />
                        </div>
                    {/if}
                </div>
                <div class="pb-8 pr-4 max-sm:w-full max-sm:pt-4 sm:h-full sm:w-[60%] sm:overflow-y-auto sm:pl-4">
                    <h4 class="w-full pb-4 text-center text-xl font-bold">Instructions</h4>
                    <ol class="list">
                        {#each Object.entries(selectedRecipe?.instructions) as [idx, instruction]}
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
    </div>
{/if}
