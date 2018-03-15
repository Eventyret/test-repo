let NorthEast = ndx
	.dimension(function(d) {
		if (d.region == "North East") {
			// What oyu want to do with the code if this is true.
		}
	})
	.filter(function(d) {
		if (d["region"] === "North East") return d.area;
		console.log("in NE filter");
	});
