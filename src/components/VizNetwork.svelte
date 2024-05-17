<script>
    import { onMount } from 'svelte';
    import * as vis from 'vis-network'
    import {DataSet} from 'vis-data'
    var network = null;
    import {Graph} from '../graph'

    export let graph = new Graph();

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
        var edges = new DataSet(graph.edges.map(edge => {
            return { from: edge.from, to: edge.to }; 
        }));

        var data = {
            nodes: nodes,
            edges: edges,
        };

        // create a network
        var container = document.getElementById("mynetwork");
        var directionInput = "UD";
        var options = {
            interaction: {
                dragNodes: false
            },
            edges: {
                smooth: {
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
            console.log("Selection: " + params.nodes)
        });
    }

    onMount(async () => {
      draw();
    });

</script>

<div id="mynetwork"></div>

<style>
    #mynetwork {
        width: 70%;
        height: 100%;
        position:absolute;
        left:0;
        top:0;
        border: 1px solid lightgray;
    }
</style>