sceneData["tracking_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I first spotted the anomaly in the station reports for air quality." 
	},{
		application: loadingFunctions.picture,
		path: "tracking.jpg" 
	},{
		application: loadingFunctions.text,
		text:"The sensors kept reporting an unidentified pollutant."
	},{
		application: loadingFunctions.text,
		text:"It wasn’t stationary, but it was always very localised."
	},{
		application: loadingFunctions.text,
		text: "The reading reminded me of was was a prank by some of Professor Ellery’s biochemistry students, where we faked a gas attack."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I helped set up the prank.",
		  	goal: "tracking_1_outro"
		  },{
		  	text: "The prank completely fooled me",
		  	goal: "tracking_1_outro"
		  },{
		  	text: "The prank caused an evacuation of the Beauly Campus",
		  	goal: "tracking_1_outro"
		  }
		] 
	}
];


sceneData["tracking_1_outro"] = [ 
	{
		application: loadingFunctions.text,
		text: "The entire campus was evacuated for an entire day, the prank even made the national news.  Considering the all the panic about the terrorists I’m surprised we got off so lightly."
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


sceneData["tracking_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "I first spotted the anomaly in the station reports for air quality. The sensors kept reporting an unidentified pollutant. It wasn’t stationary, but it was always very localised" 
	},{
		application: loadingFunctions.picture,
		path: "tracking.jpg" 
	},{
		application: loadingFunctions.text,
		text: "The reading reminded me of was was a prank by some of Professor Ellery’s biochemistry students, where we faked a gas attack. I was only involved because I was dating Arness."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I played the part of a victim",
		  	goal: "tracking_2_victim"
		  },{
		  	text: "The prank didn't fool anyone.",
		  	goal: "tracking_2_fool"
		  },{
		  	text: "The prank caused an evacuation of the Beauly Campus",
		  	goal: "tracking_2_evacuation"
		  }
		] 
	}
];


sceneData["tracking_2_victim"] = [ 
	{
		application: loadingFunctions.text,
		text: "I was meant to be a zombie, but I didn’t fool anyone."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I wait, there was something in the station.",
		  	goal: "tracking_2" 
		  }
		] 
	}
];

sceneData["tracking2_fool"] = [ 
	{
		application: loadingFunctions.text,
		text: "I wait, there was something in the station."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "The pollutant moved around the building, like it was tracking something.",
		  	goal: "tracking_2" 
		  }
		] 
	}
];

sceneData["tracking2_evacuation"] = [ 
	{
		application: loadingFunctions.text,
		text: "I wait, there was something in the station."
	},{
		application: loadingFunctions.text,
		text: "I signaled to the station's crew about the pollutant, told them where was safe."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "Maybe there was something I studied which could help explain what is happening.",
		  	goal: "exam_2_1" 
		  }
		] 
	}
];

sceneData["tracking_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "I first spotted the anomaly in the station reports for air quality. The sensors kept reporting an unidentified pollutant. It wasn’t stationary, but it was always very localised" 
	},{
		application: loadingFunctions.picture,
		path: "tracking.jpg" 
	},{
		application: loadingFunctions.text,
		text: "The reading reminded me of was was a prank by some of Professor Ellery’s biochemistry students, where we faked a gas attack. I was only involved because I was dating Arness."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I played the part of a victim",
		  	goal: "tracking_3_victim"
		  }, {
		  	text: "The prank didn't fool anyone.",
		  	goal: "tracking_3_fool"
		  }, {
		  	text: "The prank caused an evacuation of the Beauly Campus",
		  	goal: "tracking_3_evacuation"
		  }
		] 
	}
];


sceneData["tracking_3_victim"] = [ 
	{
		application: loadingFunctions.text,
		text: "I was meant to be a zombie, but I didn’t fool anyone."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I wait, there was something in the station.",
		  	goal: "tracking_3" 
		  }
		] 
	}
];

sceneData["tracking_3_fool"] = [ 
	{
		application: loadingFunctions.text,
		text: "I wait, there was something in the station."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "The pollutant moved around the building, like it was tracking something.",
		  	goal: "tracking_3" 
		  }
		] 
	}
];

sceneData["tracking_3_evacuation"] = [ 
	{
		application: loadingFunctions.text,
		text: "I wait, there was something in the station."
	},{
		application: loadingFunctions.text,
		text: "I signaled to the station's crew about the pollutant, told them where was safe. I didn’t want them to be herded."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "Maybe there was something I studied which could help explain what is happening.",
		  	goal: "tracking_3_1" 
		  }
		] 
	}
];

sceneData["tracking_3_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I could track the gas by the station sensors.  It was moving.  I was finding it hard to focus, my eyes would lose focus. It couldn’t be the gas, it was no where near me." 
	},{
		application: loadingFunctions.text,
		text: "I was so tired. So tired."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I led the crew to the loading bay, it was safe there.",
		  	goal: "tracking_3_loading_bay"
		  },{
		  	text: "I blacked out, for a while, but the crew managed to get to the loading bay",
		  	goal: "tracking_3_loading_bay"
		  },{
		  	text: "The gas wasn’t stalking, it was herding.  I tried to tell the crew, tried so hard to contact Blackwood, tell him of the danger.",
		  	goal: "tracking_3_danger"
		  }
		] 
	}
];

sceneData["tracking_3_loading_bay"] = [ 
	{
		application: loadingFunctions.text,
		text: "There was no safety."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I needed to get the crew to the loading bay",
		  	goal: "tracking_3_1" 
		  }
		] 
	}
];

sceneData["tracking_3_danger"] = [ 
	{
		application: loadingFunctions.text,
		text: "I couldn’t contact the crew. "
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "Maybe I could open an airlock, suck the monster into space.",
		  	goal: "exam_3_1" 
		  }
		] 
	}
];

