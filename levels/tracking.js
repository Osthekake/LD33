sceneData["tracking1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I first spotted the anomaly in the station reports for air quality." 
	},{
		application: loadingFunctions.picture,
		path: "next.png" 
	},{
		application: loadingFunctions.text,
		text:"The sensors kept reporting an unidentified pollutant."
	},{
		application: loadingFunctions.text,
		text:"It wasn’t stationary, but it was always very localised."
	},{
		application: loadingFunctions.text,
		text:"The only things the reading reminded me of was was a prank by some of Professor Ellery’s biochemistry students."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I helped set up the prank.",
		  	goal: "tracking1_outro"
		  }, {
		  	text: "The prank completely fooled me.",
		  	goal: "tracking1_outro"
		  }, {
		  	text: "The prank caused an evacuation of the Beauly Campus",
		  	goal: "tracking1_outro"
		  }
		] 
	}
];


sceneData["tracking1_outro"] = [ 
	{
		application: loadingFunctions.text,
		text: "The entire campus was evacuated for the whole day, the prank even made the national news.  Considering the all the panic about the terrorists I’m surprised we got off so lightly."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "It made a memorable end to my undergraduate degree.",
		  	goal: "exam_1_1" 
		  }
		] 
	}
];
