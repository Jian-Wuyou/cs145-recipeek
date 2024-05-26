<script lang="ts">
    import { auth, db } from '$lib/firebase/firebase.client';
    import type { Subscriptions } from '$lib/models';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import { Check, Plus, Trash2, X } from '@steeze-ui/lucide-icons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { onValue, ref, set, child, remove } from 'firebase/database';

    const user = auth.currentUser;
    let subscriptions: Subscriptions = {};
    const userSubsRef = ref(db, `users/${user?.uid}/subscriptions`);
    const subsRef = ref(db, 'subscriptions');

    onValue(userSubsRef, snapshot => {
        subscriptions = snapshot.exists() ? snapshot.val() : {};
    });

    const modalStore = getModalStore();

    function onSave() {
        let newSubscriptions = subscriptions;
        for (const [k, v] of Object.entries(subscriptions)) {
            if (v === false) {
                remove(child(subsRef, `${k}/${user?.uid}`));
                delete newSubscriptions[k];
                continue;
            }
            set(child(subsRef, `${k}/${user?.uid}`), true);
        }
        set(userSubsRef, newSubscriptions);
        modalStore.close();
    }

    function onCancel() {
        for (const k of Object.keys(subscriptions)) {
            subscriptions[k] = true;
        }
        modalStore.close();
    }

    let visible = true;
    let inputID = 0;
    function addID(): void {
        visible = true;
        subscriptions[inputID] = true;
        console.log(subscriptions);
        inputID = 0;
    }
    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
    const cHeader = 'text-2xl font-bold';
</script>

{#if $modalStore[0]}
    <div class={cBase}>
        <header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
        <article>{$modalStore[0].body ?? '(body missing)'}</article>
        <div class="table-container">
            <table class="table table-compact table-fixed">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {#each Object.entries(subscriptions) as [id, v] (id)}
                        {#if v}
                            <tr>
                                <td>{id}</td>
                                <td
                                    ><button
                                        class="rounded-lg bg-red-500 p-1.5 hover:bg-red-700"
                                        on:click={() => {
                                            subscriptions[id] = false;
                                        }}
                                    >
                                        <Icon class="w-5 stroke-2" src={Trash2} />
                                    </button></td
                                >
                            </tr>
                        {/if}
                    {/each}
                    <tr>
                        <td class="overflow-hidden">
                            {#if visible}
                                <button
                                    class="rounded-lg bg-green-500 p-1.5 hover:bg-green-700"
                                    on:click={() => {
                                        inputID = 0;
                                        visible = false;
                                    }}
                                >
                                    <Icon class="w-5 stroke-2" src={Plus} />
                                </button>
                            {:else}
                                <input class="input" type="number" min="0" bind:value={inputID} />
                            {/if}
                        </td>
                        <td>
                            {#if !visible}
                                <button class="rounded-lg bg-green-500 p-1.5 hover:bg-green-700" on:click={addID}>
                                    <Icon class="w-5 stroke-2" src={Check} />
                                </button>
                                <button
                                    class="rounded-lg bg-red-500 p-1.5 hover:bg-red-700"
                                    on:click={() => {
                                        visible = true;
                                    }}
                                >
                                    <Icon class="w-5 stroke-2" src={X} />
                                </button>
                            {/if}
                        </td>
                    </tr>
                </tbody>
            </table>
            <footer class="modal-footer">
                <button class="btn" on:click={onCancel}>Cancel</button>
                <button class="btn" on:click={onSave}>Save</button>
            </footer>
        </div>
    </div>
{/if}
