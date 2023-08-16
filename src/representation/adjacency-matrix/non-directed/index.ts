class Graph {
	numberOfNodes: number;
	public matrix: number[][];

	constructor(numberOfNodes: number) {
		this.numberOfNodes = numberOfNodes;
		this.matrix = new Array(numberOfNodes).fill(null).map(() => []);
	}

	public addEdge(source: number, destination: number) {
		this.matrix[source].push(destination);
	}

	public bfs(startingNode: number) {
		const visited: boolean[] = new Array(this.numberOfNodes).fill(false);
		const queue: number[] = [];

		visited[startingNode] = true;

		queue.push(startingNode);

		while (queue.length) {
			const currentNode = queue.shift() as number;
			console.log(currentNode);
			const adjacentNodes = this.matrix[currentNode];

			for (let i = 0; i < adjacentNodes.length; i++) {
				const adjacentNode = adjacentNodes[i];

				if (!visited[adjacentNode]) {
					visited[adjacentNode] = true;
					queue.push(adjacentNode);
				}
			}
		}
	}
}

export default Graph;
