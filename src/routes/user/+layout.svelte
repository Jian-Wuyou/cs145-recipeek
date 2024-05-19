<script lang="ts">
    import { NavBar } from '$lib/components';
    import { signOutUser } from '$lib/firebase/auth';
    import { goto } from '$app/navigation';
    import { UserCircle } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { session } from '$lib/store/session';
    function logout() {
        signOutUser().then(() => {
            goto('/');
        });
    }
</script>

<div class="flex h-full flex-wrap">
    <div class="h-min basis-full">
        <NavBar>
            <div class="flex items-center gap-2"><Icon class="w-8 stroke-2" src={UserCircle} />{$session.username}</div>
            <button class="variant-filled btn" on:click={logout}> Logout </button>
        </NavBar>
    </div>
    <div class="container mx-auto grow">
        <slot />
    </div>
</div>
