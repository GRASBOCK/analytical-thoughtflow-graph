<script lang="ts">
    import NodeInfo from '../components/NodeInfo.svelte';
    import { Graph, Node } from '../graph';
    import VizNetwork from './VizNetwork.svelte';

    export let graph: Graph = new Graph()
    let selected: Node|null = null
</script>

<div class="flex-container">
    <div id="network_panel"><VizNetwork graph={graph} on_select={(n)=>{selected = n;}}/></div>
    <div id="info_panel"><NodeInfo node={selected}/></div>
</div>

<style>
    .flex-container {
      display: flex;
      flex-wrap: nowrap;
      width:100vw;
      max-height: 100vh;
      background-color: rgb(85, 85, 85);
    }
    
    .flex-container > div {
      background-color: #ffffff;
    }

    #network_panel{
        float:left;
        width:60%;
    }
    #info_panel{
        margin-left: 10px;
        font-size: 30px;
        padding: 50px;
        width:40%;
        word-wrap: break-word;
    }
</style>