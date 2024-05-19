<script lang="ts">
    import { Node } from "../graph";
    export let node: Node|null = null
</script>

<p>
    {#if node === null}
        No node selected
    {:else}
        <h1>{node.label}</h1>
        <p>{node.text}</p>
    {/if}
    
</p>