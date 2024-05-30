<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import { Fire } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { sessionStore } from '$lib/store/session';

    $: url = $sessionStore.loggedIn ? '/user/dashboard' : '/';
</script>

<AppBar shadow="shadow-md" padding="p-0">
    <svelte:fragment slot="lead">
        <div class="flex auto-rows-fr">
            <a href={url}>
                <div class="m-4 flex w-auto items-center gap-2">
                    <Icon class="w-8 stroke-2" src={Fire} />
                    <span class="text-2xl font-semibold">ReciPeek</span>
                </div>
            </a>
            <div class="m-auto mx-3">|</div>
            <slot name="lead" />
        </div>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <slot />
        <slot name="trail" />
    </svelte:fragment>
</AppBar>
