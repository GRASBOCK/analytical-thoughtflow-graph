<script lang="ts">
    import { onMount } from 'svelte';
    import * as vis from 'vis-network'
    import {DataSet} from 'vis-data'
    var network: vis.Network | null = null;
    import {Graph, Node} from '../graph'

    export let graph = new Graph();
    export let on_select = function (node: Node){console.log("Selection: " + node)}

    function destroy() {
        if (network !== null) {
            network.destroy();
            network = null;
        }
    }

    function draw() {
        destroy();
        // create an array with nodes
        var nodes = new DataSet(graph.nodes.map((node, index) => {
            return { id: index, label: node.label }; 
        }));

        // create an array with edges
        var edges: vis.DataInterfaceEdges = new DataSet(graph.edges.map((edge, index) => {
            return { id:index, from: edge.from, to: edge.to }; 
        }));

        var data: vis.Data = {
            nodes: nodes,
            edges: edges,
        };

        // create a network
        var container = document.getElementById("mynetwork");
        if(container == null){
            return
        }
        var directionInput = "UD";
        var options: vis.Options = {
            interaction: {
                dragNodes: false
            },
            edges: {
                smooth: {
                    enabled: true,
                    type: "cubicBezier",
                    roundness: 0.4,
                },
            },
            layout: {
                hierarchical: {
                    direction: directionInput,
                },
            },
        };
        network = new vis.Network(container, data, options);

        // add event listeners
        network.on("select", function (params) {
            if(params.nodes.length > 0){
                let node_index = params.nodes[0]
                let node = graph.nodes[node_index]
                on_select(node)
            }
        });
    }

    onMount(async () => {
      draw();
    });

</script>

<div id="mynetwork"></div>

<style>
    #mynetwork {
        width: 100%;
        height: 100vh;
    }
</style>