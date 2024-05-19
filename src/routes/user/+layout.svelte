<script lang="ts">
    import { NavBar } from '$lib/components';
    import { signOutUser } from '$lib/firebase/auth';
    import { goto } from '$app/navigation';
    import { UserCircle } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { session } from '$lib/store/session';
    import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
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

<div class="flex h-full flex-wrap">
    <div class="h-min basis-full">
        <NavBar>
            <button class="btn flex items-center gap-2 hover:variant-soft-primary" use:popup={popupProfile}>
                <span><Icon class="w-8 stroke-2" src={UserCircle} /></span>
                <span>{$session.username}</span>
            </button>
            <div class="card w-48 p-3 shadow-xl" data-popup="profile">
                <div class="bg-surface-100-800-token" />
                <nav class="list-nav">
                    <ul>
                        <li>
                            <button on:click={logout} class="variant-filled btn w-full text-center"> Logout </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </NavBar>
    </div>
    <div class="container mx-auto grow">
        <slot />
    </div>
</div>
