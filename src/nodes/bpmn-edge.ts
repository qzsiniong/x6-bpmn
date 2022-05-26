import { Graph } from "@antv/x6";

Graph.registerEdge(
	"bpmn-edge",
	{
		inherit: "edge",
		attrs: {
			line: {
				stroke: "#A2B1C3",
				strokeWidth: 2
			}
		}
	},
	true
);
