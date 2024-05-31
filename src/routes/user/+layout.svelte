<script lang="ts">
    import { goto } from '$app/navigation';
    import { NavBar } from '$lib/components';
    import { signOutUser } from '$lib/firebase/auth';
    import { sessionStore } from '$lib/store/session';
    import * as DataStore from '$lib/store/userContext';
    import { popup, type PopupSettings, LightSwitch } from '@skeletonlabs/skeleton';
    import { ShoppingBag, UserCircle } from '@steeze-ui/heroicons';
    import { Bell, BookText, Menu } from '@steeze-ui/lucide-icons';
    import { Icon } from '@steeze-ui/svelte-icon';

    DataStore.init();

    const notificationStore = DataStore.getNotificationStore();

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
</script>

<div class="flex h-full flex-wrap justify-center">
    <div class="h-min basis-full">
        <NavBar>
            <svelte:fragment slot="lead">
                <div class="contents max-sm:hidden">
                    <div class="flex auto-rows-fr">
                        <a class="hover:variant-soft-primary flex w-[50%] items-center gap-2 px-4" href="/user/recipes">
                            <span><Icon class="w-6 stroke-2" src={BookText} /></span>
                            <span>Recipes</span>
                        </a>
                        <a class="hover:variant-soft-primary flex w-[50%] items-center gap-2 px-4" href="/user/pantry">
                            <span><Icon class="w-6 stroke-2" src={ShoppingBag} /></span>
                            <span>Pantry</span>
                        </a>
                    </div>
                </div>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <button class="btn hover:variant-soft-primary flex items-center gap-2" use:popup={popupProfile}>
                    <div class="contents max-sm:hidden">
                        <span><Icon class="w-6 stroke-2" src={UserCircle} /></span>
                        <span>{$sessionStore.username}</span>
                    </div>
                    <div class="contents sm:hidden">
                        <span><Icon class="w-6 stroke-2" src={Menu} /></span>
                    </div>
                </button>
                <div class="card absolute z-50 h-fit w-48 p-3 shadow-xl" data-popup="profile">
                    <div class="flex items-start gap-4 sm:hidden">
                        <span><Icon class="w-6 stroke-2" src={UserCircle} /></span>
                        <span>{$sessionStore.username}</span>
                    </div>
                    <div class="sm:hidden">
                        <hr class="max-sm:my-3" />
                    </div>
                    <section class="flex items-center justify-between">
                        <h6 class="h6">Mode</h6>
                        <LightSwitch />
                    </section>
                    <hr class="mx-1 my-3" />
                    <nav class="list-nav">
                        <ul>
                            <div class="contents sm:hidden">
                                <li class="mb-3">
                                    <a class="flex w-full items-start gap-2 px-4" href="/user/recipes">
                                        <span><Icon class="w-6 stroke-2" src={BookText} /></span>
                                        <span>Recipes</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="flex w-full items-start gap-2 px-4" href="/user/pantry">
                                        <span><Icon class="w-6 stroke-2" src={ShoppingBag} /></span>
                                        <span>Pantry</span>
                                    </a>
                                </li>
                                <hr class="mx-1 my-3" />
                            </div>
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
                <a href="/user/notifications">
                    <div class="relative inline-block">
                        <button class="hover:text-surface-100">
                            {#if Object.keys($notificationStore).length > 0}
                                {@const displayValue =
                                    Object.keys($notificationStore).length > 9
                                        ? '9+'
                                        : Object.keys($notificationStore).length}
                                <span
                                    class="variant-filled-warning absolute -right-1.5 -top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full text-xs"
                                    >{displayValue}</span
                                >
                            {/if}
                            <Icon class="w-6 stroke-2" src={Bell} />
                        </button>
                    </div>
                </a>
            </svelte:fragment>
        </NavBar>
    </div>
    <div class="container w-full grow p-4 max-md:p-4 md:p-12">
        <slot />
    </div>
</div>
