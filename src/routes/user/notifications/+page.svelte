<script lang="ts">
    import { ingredients } from '$lib/data/ingredients';
    import { getNotificationStore } from '$lib/store/userContext';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import { PencilLine, Trash2 } from '@steeze-ui/lucide-icons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { AddItemForm } from '$lib/components/modals';

    const modalStore = getModalStore();
    const notificationStore = getNotificationStore();

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'medium',
    });

    const modalAddItem = (notifId: string, amount: number) => {
        modalStore.trigger({
            type: 'component',
            component: { ref: AddItemForm, props: { fixedAmount: amount } },
            title: 'Add item',
            body: '',
            response: (r: { itemName: string; amount: number }) => {
                if (!r) return;
                if (!ingredients.hasOwnProperty(r.itemName)) return;
                notificationStore.confirm(notifId, r.itemName);
            },
        });
    };
</script>

<div class="table-container">
    <table class="table table-hover table-compact">
        <thead>
            <tr>
                <th colspan="2">Notifications</th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries($notificationStore) as [notifId, { amount, time, id }] (notifId)}
                <tr>
                    <td>
                        controller {id}: {amount > 0 ? 'added' : 'removed'}
                        {amount}g on {dateFormatter.format(new Date(time))}
                    </td>
                    <td>
                        <button
                            class="rounded-lg bg-green-500 p-1.5 hover:bg-green-700"
                            on:click={() => modalAddItem(notifId, amount)}
                        >
                            <Icon class="w-5 stroke-2" src={PencilLine} />
                        </button>
                        <button
                            class="rounded-lg bg-red-500 p-1.5 hover:bg-red-700"
                            on:click={() => notificationStore.dismiss(notifId)}
                        >
                            <Icon class="w-5 stroke-2" src={Trash2} />
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
