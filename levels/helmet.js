sceneData["helmet_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "When I listen closely I can hear a very faint hissing coming from somewhere nearby. It's quieter than the sound of my own breathing." 
	},{
		application: loadingFunctions.picture,
		path: "saturn_colour.jpg" 
	},{
		application: loadingFunctions.text,
		text: "I notice a thin line across my visor. My suit's leaking!"
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Look for some sealant in pockets",
		  	goal: "helmet_2_outro"
		  }
		] 
	}
];


sceneData["helmet_2_outro"] = [ 
	{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I keep fading in and out of consciousness",
		  	goal: "Camping_2" 
		  }
		] 
	}
];

sceneData["helmet_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "When I listen closely I can hear a very faint hissing coming from somewhere nearby. It's quieter than the sound of my own breathing." 
	},{
		application: loadingFunctions.picture,
		path: "saturn_colour.jpg" 
	},{
		application: loadingFunctions.text,
		text: "I notice a thin line across my visor. My suit's leaking!"
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Look for some sealant in pockets",
		  	goal: "helmet_3_outro"
		  }
		] 
	}
];


sceneData["helmet_3_outro"] = [ 
	{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "There are other items I can see floating. Something must of gone wrong with the airlocks",
		  	goal: "Camping_3"
		  }
		] 
	}
];