<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import { Fire } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { session } from '$lib/store/session';

    $: url = $session.loggedIn ? '/user/dashboard' : '/';
</script>

<AppBar shadow="shadow-2xl">
    <svelte:fragment slot="lead">
        <a href={url}>
            <div class="flex w-auto items-center gap-2">
                <Icon class="w-8 stroke-2" src={Fire} />
                <span class="text-2xl font-semibold">ReciPeek</span>
            </div>
        </a>
        <div class="mx-5 text-surface-500">|</div>
        <slot name="lead" />
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <slot />
        <slot name="trail" />
    </svelte:fragment>
</AppBar>
