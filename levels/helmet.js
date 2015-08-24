sceneData["helmet_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "When I listen closely I can hear a very faint hissing coming from somewhere nearby. It's quieter than the sound of my own breathing." 
	},{
		application: loadingFunctions.picture,
		path: "saturn_colour.jpg" 
	},{
		application: loadingFunctions.text,
		text: "I don't seem to have any sealant anywhere, just an empty tube."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Look for an air lock",
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
		text: "The leak is getting bigger."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "It's getting harder to move",
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
			text: "There are other items I can see floating. Something must have gone wrong with the airlocks",
		  	goal: "Camping_3"
		  }
		] 
	}
];

sceneData["helmet_4"] = [ 
	{
		application: loadingFunctions.text,
		text: "It is peaceful here now. All of the noise has stopped." 
	},{
		application: loadingFunctions.picture,
		path: "saturn_colour.jpg"
	},{
		application: loadingFunctions.text,
		text: "The floating things drift past me. Ants. Toys. Broken dolls. Dead miners."
	},{
		application: loadingFunctions.text,
		text: "I remember so much, now. I’m still struggling to piece the memories together. The past life of this body. The past life of this mind. I became something new when I breathed me in, death-in-life, life-in-death, what am I now?"
	},{
		application: loadingFunctions.text,
		text: "I opened the airlock and watched the crew’s silent screams as they spun into space. So peaceful now."
	},{
		application: loadingFunctions.text,
		text: "The fevered writing, the nightmares, the terrible pain, all of it transient."
	},{
		application: loadingFunctions.text,
		text: "I drift. My orbit decays, like my flesh. Soon I will return home."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "They should not have hurt me.",
		  	goal: "credits"
		  }
		] 
	}
];