var post=d3.json("AditiJsonProfile.json", function(error, data) {
	var root=data;
	var year_choose="2014", month_choose="12";
	//var skills=[["Java",11],["Algorithm",11],["SQL",8],["Unix",7],["Data Structures",7],["C",3],["C++",3],["Python",3]];
	var skills2=[["Java",0],["Algorithms",0],["SQL",8],["Unix",7],["Data Structures",7],["C",3],["C++",3],["Python",3]];
	var skills=new Array(skills2.length);
	d3.csv("Endorsement Info-2.csv", function(error, d){
		d.forEach(function(d) {
        	d.date = d['Endorsement Date'];
        	d.skill = d['Skill Name'];
    	});
    	for(var i=0;i<skills.length;i++){
    		skills[i]=new Array(2);
    		skills[i][0]=skills2[i][0];skills[i][1]=0;
    	}
    	var start=0;
    	while(start<d.length&&d[start].date.substring(0,4)>year_choose) start++;
    	while(start<d.length&&d[start].date.substring(0,4)==year_choose&&d[start].date.substring(5,7)>month_choose) start++;
    	for(var i=start;i<d.length;i++){
    		var j=0;
    		while(j<skills.length&&d[i].skill!=skills[j][0]) j++;
    		if(j<skills.length)
    			skills[j][1]++;
    	}
    	
    	
    	var main=d3.select("body").selectAll(".main");
		main.append("img")
		    .attr("id","human")
		    .attr("alt","No")
		    .attr("src","images/human.png");
		var svg=main.append("svg").attr("id","svg") 
			.style("position","relative")
			.style("float","left")
			.attr("top","0pt")
			.attr("left","0pt")
		    .attr("width", "100%")
		    .attr("height", "100%");
		var tip=d3.select("body").append("div").attr("id","tooltip0").attr("class","hidden");
		var name=tip.append("p");
		name.append("strong").text("Position: ");
		name.append("span").attr("id","title");
		var time=tip.append("p");
		time.append("strong").text("Time: ");
		time.append("span").attr("id","time");
		var sum=tip.append("p");
		sum.append("strong").text("Summary: ");
		sum.append("span").attr("id","sum");
		var tip1=d3.select("body").append("div").attr("id","tooltip1").attr("class","hidden");
		var degree=tip1.append("p");
		degree.append("strong").text("Degree: ");
		degree.append("span").attr("id","degree");
		var school=tip1.append("p");
		school.append("strong").text("School: ");
		school.append("span").attr("id","school");
		var time1=tip1.append("p");
		time1.append("strong").text("Time: ");
		time1.append("span").attr("id","time");
		 svg.append("defs")
		    .append("pattern")
		    .attr("id", "image")
		    .attr("patternUnits", "userSpaceOnUse")
		    .attr("height","100%")
		    .attr("width", "100%")
		    .append("image")
		    .attr("xlink:href",data.person.icon)
		    .attr("x", function(){
		    	return "44%";	
		    })
		    .attr("y","210pt")
		    .attr("height","130pt")
		    .attr("width","130pt");
		svg.append("circle")
		   .attr("id","head0")
		   .attr("cx", "50.03%")
		   .attr("cy","272pt")
		   .attr("r","81")
		   .style("fill","url(#image)")
		   ;
		main.append("img")
		    .attr("id","bs")
		    .attr("src","images/hat.png");
		main.append("img")
		    .attr("id","sch")
		    .attr("src","images/hat.png");
		main.append("img")
		    .attr("id","ms")
		    .attr("src","images/hat2.png");
		main.append("div")
			.attr("class","hat_bs");
	    main.append("div")
			.attr("class","hat_sch");
		main.append("div")
			.attr("class","hat_ms");
		main.select(".hat_bs")
			.append("p")
			.attr("id","p_bs")
			.text("BS CSE DTU")
			.on("mouseover",function () {
			        var xPos = 800;
					var yPos = 200;
			        d3.select("#tooltip1")
			        .style("left", xPos+"pt")
				    .style("top", yPos+"pt")
				    .select("#degree")
				    .text(data.person.education.edu[0].degree);
				    d3.select("#tooltip1")
			        .style("left", xPos+"pt")
				    .style("top", yPos+"pt")
				    .select("#school")
				    .text(data.person.education.edu[0].school);
				    d3.select("#tooltip1")
			        .style("left", xPos + "px")
				    .style("top", yPos + "px")
				    .select("#time")
				    .text(data.person.education.edu[0].time);
			        d3.select("#tooltip1").classed("hidden", false);
				})
			   .on("mouseout", function () {
					d3.select("#tooltip1").classed("hidden", true);
				});
		main.select(".hat_sch")
			.append("p")
			.attr("id","p_sch")
			.text("Sch. UC booth")
			.on("mouseover",function () {
			        var xPos = 810;
					var yPos = 130;
			        d3.select("#tooltip1")
			        .style("left", xPos+"pt")
				    .style("top", yPos+"pt")
				    .select("#degree")
				    .text(data.person.education.edu[1].degree);
				    d3.select("#tooltip1")
			        .style("left", xPos+"pt")
				    .style("top", yPos+"pt")
				    .select("#school")
				    .text(data.person.education.edu[1].school);
				    d3.select("#tooltip1")
			        .style("left", xPos + "px")
				    .style("top", yPos + "px")
				    .select("#time")
				    .text(data.person.education.edu[1].time);
			        d3.select("#tooltip1").classed("hidden", false);
				})
			   .on("mouseout", function () {
					d3.select("#tooltip1").classed("hidden", true);
				});
		main.select(".hat_ms")
			.append("p")
			.attr("id","p_ms")
			.text("MS CS UIUC")
			.on("mouseover",function () {
			        var xPos = 820;
					var yPos = 60;
			        d3.select("#tooltip1")
			        .style("left", xPos+"pt")
				    .style("top", yPos+"pt")
				    .select("#degree")
				    .text(data.person.education.edu[2].degree);
				    d3.select("#tooltip1")
			        .style("left", xPos+"pt")
				    .style("top", yPos+"pt")
				    .select("#school")
				    .text(data.person.education.edu[2].school);
				    d3.select("#tooltip1")
			        .style("left", xPos + "px")
				    .style("top", yPos + "px")
				    .select("#time")
				    .text(data.person.education.edu[2].time);
			        d3.select("#tooltip1").classed("hidden", false);
				})
			   .on("mouseout", function () {
					d3.select("#tooltip1").classed("hidden", true);
				});
		var new_skills=skills;
		/*for(var i=0;i<skills.length;i++){
			new_skills[i]=new Array(2);
			for(var j=0;j<2;j++){
				new_skills[i][j]=skills[i][j];
			}
		}*/
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
		    .attr("class","text")
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
		    .attr("class","text")
			   .style("fill", "black")
			   .style("font-size", "1em")
			   .attr("font-family","courier")
			   .attr("x", tx+"pt")
			   .attr("y", "0pt")
			   //.attr("text-anchor", "middle")
			   .attr("transform", "translate("+715+","+373+") rotate("+(180+init+1.5+(i+-Math.ceil(skills.length/2))*th)+")")
			   .text(skills[i][0]);
			
		}
		var badge=svg.selectAll("image")	       
		       .data(data.person.positions.position)
		       .enter();
		  badge.append("image")
		  	   .attr("class","badge0")
			   .attr("x",function(data, i){
			   		var x;
			   		var j=root.person.positions.position.length-i-1;
					switch(j){
						case 0:
						case 1:
						case 2:
						case 3: x=460+40*j; break;
						case 4:
						case 5:
						case 6:
						case 7:
						case 8:
						case 9: x=439+40*(j-4); break;
					}
			   		return x+"pt";
			   	})
			   .attr("y",function(data,i){
			   		var y;
			   		var j=root.person.positions.position.length-i-1;
					switch(j){
						case 0:
						case 1:
						case 2:
						case 3: y=365; break;
						case 4:
						case 5:
						case 6:
						case 7:
						case 8:
						case 9: y=410; break;
					}
			   		return y+"pt";
			   	})
			   .attr("width","45pt")
			   .attr("height","45pt")
			   .attr("xlink:href","images/badge.png");
		  badge.append("image")
			   .attr("class","badge")
			   .attr("x",function(data, i){
			   		var x;
			   		var j=root.person.positions.position.length-i-1;
					switch(j){
						case 0:
						case 1:
						case 2:
						case 3: x=460+40*j; break;
						case 4:
						case 5:
						case 6:
						case 7:
						case 8:
						case 9: x=439+40*(j-4); break;
					}
			   		return (x+11)+"pt";
			   	})
			   .attr("y",function(data,i){
			   		var y;
			   		var j=root.person.positions.position.length-i-1;
					switch(j){
						case 0:
						case 1:
						case 2:
						case 3: y=365; break;
						case 4:
						case 5:
						case 6:
						case 7:
						case 8:
						case 9: y=410; break;
					}
			   		return (y+9)+"pt";
			   	})
			   .attr("width","23pt")
			   .attr("height","23pt")
			   .attr("xlink:href",function(data, i){
			   		return data.image;
			   	})
			   .on("mouseover",function (data, i) {
			        var xPos = parseFloat(d3.select(this).attr('x'))+30;
			        var line=data.summary.length/100;
					var yPos = parseFloat(d3.select(this).attr('y'))-line*20;
			        d3.select("#tooltip0")
			        .style("left", xPos+"pt")
				    .style("top", yPos+"pt")
				    .select("#title")
				    .text(data.title+" in "+ data.company.name);
				    d3.select("#tooltip0")
			        .style("left", xPos + "px")
				    .style("top", yPos + "px")
				    .select("#time")
				    .text(function(){
				    	var mon,mon2;
						switch(data.start_date.month){
							case "1": mon="Jan"; break;
							case "2": mon="Feb"; break;
							case "3": mon="Mar"; break;
							case "4": mon="Apr"; break;
							case "5": mon="May"; break;
							case "6": mon="Jun"; break;
							case "7": mon="Jul"; break;
							case "8": mon="Aug"; break;
							case "9": mon="Sept"; break;
							case "10": mon="Oct"; break;
							case "11": mon="Nov"; break;
							case "12": mon="Dec"; break;
						}
						switch(data.end_date.month){
							case "1": mon2="Jan"; break;
							case "2": mon2="Feb"; break;
							case "3": mon2="Mar"; break;
							case "4": mon2="Apr"; break;
							case "5": mon2="May"; break;
							case "6": mon2="Jun"; break;
							case "7": mon2="Jul"; break;
							case "8": mon2="Aug"; break;
							case "9": mon2="Sept"; break;
							case "10": mon2="Oct"; break;
							case "11": mon2="Nov"; break;
							case "12": mon2="Dec"; break;
						}
				   		return mon+" "+data.start_date.year +" - "+mon2+" "+data.end_date.year;
				    });
				    d3.select("#tooltip0")
			        .style("left", xPos+"pt")
				    .style("top", yPos+"pt")
				    .select("#sum")
				    .text(function(){
				    	return data.summary.replace(/\n/g," -");
				    });
			        d3.select("#tooltip0").classed("hidden", false);
				})
			   .on("mouseout", function () {
					d3.select("#tooltip0").classed("hidden", true);
				});
			svg.append("image").attr("class","badge_last").attr("x","479pt")
			   .attr("y","410pt")
			   .attr("width","45pt")
			   .attr("height","45pt")
			   .attr("xlink:href","images/badge.png");
			svg.append("image").attr("class","badge0_last").attr("x","490pt")
			   .attr("y","419pt")
			   .attr("width","45pt")
			   .attr("height","45pt")
			   .attr("width","23pt")
			   .attr("height","23pt")
			   .attr("xlink:href",data.person.positions.position[0].image)
			   .on("mouseover",function () {
			        var xPos = parseFloat(d3.select(this).attr('x'))+30;
			        var line=data.person.positions.position[0].summary.length/100;
					var yPos = parseFloat(d3.select(this).attr('y'))-line*20;
			        d3.select("#tooltip0")
			        .style("left", xPos+"pt")
				    .style("top", yPos+"pt")
				    .select("#title")
				    .text(data.person.positions.position[0].title+" in "+ data.person.positions.position[0].company.name);
				    d3.select("#tooltip0")
			        .style("left", xPos + "px")
				    .style("top", yPos + "px")
				    .select("#time")
				    .text(function(){
				    	var mon,mon2;
						switch(data.person.positions.position[0].start_date.month){
							case "1": mon="Jan"; break;
							case "2": mon="Feb"; break;
							case "3": mon="Mar"; break;
							case "4": mon="Apr"; break;
							case "5": mon="May"; break;
							case "6": mon="Jun"; break;
							case "7": mon="Jul"; break;
							case "8": mon="Aug"; break;
							case "9": mon="Sept"; break;
							case "10": mon="Oct"; break;
							case "11": mon="Nov"; break;
							case "12": mon="Dec"; break;
						}
						switch(data.person.positions.position[0].end_date.month){
							case "1": mon2="Jan"; break;
							case "2": mon2="Feb"; break;
							case "3": mon2="Mar"; break;
							case "4": mon2="Apr"; break;
							case "5": mon2="May"; break;
							case "6": mon2="Jun"; break;
							case "7": mon2="Jul"; break;
							case "8": mon2="Aug"; break;
							case "9": mon2="Sept"; break;
							case "10": mon2="Oct"; break;
							case "11": mon2="Nov"; break;
							case "12": mon2="Dec"; break;
						}
				   		return mon+" "+data.person.positions.position[0].start_date.year +" - "+mon2+" "+data.person.positions.position[0].end_date.year;
				    });
				    d3.select("#tooltip0")
			        .style("left", xPos+"pt")
				    .style("top", yPos+"pt")
				    .select("#sum")
				    .text(function(){
				    	return data.person.positions.position[0].summary.replace(/\n/g," -");
				    });
			        d3.select("#tooltip0").classed("hidden", false);
				})
			   .on("mouseout", function () {
					d3.select("#tooltip0").classed("hidden", true);
				});
				d3.select("body").append("div")
				  .attr("id","time_text")
				  .append("p").attr("id","time_p").append("span").text("Dec 2015");
				var slider0=d3.select("body").append("div")
				  .attr("id","slider");
	
				//original slider				
				var axis = d3.svg.axis().orient("top").ticks(4);
				var d_slider = d3.slider().axis(true).min(2006).max(2015).step(1/12).value(2015).on("slide", function(evt, value) {
					console.log("SLIDER EVENT: ",evt, value);
	      			var mon2,year;
	      			d3.select('#time_p').text(function(){
	      				var num=value-Math.floor(value);
	      				var nn=num.toFixed(6);
	      				switch(nn){
							case "0.083333": mon2="Feb"; break;
							case "0.166667": mon2="Mar"; break;
							case "0.250000": mon2="Apr"; break;
							case "0.333333": mon2="May"; break;
							case "0.416667": mon2="Jun"; break;
							case "0.500000": mon2="Jul"; break;
							case "0.583333": mon2="Aug"; break;
							case "0.666667": mon2="Sept"; break;
							case "0.750000": mon2="Oct"; break;
							case "0.833333": mon2="Nov"; break;
							case "0.916667": mon2="Dec"; break;
							case "0.000000": mon2="Jan"; break;
						}
	      				year=Math.floor(value);
	      				return mon2+" "+year;
	      			});
	      			update(mon2, year, d);
	    	});
	    		d3.select('#slider').call(d_slider);
				
				var curr_year = 2006;
				d3.select("body").append("div").attr("id","play")
				  .append("input")
				  .attr("type","image")
				  .attr("src",function(){
				   	  return "./images/play.png";
				  })
				    .style("position","relative")
				    .style("top","20pt")
				    .style("left","-18pt")
				    .attr("width","42pt")
				    .attr("height","42pt")
				    .on("click", function(){
						// Play button code
						d_slider.value(curr_year);
						intervalId = window.setInterval(function() {
							if (curr_year >= 2015) {window.clearInterval(intervalId);
								curr_year = 2014;};
							curr_year += 1;
							d_slider.value(curr_year);
							update("Jan",curr_year, d);
							//slider.val(curr_year+1).change();
							console.log("Updating year to: "+curr_year);
						}, 1500);
				    });
	    		
	    		
	    		
	    	function update(month, year, d){
	    		var bs_start=data.person.education.edu[2].time.substring(0,4);
	    		var bs_end=data.person.education.edu[2].time.substring(7,11);
	    		var sch_end=data.person.education.edu[1].time.substring(7,11);
	    		var sch_start=data.person.education.edu[1].time.substring(0,4);
	    		var ms_end=data.person.education.edu[0].time.substring(7,11);
	    		var ms_start=data.person.education.edu[0].time.substring(0,4);
		    	console.log(d);
		    	d.forEach(function(d) {
		        	d.date = d['Endorsement Date'];
		        	d.skill = d['Skill Name'];
		    	});
		    	for(var i=0;i<skills.length;i++){
		    		skills[i][1]=0;
		    	}
		    	year_choose=year;
		    	var mon;
		    	switch(month){
						case "Jan": mon="01"; break;
						case "Feb": mon="02"; break;
						case "Mar": mon="03"; break;
						case "Apr": mon="04"; break;
						case "May": mon="05"; break;
						case "Jun": mon="06"; break;
						case "Jul": mon="07"; break;
						case "Aug": mon="08"; break;
						case "Sept": mon="09"; break;
						case "Oct": mon="10"; break;
						case "Nov": mon="11"; break;
						case "Dec": mon="12"; break;
					}
		    	month_choose=mon;
		    	var start=0;
		    	console.log(d[63].date.substring(0,4)+year_choose);
		    	while(start<d.length&&d[start].date.substring(0,4)>year_choose) start++;
		    	while(start<d.length&&d[start].date.substring(0,4)==year_choose.toString()&&d[start].date.substring(5,7)>month_choose) start++;
		    	
		    	for(var i=start;i<d.length;i++){
		    		var j=0;
		    		while(j<skills.length&&d[i].skill!=skills[j][0]) j++;
		    		if(j<skills.length)
		    			skills[j][1]++;
		    	}
		    	console.log("new"+skills);
	    		if(year>=bs_start&&year<sch_start){
	    			main.select("#bs").remove();
	    			main.select("#sch").remove();
					main.select("#ms").remove();
					main.select(".hat_bs").remove();
	    			main.select(".hat_sch").remove();
					main.select(".hat_ms").remove();
	    			if(year<bs_end){
	    				main.append("img")
				    	.attr("id","bs")
					    .attr("src","images/hat2.png");
						
	    			}
	    			else{
	    				main.append("img")
				    	.attr("id","bs")
					    .attr("src","images/hat.png");
					
	    			}
					main.append("div")
					    .attr("class","hat_bs");
					main.select(".hat_bs")
					.append("p")
					.attr("id","p_bs")
					.text("BS CSE DTU")
					.on("mouseover",function () {
					        var xPos = 800;
							var yPos = 200;
					        d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#degree")
						    .text(data.person.education.edu[0].degree);
						    d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#school")
						    .text(data.person.education.edu[0].school);
						    d3.select("#tooltip1")
					        .style("left", xPos + "px")
						    .style("top", yPos + "px")
						    .select("#time")
						    .text(data.person.education.edu[0].time);
					        d3.select("#tooltip1").classed("hidden", false);
					})
				   .on("mouseout", function () {
						d3.select("#tooltip1").classed("hidden", true);
					});
	    		}
	    		else if(year>=sch_start&&year<ms_start){
	    			main.select("#bs").remove();
	    			main.select("#sch").remove();
					main.select("#ms").remove();
					main.select(".hat_bs").remove();
	    			main.select(".hat_sch").remove();
					main.select(".hat_ms").remove();
	    			main.append("img")
				    .attr("id","bs")
				    .attr("src","images/hat.png");
				    if(year<=sch_end){
				    	main.append("img")
					    .attr("id","sch")
					    .attr("src","images/hat2.png");
				    }
					else{
						main.append("img")
					    .attr("id","sch")
					    .attr("src","images/hat.png");
					}
					main.append("div")
					.attr("class","hat_bs");
			    	main.append("div")
					.attr("class","hat_sch");
					main.select(".hat_bs")
					.append("p")
					.attr("id","p_bs")
					.text("BS CSE DTU")
					.on("mouseover",function () {
					        var xPos = 800;
							var yPos = 200;
					        d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#degree")
						    .text(data.person.education.edu[0].degree);
						    d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#school")
						    .text(data.person.education.edu[0].school);
						    d3.select("#tooltip1")
					        .style("left", xPos + "px")
						    .style("top", yPos + "px")
						    .select("#time")
						    .text(data.person.education.edu[0].time);
					        d3.select("#tooltip1").classed("hidden", false);
					})
				   .on("mouseout", function () {
						d3.select("#tooltip1").classed("hidden", true);
					});
				   main.select(".hat_sch")
					.append("p")
					.attr("id","p_sch")
					.text("Sch. UC booth")
					.on("mouseover",function () {
					        var xPos = 810;
							var yPos = 130;
					        d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#degree")
						    .text(data.person.education.edu[1].degree);
						    d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#school")
						    .text(data.person.education.edu[1].school);
						    d3.select("#tooltip1")
					        .style("left", xPos + "px")
						    .style("top", yPos + "px")
						    .select("#time")
						    .text(data.person.education.edu[1].time);
					        d3.select("#tooltip1").classed("hidden", false);
						})
					   .on("mouseout", function () {
							d3.select("#tooltip1").classed("hidden", true);
						});
	    		}
	    		else {
	    			main.select("#bs").remove();
	    			main.select("#sch").remove();
					main.select("#ms").remove();
	    			main.select(".hat_bs").remove();
	    			main.select(".hat_sch").remove();
					main.select(".hat_ms").remove();
					main.append("img")
				    .attr("id","bs")
				    .attr("src","images/hat.png");
					main.append("img")
					    .attr("id","sch")
					    .attr("src","images/hat.png");
				main.append("img")
				    .attr("id","ms")
				    .attr("src","images/hat2.png");
				main.append("div")
					.attr("class","hat_bs");
			    main.append("div")
					.attr("class","hat_sch");
				main.append("div")
					.attr("class","hat_ms");
				main.select(".hat_bs")
					.append("p")
					.attr("id","p_bs")
					.text("BS CSE DTU")
					.on("mouseover",function () {
					        var xPos = 800;
							var yPos = 200;
					        d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#degree")
						    .text(data.person.education.edu[0].degree);
						    d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#school")
						    .text(data.person.education.edu[0].school);
						    d3.select("#tooltip1")
					        .style("left", xPos + "px")
						    .style("top", yPos + "px")
						    .select("#time")
						    .text(data.person.education.edu[0].time);
					        d3.select("#tooltip1").classed("hidden", false);
						})
					   .on("mouseout", function () {
							d3.select("#tooltip1").classed("hidden", true);
						});
				main.select(".hat_sch")
					.append("p")
					.attr("id","p_sch")
					.text("Sch. UC booth")
					.on("mouseover",function () {
					        var xPos = 810;
							var yPos = 130;
					        d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#degree")
						    .text(data.person.education.edu[1].degree);
						    d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#school")
						    .text(data.person.education.edu[1].school);
						    d3.select("#tooltip1")
					        .style("left", xPos + "px")
						    .style("top", yPos + "px")
						    .select("#time")
						    .text(data.person.education.edu[1].time);
					        d3.select("#tooltip1").classed("hidden", false);
						})
					   .on("mouseout", function () {
							d3.select("#tooltip1").classed("hidden", true);
						});
				main.select(".hat_ms")
					.append("p")
					.attr("id","p_ms")
					.text("MS CS UIUC")
					.on("mouseover",function () {
					        var xPos = 820;
							var yPos = 60;
					        d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#degree")
						    .text(data.person.education.edu[2].degree);
						    d3.select("#tooltip1")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#school")
						    .text(data.person.education.edu[2].school);
						    d3.select("#tooltip1")
					        .style("left", xPos + "px")
						    .style("top", yPos + "px")
						    .select("#time")
						    .text(data.person.education.edu[2].time);
					        d3.select("#tooltip1").classed("hidden", false);
						})
					   .on("mouseout", function () {
							d3.select("#tooltip1").classed("hidden", true);
						});
	    		}
	    		
	    		svg.selectAll("#cir").remove();
	    		svg.selectAll(".text").remove();
	    		for(var i=0;i<Math.ceil(skills.length/2);i++){
					var r0=105;
					var init=-5;
					var th=75/Math.ceil(skills.length/2);
					var x1=535-r0*Math.cos((init+i*th)/180*Math.PI);
					var y1=280-r0*Math.sin((init+i*th)/180*Math.PI);
					var x2=535-(r0+skills[i][1]*15)*Math.cos((init+i*th)/180*Math.PI);
					var y2=280-(r0+skills[i][1]*15)*Math.sin((init+i*th)/180*Math.PI);
					svg.select("#skill"+i).remove();
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
				    	.attr("class","text")
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
					svg.select("#skill"+i).remove();
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
				       .attr("class","text")
					   .style("fill", "black")
					   .style("font-size", "1em")
					   .attr("font-family","courier")
					   .attr("x", tx+"pt")
					   .attr("y", "0pt")
					   //.attr("text-anchor", "middle")
					   .attr("transform", "translate("+715+","+373+") rotate("+(180+init+1.5+(i+-Math.ceil(skills.length/2))*th)+")")
					   .text(skills[i][0]);
					
				}
	    		
	    		  var i=root.person.positions.position.length-1;
	    		  while(i>0){
	    		  	var mon;
					switch(month){
						case "Jan": mon="1"; break;
						case "Feb": mon="2"; break;
						case "Mar": mon="3"; break;
						case "Apr": mon="4"; break;
						case "May": mon="5"; break;
						case "Jun": mon="6"; break;
						case "Jul": mon="7"; break;
						case "Aug": mon="8"; break;
						case "Sept": mon="9"; break;
						case "Oct": mon="10"; break;
						case "Nov": mon="11"; break;
						case "Dec": mon="12"; break;
					}
	    		  	if(root.person.positions.position[i-1].start_date.year>year||(root.person.positions.position[i-1].start_date.year==year&&root.person.positions.position[i-1].start_date.month>mon)){
	    		  		break;
	    		  	}
	    		  	i--;
	    		  }
	    		  var interns=new Array(root.person.positions.position.length-i);
	    		  for(var j=0;j<root.person.positions.position.length-i;j++){
	    		  	interns[j]=root.person.positions.position[i+j];
	    		  }
	    		  d3.select("body").selectAll(".badge0").remove();
			      d3.select("body").selectAll(".badge").remove();
			      d3.select("body").selectAll(".badge0_last").remove();
			      d3.select("body").selectAll(".badge_last").remove();
	    		  badge=svg.selectAll("image")	       
			       .data(interns)
			       .enter();
			       console.log(interns);
				  badge.append("image")
				  	   .attr("class","badge0")
					   .attr("x",function(data, i){
					   		var x;
					   		var j=interns.length-i-1;
					   		console.log(i);
							switch(j){
								case 0:
								case 1:
								case 2:
								case 3: x=460+40*j; break;
								case 4:
								case 5:
								case 6:
								case 7:
								case 8:
								case 9: x=439+40*(j-4); break;
							}
					   		return x+"pt";
					   	})
					   .attr("y",function(data,i){
					   		var y;
					   		var j=interns.length-i-1;
							switch(j){
								case 0:
								case 1:
								case 2:
								case 3: y=365; break;
								case 4:
								case 5:
								case 6:
								case 7:
								case 8:
								case 9: y=410; break;
							}
					   		return y+"pt";
					   	})
					   .attr("width","45pt")
					   .attr("height","45pt")
					   .attr("xlink:href","images/badge.png");
				  badge.append("image")
					   .attr("class","badge")
					   .attr("x",function(data, i){
					   		var x;
					   		var j=interns.length-i-1;
							switch(j){
								case 0:
								case 1:
								case 2:
								case 3: x=460+40*j; break;
								case 4:
								case 5:
								case 6:
								case 7:
								case 8:
								case 9: x=439+40*(j-4); break;
							}
					   		return (x+11)+"pt";
					   	})
					   .attr("y",function(data,i){
					   		var y;
					   		var j=interns.length-i-1;
							switch(j){
								case 0:
								case 1:
								case 2:
								case 3: y=365; break;
								case 4:
								case 5:
								case 6:
								case 7:
								case 8:
								case 9: y=410; break;
							}
					   		return (y+9)+"pt";
					   	})
					   .attr("width","23pt")
					   .attr("height","23pt")
					   .attr("xlink:href",function(data, i){
					   		return data.image;
					   	})
					   .on("mouseover",function (data, i) {
					        var xPos = parseFloat(d3.select(this).attr('x'))+30;
					        var line=data.summary.length/100;
							var yPos = parseFloat(d3.select(this).attr('y'))-line*20;
					        d3.select("#tooltip0")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#title")
						    .text(data.title+" in "+ data.company.name);
						    d3.select("#tooltip0")
					        .style("left", xPos + "px")
						    .style("top", yPos + "px")
						    .select("#time")
						    .text(function(){
						    	var mon,mon2;
								switch(data.start_date.month){
									case "1": mon="Jan"; break;
									case "2": mon="Feb"; break;
									case "3": mon="Mar"; break;
									case "4": mon="Apr"; break;
									case "5": mon="May"; break;
									case "6": mon="Jun"; break;
									case "7": mon="Jul"; break;
									case "8": mon="Aug"; break;
									case "9": mon="Sept"; break;
									case "10": mon="Oct"; break;
									case "11": mon="Nov"; break;
									case "12": mon="Dec"; break;
								}
								switch(data.end_date.month){
									case "1": mon2="Jan"; break;
									case "2": mon2="Feb"; break;
									case "3": mon2="Mar"; break;
									case "4": mon2="Apr"; break;
									case "5": mon2="May"; break;
									case "6": mon2="Jun"; break;
									case "7": mon2="Jul"; break;
									case "8": mon2="Aug"; break;
									case "9": mon2="Sept"; break;
									case "10": mon2="Oct"; break;
									case "11": mon2="Nov"; break;
									case "12": mon2="Dec"; break;
								}
						   		return mon+" "+data.start_date.year +" - "+mon2+" "+data.end_date.year;
						    });
						    d3.select("#tooltip0")
					        .style("left", xPos+"pt")
						    .style("top", yPos+"pt")
						    .select("#sum")
						    .text(function(){
						    	return data.summary.replace(/\n/g," -");
						    });
					        d3.select("#tooltip0").classed("hidden", false);
						})
					   .on("mouseout", function () {
							d3.select("#tooltip0").classed("hidden", true);
						});
						
						svg.append("image").attr("class","badge_last").attr("x",function(){
							if(interns.length>4) return (439+40*(interns.length-4-1))+"pt";
							else return (460+40*(interns.length-1))+"pt";
						})
						   .attr("y",function(){
								if(interns.length>4) return "410pt";
								else return "365pt";
							})
						   .attr("width","45pt")
						   .attr("height","45pt")
						   .attr("xlink:href","images/badge.png");
						svg.append("image").attr("class","badge0_last")
							.attr("x",function(){
							if(interns.length>4) return (439+40*(interns.length-4-1)+11)+"pt";
							else return (460+40*(interns.length-1)+11)+"pt";
						})
						   .attr("y",function(){
								if(interns.length>4) return "419pt";
								else return "374pt";
							})
						   .attr("width","45pt")
						   .attr("height","45pt")
						   .attr("width","23pt")
						   .attr("height","23pt")
						   .attr("xlink:href",interns[0].image)
						   .on("mouseover",function () {
						        var xPos = parseFloat(d3.select(this).attr('x'))+30;
						        var line=interns[0].summary.length/100;
								var yPos = parseFloat(d3.select(this).attr('y'))-line*20;
						        d3.select("#tooltip0")
						        .style("left", xPos+"pt")
							    .style("top", yPos+"pt")
							    .select("#title")
							    .text(interns[0].title+" in "+ interns[0].company.name);
							    d3.select("#tooltip0")
						        .style("left", xPos + "px")
							    .style("top", yPos + "px")
							    .select("#time")
							    .text(function(){
							    	var mon,mon2;
									switch(interns[0].start_date.month){
										case "1": mon="Jan"; break;
										case "2": mon="Feb"; break;
										case "3": mon="Mar"; break;
										case "4": mon="Apr"; break;
										case "5": mon="May"; break;
										case "6": mon="Jun"; break;
										case "7": mon="Jul"; break;
										case "8": mon="Aug"; break;
										case "9": mon="Sept"; break;
										case "10": mon="Oct"; break;
										case "11": mon="Nov"; break;
										case "12": mon="Dec"; break;
									}
									switch(interns[0].end_date.month){
										case "1": mon2="Jan"; break;
										case "2": mon2="Feb"; break;
										case "3": mon2="Mar"; break;
										case "4": mon2="Apr"; break;
										case "5": mon2="May"; break;
										case "6": mon2="Jun"; break;
										case "7": mon2="Jul"; break;
										case "8": mon2="Aug"; break;
										case "9": mon2="Sept"; break;
										case "10": mon2="Oct"; break;
										case "11": mon2="Nov"; break;
										case "12": mon2="Dec"; break;
									}
							   		return mon+" "+interns[0].start_date.year +" - "+mon2+" "+interns[0].end_date.year;
							    });
							    d3.select("#tooltip0")
						        .style("left", xPos+"pt")
							    .style("top", yPos+"pt")
							    .select("#sum")
							    .text(function(){
							    	return interns[0].summary.replace(/\n/g," -");
							    });
						        d3.select("#tooltip0").classed("hidden", false);
							})
						   .on("mouseout", function () {
								d3.select("#tooltip0").classed("hidden", true);
							});
			    	}
	});
});