sceneData["Birthday_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I had fireworks for my 11th birthday." 
	},{
		application: loadingFunctions.picture,
		path: "fireworks.jpg" 
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
		  	goal: "Birthday_1_1"
		  }, {
		  	text: "All my friends turned up",
		  	goal: "Birthday_1_2"
		  }, {
		  	text: "I got into a fight with my best friend and cried for an hour",
		  	goal: "Birthday_1_3"
		  }
		] 
	}
];


sceneData["Birthday_1_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I wanted a science set. My parents had got me an ant farm"
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I will always remember the party and blowing out all the candles in one go. and being chased around by Rosie's dog.",
		  	goal: "tracking_1" 
		  }
		] 
	}
];


sceneData["Birthday_1_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "I remember having so many friends, there were so many people at the party."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I will always remember the party and blowing out all the candles in one go. and being chased around by Rosie's dog.",
		  	goal: "tracking_1" 
		  }
		] 
	}
];

sceneData["Birthday_1_3"] = [ 
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
sceneData["Birthday_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "There was a bang then a flash." 
	},{
		application: loadingFunctions.picture,
		path: "fireworks.jpg" 
	},{
		application: loadingFunctions.text,
		text:"I had fireworks for my birthday once. The cats were so scared and I was so happy. None of the other kids had fireworks at their parties. I was surprised as well, but mum and dad were always the best at surprises."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I got the presents I wanted",
		  	goal: "Birthday_2_1"
		  }, {
		  	text: "All my friends turned up",
		  	goal: "Birthday_2_2"
		  }, {
		  	text: "My mum had sent the invitations and invited all the kids from my class, even the ones I didn't like",
		  	goal: "Birthday_2_3"
		  }
		] 
	}
];


sceneData["Birthday_2_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "My parents bought me an ant farm. I used to make traps for them and bait them with food."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "No, that happened, but there was something else too.",
		  	goal: "Birthday_2" 
		  }
		] 
	}
];


sceneData["Birthday_2_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "There were so many people at the party. I didn’t know all of them, but it was fun, in a naughty way."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "The house was full of people",
		  	goal: "Birthday_2" 
		  }
		] 
	}
];

sceneData["Birthday_2_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "TThere was fight, a big fight between me and girl, a gate crasher. We were old enough to do some real harm to each other."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I will always remember the party and blowing out all the candles in one go. Even at the age of fifteen that still made me proud. I never got to eat the cake mind you.",
		  	goal: "tracking_2"  
		  }
		] 
	}
];

sceneData["Birthday_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "There was a bang then a flash." 
	},{
		application: loadingFunctions.picture,
		path: "fireworks.jpg" 
	},{
		application: loadingFunctions.text,
		text:"There were fireworks at Rosie’s birthday party. The cats were so scared, dashing out of the garden and down the street."
	},{
		application: loadingFunctions.text,
		text:"I once had fireworks at birthday party, but that was years ago. So me and Frizz just walked up and right in."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I stole the presents I wanted",
		  	goal: "Birthday_3_1"
		  }, {
		  	text: "All my friends were there",
		  	goal: "Birthday_3_2"
		  }, {
		  	text: "Rosie’s mum start shouting straight away",
		  	goal: "Birthday_3_3"
		  }
		] 
	}
];


sceneData["Birthday_3_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I found Rosie’s ant farm and let out all the ants"
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "It was a crappy ant-farm anyway. Mine was much better.",
		  	goal: "Birthday_3" 
		  }
		] 
	}
];


sceneData["Birthday_3_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "Rosie had invited all my friends but not me. Why would she do that?"
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I never liked her.",
		  	goal: "Birthday_3" 
		  }
		] 
	}
];

sceneData["Birthday_3_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "I managed to spike the punch before getting thrown out."
	},{
		application:loadingFunctions.text,
		text: "I blew all of the candles out before feeding the cake to the dog."
	},{
		application:loadingFunctions.text,
		text: "Served Rosie right."
	},{
		application:loadingFunctions.text,
		text: "I hated that girl.  Always trying to steal my friends, my ideas, my life."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "The police were called and I ran away.",
		  	goal: "Birthday_3_4"  
		  },{
		  	text: "A kid got drunk off the punch and drowned in the pool.",
		  	goal: "Birthday_3_5"  
		  },{
		  	text: "I stole Rosie's pet dog.",
		  	goal: "Birthday_3_6"  
		  }
		] 
	}
];


sceneData["Birthday_3_4"] = [ 
	{
		application: loadingFunctions.text,
		text: "The police arrived long after I had left."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I was always good at running. Have I been running? I'm panting now.",
		  	goal: "Birthday_3" 
		  }
		] 
	}
];


sceneData["Birthday_3_5"] = [ 
	{
		application: loadingFunctions.text,
		text: "I don’t like to think about it."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I'd rather think about anything else. The anomoly. Think about that.",
		  	goal: "tracking_3" 
		  }
		] 
	}
];


sceneData["Birthday_3_6"] = [ 
	{
		application: loadingFunctions.text,
		text: "The dog barked and chased us out the door but no further."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Was that another firewqork? No, a meteor...",
		  	goal: "Birthday_3" 
		  }
		] 
	}
];
