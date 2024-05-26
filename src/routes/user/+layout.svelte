<script lang="ts">
    import { NavBar } from '$lib/components';
    import { signOutUser } from '$lib/firebase/auth';
    import { goto } from '$app/navigation';
    import { UserCircle, ShoppingBag } from '@steeze-ui/heroicons';
    import { BookText, Bell } from '@steeze-ui/lucide-icons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { session } from '$lib/store/session';
    import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
    import { notifications } from '$lib/store/notifications';
    function logout() {
        signOutUser().then(() => {
            goto('/');
        });
    }

    const popupProfile: PopupSettings = {
        event: 'click',
        target: 'profile',
        placement: 'bottom',
    };

    const popupNotifs: PopupSettings = {
        event: 'click',
        target: 'notification',
        placement: 'bottom',
    };
</script>

<div class="flex h-full flex-wrap">
    <div class="h-min basis-full">
        <NavBar>
            <svelte:fragment slot="lead">
                <a class="btn flex items-center gap-2 hover:variant-soft-primary" href="/user/recipes">
                    <span><Icon class="w-6 stroke-2" src={BookText} /></span>
                    <span>Recipes</span>
                </a>
                <a class="btn flex items-center gap-2 hover:variant-soft-primary" href="/user/pantry">
                    <span><Icon class="w-6 stroke-2" src={ShoppingBag} /></span>
                    <span>Pantry</span>
                </a>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <button class="btn flex items-center gap-2 hover:variant-soft-primary" use:popup={popupProfile}>
                    <span><Icon class="w-6 stroke-2" src={UserCircle} /></span>
                    <span>{$session.username}</span>
                </button>
                <div class="card h-fit w-48 p-3 shadow-xl" data-popup="profile">
                    <div class="bg-surface-100-800-token" />
                    <nav class="list-nav">
                        <ul>
                            <li>
                                <button on:click={logout} class="variant-filled btn w-full text-center">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </svelte:fragment>
            <svelte:fragment>
                <button class="hover:text-surface-100" use:popup={popupNotifs}>
                    <Icon class="w-6 stroke-2" src={Bell} />
                    <!-- TODO: Add global notification store and popup under this -->
                </button>
                <div class="card h-fit w-48 p-3 shadow-xl" data-popup="notification">
                    <div class="bg-surface-100-800-token" />
                    <nav class="list-nav">
                        <ul>
                            {#each Object.entries($notifications) as [id, notif] (id)}
                                Controller {notif.id}: {notif.amount} change on {new Date(notif.time)}
                            {/each}
                        </ul>
                    </nav>
                </div>
            </svelte:fragment>
        </NavBar>
    </div>
    <div class="container mx-auto h-full grow">
        <slot />
    </div>
</div>
