export interface GraphNode {
  id: number;
  row: number;
  col: number;
  neighbors: number[];
  player: number | undefined;
}

export type Graph = GraphNode[];
