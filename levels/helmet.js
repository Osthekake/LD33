sceneData["helmet2"] = [ 
	{
		application: loadingFunctions.text,
		text: "When I listen closely I can hear a very faint hissing coming from somewhere nearby. It's quieter than the sound of my own breathing." 
	},{
		application: loadingFunctions.picture,
		path: "next.png" 
	},{
		application: loadingFunctions.text,
		text: "I notice a thin line across my visor. My suit's leaking!"
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Look for some sealant in pockets",
		  	goal: "helmet2_outro"
		  }
		] 
	}
];


sceneData["helmet2_outro"] = [ 
	{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I keep fading in and out of consciousness",
		  	goal: "Camping2" 
		  }
		] 
	}
];

sceneData["helmet3"] = [ 
	{
		application: loadingFunctions.text,
		text: "When I listen closely I can hear a very faint hissing coming from somewhere nearby. It's quieter than the sound of my own breathing." 
	},{
		application: loadingFunctions.picture,
		path: "next.png" 
	},{
		application: loadingFunctions.text,
		text: "I notice a thin line across my visor. My suit's leaking!"
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Look for some sealant in pockets",
		  	goal: "helmet3_outro"
		  }
		] 
	}
];


sceneData["helmet3_outro"] = [ 
	{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "There are other items I can see floating. Something must of gone wrong with the airlocks",
		  	goal: "Camping3"
		  }
		] 
	}
];