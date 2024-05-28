<script lang="ts">
    import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
    import {
        Modal,
        Toast,
        initializeStores,
        modeCurrent,
        setModeCurrent,
        storePopup,
        type ModalComponent,
    } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';
    import '../app.postcss';

    import { AddItemForm, ManageSubscriptions } from '$lib/components/modals';

    const modalRegistry: Record<string, ModalComponent> = {
        addItemForm: { ref: AddItemForm },
        manageSubscriptions: { ref: ManageSubscriptions },
    };

    initializeStores();
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

    onMount(() => {
        setModeCurrent($modeCurrent);
    });
</script>

<Toast position="t" />
<Modal components={modalRegistry} />
<slot />
