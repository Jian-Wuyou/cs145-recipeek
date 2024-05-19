<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import { Fire } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
</script>

<AppBar>
    <svelte:fragment slot="lead">
        <Icon class="w-8 stroke-2" src={Fire} />
    </svelte:fragment>
    <span class="text-2xl font-semibold">ReciPeek</span>
    <slot slot="trail"/>
</AppBar>
