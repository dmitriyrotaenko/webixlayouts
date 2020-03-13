const Products = {
	view: "treetable",
	id: "Products",
	columns: [
		{
			id: "id", header: "", css: {"text-align": "left"}, width: 50
		},
		{
			id: "title", header: "Title", fillspace: true, template: "{common.treetable()} #title#"
		},
		{	id: "price", header: "Price", fillspace: true	}
	],
	scrollX: false,
	select: true,

	ready: function() {
		this.openAll();
	}
}