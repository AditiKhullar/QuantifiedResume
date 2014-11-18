var skills=[["Java",11],["Algorithm",11],["SQL",8],["Unix",7],["Data Structures",7],["C",3],["C++",3],["Python",2],["Machine Learning",2],["Data Mining",1]];
var intern=["0.png","1.png","2.png","3.png","4.png","5.png"];
var main=d3.select("body").selectAll(".main");
main.append("img")
    .attr("id","human")
    .attr("alt","No")
    .attr("src","images/human.png");
var svg=main.select("#svg") 
	.style("position","relative")
	.style("float","left")
	.attr("top","0pt")
	.attr("left","0pt")
    .attr("width", "100%")
    .attr("height", "100%");
 svg.append("defs")
    .append("pattern")
    .attr("id", "image")
    //.attr("patternUnits", "userSpaceOnUse")
    .attr("height","3pt")
    .attr("width", "3pt")
    .append("image")
    .attr("xlink:href","images/aditi.jpg")
    .attr("x", "0pt")
    .attr("y","0pt")
    .attr("height","120pt")
    .attr("width","120pt");
svg.append("circle")
   .attr("id","head")
   .attr("cx", "50.03%")
   .attr("cy","52.8%")
   .attr("r","7.1%")
   .style("fill","url(#image)");
main.append("img")
    .attr("id","bs")
    .attr("src","images/hat.png");
main.append("img")
    .attr("id","ms")
    .attr("src","images/hat.png");
main.append("div")
	.attr("class","hat_bs");
main.append("div")
	.attr("class","hat_ms");
main.select(".hat_bs")
	.append("p")
	.attr("id","p_bs")
	.text("BS CSE DTU");
main.select(".hat_ms")
	.append("p")
	.attr("id","p_ms")
	.text("MS CS UIUC");
for(var i=0;i<Math.ceil(skills.length/2);i++){
	var r0=105;
	var init=-5;
	var th=75/Math.ceil(skills.length/2);
	var x1=535-r0*Math.cos((init+i*th)/180*Math.PI);
	var y1=280-r0*Math.sin((init+i*th)/180*Math.PI);
	var x2=535-(r0+skills[i][1]*15)*Math.cos((init+i*th)/180*Math.PI);
	var y2=280-(r0+skills[i][1]*15)*Math.sin((init+i*th)/180*Math.PI);
	svg.append("line")
	   .attr("id","skill"+i)
	   .attr("x1",x1+"pt")
	   .attr("y1",y1+"pt")
	   .attr("x2",x2+"pt")
	   .attr("y2",y2+"pt")
	   .style("stroke-width","14pt")
	   .style("stroke","rgb(70,130,180)");
	svg.append("circle")
	   .attr("id","cir")
	   .attr("cx",x1+"pt")
	   .attr("cy",y1+"pt")
	   .attr("r","7pt")
	   .style("fill","rgb(70,130,180)");
	svg.append("circle")
	   .attr("id","cir")
	   .attr("cx",x2+"pt")
	   .attr("cy",y2+"pt")
	   .attr("r","7pt")
	   .style("fill","rgb(70,130,180)");
	var tx=-(skills[i][0].length*7+r0+12+skills[i][1]*15);
    svg.append("text")
	   .style("fill", "black")
	   .style("font-size", "1em")
	   .attr("font-family","courier")
	   .attr("x", tx+"pt")
	   .attr("y", "0pt")
	   //.attr("text-anchor", "middle")
	   .attr("transform", "translate("+715+","+370+") rotate("+(init-1.5+(i)*th)+")")
	   .text(skills[i][0]);
}
for(var i=Math.ceil(skills.length/2);i<skills.length;i++){
	var r0=112;
	var init=130;
	var th=75/Math.ceil(skills.length/2);
	var x1=535-r0*Math.cos((init+(i-Math.ceil(skills.length/2))*th)/180*Math.PI);
	var y1=280-r0*Math.sin((init+(i-Math.ceil(skills.length/2))*th)/180*Math.PI);
	var x2=535-(r0+skills[i][1]*15)*Math.cos((init+(i-Math.ceil(skills.length/2))*th)/180*Math.PI);
	var y2=280-(r0+skills[i][1]*15)*Math.sin((init+(i-Math.ceil(skills.length/2))*th)/180*Math.PI);
	svg.append("line")
	   .attr("id","skill"+i)
	   .attr("x1",x1+"pt")
	   .attr("y1",y1+"pt")
	   .attr("x2",x2+"pt")
	   .attr("y2",y2+"pt")
	   .style("stroke-width","14pt")
	   .style("stroke","rgb(70,130,180)");
	svg.append("circle")
	   .attr("id","cir")
	   .attr("cx",x1+"pt")
	   .attr("cy",y1+"pt")
	   .attr("r","7pt")
	   .style("fill","rgb(70,130,180)");
	svg.append("circle")
	   .attr("id","cir")
	   .attr("cx",x2+"pt")
	   .attr("cy",y2+"pt")
	   .attr("r","7pt")
	   .style("fill","rgb(70,130,180)");
	var tx=(-skills[i][0].length*(-0.1)+r0+9+skills[i][1]*15);
    svg.append("text")
	   .style("fill", "black")
	   .style("font-size", "1em")
	   .attr("font-family","courier")
	   .attr("x", tx+"pt")
	   .attr("y", "0pt")
	   //.attr("text-anchor", "middle")
	   .attr("transform", "translate("+715+","+373+") rotate("+(180+init+1.5+(i+-Math.ceil(skills.length/2))*th)+")")
	   .text(skills[i][0]);
	
}
for(var i=0;i<intern.length;i++){
	var x,y;
	switch(i){
		case 0:
		case 1:
		case 2:
		case 3: x=460+40*i;y=365; break;
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9: x=439+40*(i-4); y=410; break;
	}
	svg.append("image")
	   .attr("x",x+"pt")
	   .attr("y",y+"pt")
	   .attr("width","45pt")
	   .attr("height","45pt")
	   .attr("xlink:href","images/badge.png");
	svg.append("image")
	   .attr("class","badge")
	   .attr("x",(x+11)+"pt")
	   .attr("y",(y+9)+"pt")
	   .attr("width","23pt")
	   .attr("height","23pt")
	   .attr("xlink:href","images/"+intern[i]);
}