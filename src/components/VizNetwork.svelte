<script>
    import { onMount } from 'svelte';
    import * as vis from 'vis-network'
    import {DataSet} from 'vis-data'
    var network = null;

    function destroy() {
        if (network !== null) {
            network.destroy();
            network = null;
        }
    }

    function draw() {
        destroy();
        // create an array with nodes
        var nodes = new DataSet([
        { id: 1, label: "Node 1" },
        { id: 2, label: "Node 2" },
        { id: 3, label: "Node 3" },
        { id: 4, label: "Node 4" },
        { id: 5, label: "Node 5" },
        ]);

        // create an array with edges
        var edges = new DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        ]);

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