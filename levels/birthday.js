sceneData["Birthday1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I remember that there was a bang then a flash." 
	},{
		application: loadingFunctions.picture,
		path: "next.png" 
	},{
		application: loadingFunctions.text,
		text: "I had fireworks for my 11th birthday once."
	},{
		application: loadingFunctions.text,
		text:"The cats were so scared and I was so happy."
	},{
		application: loadingFunctions.text,
		text:"None of the other kids had fireworks at their parties."
	},{
		application: loadingFunctions.text,
		text:"I was surprised as well, but mum and dad were always the best at surprises."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I got the presents I wanted",
		  	goal: "Birthday1_presents1"
		  }, {
		  	text: "All my friends turned up",
		  	goal: "Birthday1_guests1"
		  }, {
		  	text: "I got into a fight with my best friend and cried for an hour",
		  	goal: "Birthday1_fight1"
		  }
		] 
	}
];


sceneData["Birthday1_presents1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I wanted a science set. My parents had got me an ant farm"
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I will always remember the party and blowing out all the candles in one go. and being chased around by Rosie's dog.",
		  	goal: "tracking1" 
		  }
		] 
	}
];


sceneData["Birthday1_guests1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I remember having so many friends, there were so many people at the party."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I will always remember the party and blowing out all the candles in one go. and being chased around by Rosie's dog.",
		  	goal: "tracking1" 
		  }
		] 
	}
];

sceneData["Birthday1_fight1"] = [ 
	{
		application: loadingFunctions.text,
		text: "There wasn’t a fight, but I do remember being told off."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I will always remember the party and blowing out all the candles in one go. and being chased around by Rosie's dog.",
		  	goal: "tracking1"  
		  }
		] 
	}
];
