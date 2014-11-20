var svg = d3.select("#timeline");

var data = null;

d3.json("./data/AditiJsonProfile.json", function(error, json) {
  //if (error) return console.warn(error);
  data = json;
  console.log(data);
  var main_t = svg.append("g");
});