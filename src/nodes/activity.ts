import { Graph, ObjectExt, Shape } from "@antv/x6";

class Activity extends Shape.Rect {

	dataChangeHandler() {
		const data = this.getData();
		if (data && data.status) {
			this.setAttrByPath('label/fill', data.status == 'pass' ? 'green' : 'black');
		}
	}

	setup(): void {
		super.setup();
		this.dataChangeHandler();
		this.on('change:data', () => {
			this.dataChangeHandler();
		});
	}
}

Activity.config({
	// propHooks(metadata) {
	// 	const { data, ...others } = metadata
	// 	if (data && data.status) {
	// 		ObjectExt.setByPath(others, 'attrs/label/fill', data.status == 'pass' ? 'green' : 'black');
	// 	}
	// 	return others
	// },
	markup: [
		{
			tagName: "rect",
			selector: "body",
		},
		{
			tagName: "image",
			selector: "img",
		},
		{
			tagName: "text",
			selector: "label",
		},
	],
	attrs: {
		body: {
			rx: 6,
			ry: 6,
			stroke: "#5F95FF",
			fill: "#EFF4FF",
			strokeWidth: 1,
		},
		img: {
			x: 6,
			y: 6,
			width: 16,
			height: 16,
			"xlink:href":
				"https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ",
		},
		label: {
			fontSize: 12,
			fill: "#262626",
		},
	},
});

Graph.registerNode('activity', Activity);
