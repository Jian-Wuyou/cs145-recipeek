<script lang="ts">
    import { getModalStore } from '@skeletonlabs/skeleton';

    const modalStore = getModalStore();

    const formData = {
        itemName: '',
        amount: 0,
    };

    function onFormSubmit(): void {
        if ($modalStore[0].response) $modalStore[0].response(formData);
        modalStore.close();
    }

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
                <input class="input" type="text" bind:value={formData.itemName} placeholder="Enter item name..." />
            </label>
            <label class="label">
                <span>Amount</span>
                <input class="input" type="number" bind:value={formData.amount} placeholder="Enter amount..." />
            </label>
        </form>
        <!-- prettier-ignore -->
        <footer class="modal-footer">
			<button class="btn" on:click={modalStore.close}>Cancel</button>
			<button class="btn" on:click={onFormSubmit}>Add Item</button>
		</footer>
    </div>
{/if}
