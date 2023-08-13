class Graph {
	numberOfNodes: number;
	public matrix: number[][];

	constructor(numberOfNodes: number) {
		this.numberOfNodes = numberOfNodes;
		this.matrix = new Array(numberOfNodes).fill([]);
	}

	public addEdge = (source: number, destination: number, weight: number) => {};
}

export default Graph;
