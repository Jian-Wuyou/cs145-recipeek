<script lang="ts">
    import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
    import { Modal, Toast, initializeStores, modeCurrent, setModeCurrent, storePopup } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';
    import '../app.postcss';

    initializeStores();
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

    onMount(() => {
        setModeCurrent($modeCurrent);
    });
</script>

<Toast position="t" />
<Modal />
<slot />
