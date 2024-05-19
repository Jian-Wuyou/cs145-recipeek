<script lang="ts">
    export let background = 'variant-filled';
    export let width = 'w-fit min-w-36';
    export let padding = 'px-0.5 py-0.5';
    export let font = 'font-bold';
    export let text = 'text-sm';
</script>

<div class={`p-4 ${width}`}>
        <button
            class={`btn w-full ${background}`}
            on:click
        >
            <div class={`text-dark ${padding} ${font} ${text}`}><slot /></div>
        </button>
</div>
