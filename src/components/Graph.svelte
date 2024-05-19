<script lang="ts">
    import NodeInfo from '../components/NodeInfo.svelte';
    import { Graph, Node } from '../graph';
    import VizNetwork from './VizNetwork.svelte';

    export let graph: Graph = new Graph()
    let selected: Node|null = null
</script>

<VizNetwork graph={graph} on_select={(n)=>{selected = n;}}/>
<NodeInfo node={selected}/>