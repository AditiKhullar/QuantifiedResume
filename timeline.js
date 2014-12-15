var svg = d3.select("#timeline");
var width = 1000;
var height = 1000;
var margin = 50;

var data = null;
var x2js = new X2JS();

var formatMY = d3.time.format('%m/%Y');
var formatY = d3.time.format('%Y');

function getTime (t) {
	// body...
	if(!("month" in t) && !("year" in t)){
		return new Date();
	}
	else if(!("month" in t)){
		return formatY.parse(t["year"]);
	}
	else{
		return formatMY.parse(t["month"]+"/"+t["year"]);	
	}
}

function getFullTime (d) {
	// body...
	d["time"] = []
	if("start-date" in d){
		d["start-time"] = getTime(d["start-date"]);
  	} else {
  		d["start-time"] = new Date();
  	}
  	if("end-date" in d){
		d["end-time"] = getTime(d["end-date"]);
  	} else {
  		d["end-time"] = new Date();
  	}
  	d["time"] = [d["start-time"], d["end-time"]];
  	return d;
}

d3.text("./data/data.xml", function(error, xml) {
  if (error) return console.warn(error);
  data = x2js.xml_str2json(xml);
  data = data["person"];
  console.log(data);
  d3.select("#fullname").text(data["first-name"]+" "+data["last-name"]);
  var max_time = new Date();
  var min_time = new Date();
  data.positions.position.forEach(function (d) {
  	// body...
  	d = getFullTime(d);
  	if(d["start-time"] < min_time){
  		min_time = d["start-time"];
  	}

  });

  data.educations.education.forEach(function (d) {
  	// body...
  	d = getFullTime(d);
  	if(d["start-time"] < min_time){
  		min_time = d["start-time"];
  	}

  });

  var y = d3.scale.linear();
  y.domain([max_time, min_time])
  	.range([0,height]);
  var axis_data = [min_time, max_time];
  var axis_line = d3.svg.line()
  		.x(0)
  		.y(function (d) {
  			// body...
  			return y(d);
  		});

  console.log(axis_data);
  console.log(y(axis_data[0]), y(axis_data[1]));
  svg.attr("width", width+2*margin)
  	.attr("height", height+2*margin);


  var main_t = svg.append("g");
  main_t.append("path")
  	.datum(axis_data)
  	.attr("class", "line_axis")
  	.attr("d", axis_line)
  	.attr("transform", "translate("+(margin+width/4.0)+", "+margin+")");


  	/*
 	* Industry Part
 	*/
  var position_line = d3.svg.line()
  		.x(-10)
  		.y(function (d) {
  			// body...
  			console.log(d);
  			return y(d);
  		});

  var positions_t = svg.append("g");
  var pp = positions_t.selectAll("g")
  	.data(data.positions.position)
  	.enter()
  	.append("g");

  pp.append("path")  	
  	.datum(function (d) {
  		// body...
  		console.log(d);
  		return d["time"];
  	})
  	.attr("class", "line_axis industry")
  	.attr("d", position_line)
  	.attr("transform",function (d) {
  		// body...
  		return "translate("+(margin+width/4.0)+", "+(margin+y(d[0]))+")";
  	});
//  console.log("Data points", positions_t, pp);

  pp.append("text")
  	.text(function (d) {
  		// body...
  		console.log("Data point", d);
  		return d["title"]+"-"+d["company"]["name"];
  	})
  	.attr("transform", function (d) {
  		// body...
  		console.log(d);
  		//return "translate("+(margin+width/4.0)+", "+y(d3.mean(d["time"]))+")";
  		return "translate("+(10+margin+width/4.0)+", "+(y(d["time"][0])+margin)+")";
  	});

 	/*
 	* Education Part
 	*/
	var education_line = d3.svg.line()
		.x(-20)
		.y(function (d) {
			// body...
			console.log(d);
			return y(d);
		});

  var educations_t = svg.append("g");
  var ep = educations_t.selectAll("path")
  	.data(data.educations.education)
  	.enter()
  	.append("g");

  ep.append("path")  	
  	.datum(function (d) {
  		// body...
  		console.log(d);
  		return d["time"];
  	})
  	.attr("class", "line_axis education")
  	.attr("d", education_line)
  	.attr("transform", "translate("+(margin+width/4.0)+", "+margin+")");
//  console.log("Data points", positions_t, pp);

	var e_width = 20;
  var e_text = ep.append("text");

  	e_text.append("tspan").text(function (d) {
  		// body...
  		console.log("Data point", d);
  		var degree = "";
  		var field  = "";
  		var school = "";
  		if("degree" in d) degree = d["degree"];
  		if("field-of-study" in d) field = d["field-of-study"];
  		if("school-name" in d) school = d["school-name"];
  		return degree;
  	})
  	.attr("text-anchor", "end")
  	.attr("dy", "1em")
  	.attr("x", 0);


  	e_text.append("tspan").text(function (d) {
  		// body...
  		console.log("Data point", d);
  		var degree = "";
  		var field  = "";
  		var school = "";
  		if("degree" in d) degree = d["degree"];
  		if("field-of-study" in d) field = d["field-of-study"];
  		if("school-name" in d) school = d["school-name"];
  		return field;
  	})
  	.attr("text-anchor", "end")
  	.attr("dy", "1em")
  	.attr("x", 0);

  	e_text.append("tspan").text(function (d) {
  		// body...
  		console.log("Data point", d);
  		var degree = "";
  		var field  = "";
  		var school = "";
  		if("degree" in d) degree = d["degree"];
  		if("field-of-study" in d) field = d["field-of-study"];
  		if("school-name" in d) school = d["school-name"];
  		return school;
  	})
  	.attr("text-anchor", "end")
  	.attr("dy", "1em")
  	.attr("x", 0);

  	e_text.attr("width", e_width)
  	.attr("transform", function (d) {
  		// body...
  		console.log(d);
  		//return "translate("+(margin+width/4.0)+", "+y(d3.mean(d["time"]))+")";
  		return "translate("+(-e_width+margin+width/4.0)+", "+(y(d["time"][0])+margin)+")";
  	});
});