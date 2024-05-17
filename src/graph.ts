export enum NodeType {
    Observation = "observation"
}

export type label = string

export class Node {
    label: label = ""
    text: string = ""
    type: NodeType | undefined = undefined
}

export enum EdgeType {
    Reference = "reference"
}

export class Edge {
    from: string = ""
    to: string = ""
    type: EdgeType | undefined = undefined
}

export class Graph {
    nodes: Node[] = []
    edges: Edge[] = []
}