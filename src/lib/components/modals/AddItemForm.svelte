<script lang="ts">
    import {
        getModalStore,
        type AutocompleteOption,
        Autocomplete,
        type PopupSettings,
        popup,
    } from '@skeletonlabs/skeleton';
    import { ingredients } from '$lib/data/ingredients';

    export let parent: any;

    const modalStore = getModalStore();

    export let fixedAmount: number | null = null;

    const formData = {
        itemName: '',
        amount: fixedAmount ? fixedAmount : 0,
    };
    console.log(formData);

    function onFormSubmit() {
        if ($modalStore[0].response) {
            $modalStore[0].response(formData);
        }
        modalStore.close();
    }

    function onSelection(event: CustomEvent<AutocompleteOption<string>>) {
        formData.itemName = event.detail.value;
    }

    const ingredientOptions: AutocompleteOption<string>[] = [];
    for (const [item, keyw] of Object.entries(ingredients)) {
        ingredientOptions.push({
            label: item,
            value: item,
            keywords: keyw.join(),
        });
    }

    let popupSettings: PopupSettings = {
        event: 'focus-click',
        target: 'popupAutocomplete',
        placement: 'bottom',
    };

    // TODO: Add custom modal styling
    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
    const cHeader = 'text-2xl font-bold';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
    <div class="modal-example-form {cBase}">
        <header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
        <article>{$modalStore[0].body ?? '(body missing)'}</article>
        <form class="modal-form {cForm}">
            <label class="label">
                <span>Item Name</span>
                <input
                    class="input"
                    type="text"
                    bind:value={formData.itemName}
                    placeholder="Enter item name..."
                    use:popup={popupSettings}
                />
                <div data-popup="popupAutocomplete">
                    <div class="card relative z-50 max-h-48 w-full max-w-sm overflow-y-auto p-4" tabindex="-1">
                        <Autocomplete
                            bind:input={formData.itemName}
                            allowlist={Object.keys(ingredients)}
                            options={ingredientOptions}
                            on:selection={onSelection}
                        />
                    </div>
                </div>
            </label>
            <label class="label">
                <span>Amount</span>
                {#if fixedAmount}
                    <input class="input" type="number" disabled placeholder={fixedAmount} />
                {:else}
                    <input class="input" type="number" bind:value={formData.amount} placeholder="Enter amount..." />
                {/if}
            </label>
        </form>
        <!-- prettier-ignore -->
        <footer class="modal-footer">
			<button class="btn" on:click={modalStore.close}>Cancel</button>
			<button class="btn" on:click={onFormSubmit}>Add Item</button>
		</footer>
    </div>
{/if}
