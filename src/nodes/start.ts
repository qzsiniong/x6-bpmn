import { Graph } from "@antv/x6";

Graph.registerNode(
	"event",
	{
		inherit: "circle",
		attrs: {
			body: {
				strokeWidth: 2,
				stroke: "#5F95FF",
				fill: "#FFF"
			}
		}
	},
	true
);