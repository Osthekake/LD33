sceneData["lifesupport_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "There's a faint beeping in my ear from the suit. Not the first time I've heard that noise today."
	},{
		application: loadingFunctions.text,
		text: "The alarms were deafening.  How was I supposed to think, to find out what was wrong?"
	},{
		application: loadingFunctions.text,
		text: "The station was telling us something was wrong, very wrong. I checked the air quality."
	},{
		application: loadingFunctions.text,
		text: "None of the crew where were the gas was, so it couldn’t be a health emergency."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I tried to turn off the alarms",
		  	goal: "lifesupport_2_1" 
		  },{
			text: "I tried to find the crew",
		  	goal: "lifesupport_2_2" 
		  },{
			text: "I headed for safety",
		  	goal: "lifesupport_2_3" 
		  }
		]  
	}
];


sceneData["lifesupport_2_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "The alarm was attached to the airlock control. All I needed to do was to confirm the manual override."
	},{
		application: loadingFunctions.text,
		text: "Once I had gained control, I could turn off the alarms and think again."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "Still, there was another sound, soft like sand flowing through an hourglass.",
		  	goal: "helmet_3" 
		  }
		] 
	}
];


sceneData["lifesupport_2_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "I couldn't locate the crew through the comms."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "The alarm was making it hard to think.",
		  	goal: "lifesupport_2" 
		  }
		] 
	}
];


sceneData["lifesupport_2_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "The emergency lighting must have been broken, because it led me to an empty lifepod."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I couldn't abandon the rest of the crew anyway.",
		  	goal: "lifesupport_2" 
		  }
		] 
	}
];


sceneData["lifesupport_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "Broken things on the ground. No, wait. Broken toys. A broken toy, noise tinny and repetitive. Like an alarm."
	},{
		application: loadingFunctions.text,
		text: "The emergency alarms were deafening even through my suit. How was I supposed to think, to find out what was wrong?"
	},{
		application: loadingFunctions.text,
		text: "The station was telling us something was very wrong. I checked the air quality. My eyes were blurred, making the monitor hard to see."
	},{
		application: loadingFunctions.text,
		text: "None of the crew where were the gas was, so it couldn’t be a health emergency. Something else?"
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I tried to turn off the alarms",
		  	goal: "lifesupport_3_1" 
		  },{
			text: "I tried to find the crew",
		  	goal: "lifesupport_3_2" 
		  },{
			text: "I headed for safety",
		  	goal: "lifesupport_3_3" 
		  }
		]  
	}
];


sceneData["lifesupport_3_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "The alarm was attached to the airlock control. All I needed to do was to confirm the manual override."
	},{
		application: loadingFunctions.text,
		text: "Once I had gained control, I could turn off the alarms and think again."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I had a plan to defeat the alien.  I needed control of the airlocks.",
		  	goal: "lifesupport_3_4" 
		  },{
			text: "Where are the crew?",
		  	goal: "lifesupport_3_5" 
		  },{
			text: "Save the crew!",
		  	goal: "lifesupport_3_6" 
		  }
		] 
	}
];


sceneData["lifesupport_3_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "I couldn't locate the crew through the comms."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "The alarm was making it hard to think.",
		  	goal: "lifesupport_3" 
		  }
		] 
	}
];


sceneData["lifesupport_3_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "The emergency lighting must have been broken, because it led me to an empty lifepod."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I couldn't abandon the rest of the crew anyway.",
		  	goal: "lifesupport_3" 
		  }
		] 
	}
];


sceneData["lifesupport_3_4"] = [ 
	{
		application: loadingFunctions.text,
		text: "The alien was the gas, it could be blown out the station if I open the airlocks."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I have to becareful not to open any airlocks near the crew.",
		  	goal: "lifesupport_3" 
		  }
		] 
	}
];


sceneData["lifesupport_3_5"] = [ 
	{
		application: loadingFunctions.text,
		text: "The crew are gone, they are all dead. I didn’t save them."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "*No, there is still time, I can still get to them.",
		  	goal: "lifesupport_3" 
		  }
		] 
	}
];


sceneData["lifesupport_3_6"] = [ 
	{
		application: loadingFunctions.text,
		text: "You can’t abandon the crew, you must join them."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I head to the loading bay.  The door slowly open, with a sharp hiss as the pressure begin to equalise.  The air rushes out from behind me.  I'm spinning, past the loading bay through the open airlock.",
		  	goal: "helmet_4" 
		  }
		] 
	}
];