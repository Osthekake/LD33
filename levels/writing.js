//Put stuff in here. see level.js for examples with comments.
sceneData["writing1"] = [
	{
		application: loadingFunctions.text,
		text: "Nothing I studied could explain the writing."
	}, {
		application: loadingFunctions.text,
		text: "The writing was gibberish. Someone had drawn strange unintelligible marks across the door to my cabin"+
			" I noticed them as I was about leave. The markings were not unfamiliar, I had seen something like it before."
	}, {
		application: loadingFunctions.text,
		text: "Where had I seen it?"
	}, {
		application: loadingFunctions.text,
		text: "Had one of the miners shown me?  I think so.  I can remember the strange markings. Conway the old miner, always one month away from retirement,  he had taken picture of some marks like these. "
	}, {
		application: loadingFunctions.text,
		text: "He had seen them in the mine. "
	}, {
		application: loadingFunctions.choices,
		choices: [ 
			{
				text: "Did I know what the markings mean?",
				goal: "writing1_1" 
			}, {
				text: "Did I know who wrote the markings?",
				goal: "writing1_2" 
			}, {
				text: "Did I flee the markings?",
				goal: "writing1_3" 
			}, 
		] 
	} 
];


sceneData["writing1_1"] = [ 
	{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "No, they were alien, impossible to understand. What ever painted the marking on the wall must of have been injured, the writing looked so shaky",
		  	goal: "writing1" 
		  }
		] 
	}
];

sceneData["writing1_2"] = [ 
	{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "No, of course not, the writing are horrid, unnatural, alien.",
		  	goal: "writing1" 
		  }
		] 
	}
];

sceneData["writing1_3"] = [
	{
		application: loadingFunctions.text,
		text: "No, of course not, the writing are horrid, unnatural, alien"
	}, {
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "There were more markings, inside my locker and across the floor of science laboratory. Despite all this, Blackwood of all people kept on leaving messages about graffiti. Does he think I care about graffiti?",
		  	goal: "toys_2" 
		  }
		] 
	}
];

sceneData["writing2"] = [
	{
		application: loadingFunctions.setCrack,
		level: 3
	},{
		application: loadingFunctions.text,
		text: "Nothing I studied could explain the writing."
	}, {
		application: loadingFunctions.text,
		text: "The writing was gibberish. Someone had drawn strange unintelligible marks across the door to my cabin"+
			" I noticed them as I was about leave. The markings were not unfamiliar, I had seen something like it before."
	}, {
		application: loadingFunctions.text,
		text: "Where had I seen it?"
	}, {
		application: loadingFunctions.text,
		text: "I think so. I can remember the words from a picture. Conway the old miner, always scurrying around like the little ant he was, he had taken picture of some markings like these."
	}, {
		application: loadingFunctions.text,
		text: "He had seen them in the mine. "
	}, {
		application: loadingFunctions.choices,
		choices: [ 
			{
				text: "Did I know what the markings mean?",
				goal: "writing2_1" 
			}, {
				text: "Did I know who wrote the markings?",
				goal: "writing2_2" 
			}, {
				text: "Did I flee the markings?",
				goal: "writing2_3" 
			} 
		] 
	} 
];

sceneData["writing2_1"] = [
	{
		application: loadingFunctions.text,
		text: "It was a warning, the miners, they shouldn’t be here. Something had been awoken.",
		choices: [{goal : "writing2"}]
	} 
];

sceneData["writing2_2"] = [
	{
		application: loadingFunctions.text,
		text: "No, it can’t be. The writing was familiar. My hand was shaking because it was fighting, struggling not to write those words.",
		choices: [{goal : "writing2_4"}]
	} 
];

sceneData["writing2_3"] = [
	{
		application: loadingFunctions.text,
		text: "I don’t remember. I remember running, I don’t know if I was fleeing or chasing. ",
		choices: [{goal : "writing2"}]
	} 
];

sceneData["writing2_4"] = [
	{
		application: loadingFunctions.text,
		text: "There was more writing, more words, inside my locker and across the floor of science laboratory. Always the same. A warning of something, afraid and angry.  Blackwood the site manager keeps leaving me messages about graffiti."
	}, {
		application: loadingFunctions.text,
		text: "Does he think I care about graffiti? There is something here with us, warning us. I need to warn the others about danger, get them somewhere safe. "
	}, {	
		application: loadingFunctions.choices,
		choices: [ 
			{
				text: "Did I warn the miners?",
				goal: "writing2_5" 
			}, {
				text: "Did I speak to Blackwood about the graffiti?",
				goal: "writing2_6" 
			}, {
				text: "Did I see the markings in the Life Support control room?",
				goal: "writing2_7" 
			} 
		] 
	}
];

sceneData["writing2_5"] = [
	{
		application: loadingFunctions.text,
		text: "The insects wouldn’t understand. Each doing their own thing, never understanding the whole.",
		choices: [{goal : "toys_3"}]
	} 
];

sceneData["writing2_6"] = [
	{
		application: loadingFunctions.text,
		text: "Yes, I talked to Blackwood, explained there was something else here, something loose on the station, they should all get to safety.",
		choices: [{goal : "writing2"}]
	} 
];

sceneData["writing2_7"] = [
	{
		application: loadingFunctions.text,
		text: "There was something or someone in the control room. That thing wrote the warnings. ",
		choices: [{goal : "writing2"}]
	} 
];