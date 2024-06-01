<script lang="ts">
    import { recipes } from '$lib/data/recipes';
    import { getPantryStore } from '$lib/store/userContext';
    import { getModalStore, type ModalSettings, type ModalComponent } from '@skeletonlabs/skeleton';
    import { ViewRecipe } from '$lib/components/modals';

    const modalStore = getModalStore();

    const pantryStore = getPantryStore();

    let allMissing: { [id: string]: string[] } = {};

    $: {
        allMissing = {};
        for (const [name, recipe] of Object.entries(recipes)) {
            allMissing[name] = [];
            for (const ingredient of Object.keys(recipe.ingredients)) {
                if (!($pantryStore.hasOwnProperty(ingredient) && $pantryStore[ingredient].available > 0))
                    allMissing[name].push(ingredient);
            }
        }
    }

    let items: [string, string[]][];
    $: items = Object.keys(allMissing)
        .map((key): [string, string[]] => {
            return [key, allMissing[key]];
        })
        .toSorted(function (first, second) {
            return first[1].length - second[1].length;
        });
    $: {
        console.log(items);
    }

    function modalViewRecipe(name: string) {
        const modal: ModalSettings = {
            component: {
                ref: ViewRecipe,
                props: {
                    recipeName: name,
                },
            },
            type: 'component',
        };
        modalStore.trigger(modal);
    }
</script>

<div class="grid max-h-[80dvh] gap-x-10 overflow-y-scroll max-lg:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    {#each items as [name, missing] (name)}
        {@const recipe = recipes[name]}
        <button class="mb-8" on:click={() => modalViewRecipe(name)}>
            <div class=" flex h-[120px] gap-5 overflow-hidden border-r-4 shadow-md">
                <div class="bg-surface-200-700-token relative w-[160px] shrink-0 grow-0 basis-auto overflow-hidden">
                    <img
                        alt={name}
                        src={recipe.imgUrl}
                        class="absolute -inset-[999px] m-auto inline-block h-full max-w-none overflow-clip align-middle"
                    />
                </div>
                <div class="block w-full items-start overflow-hidden">
                    <div class="flex items-center justify-between">
                        <h4 class="my-0 block w-full overflow-hidden text-ellipsis text-base">{name}</h4>
                    </div>
                    {#if missing.length > 0}
                        <div class="text-warning-500 mb-8 mt-4 block text-sm">
                            You're missing {missing.join(', ')}
                        </div>
                    {:else}
                        <div class="mb-8 mt-4 block text-sm">
                            You have all {Object.keys(recipe.ingredients).length} of the ingredients
                        </div>
                    {/if}
                </div>
            </div>
        </button>
    {/each}
</div>
