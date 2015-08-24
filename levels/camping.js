sceneData["Camping_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "The feeling of being encased in the fabric of my spacesuit reminds me of going camping for the first time with my friends." 
	},{
		application: loadingFunctions.picture,
		path: "camping.jpg" 
	},{
		application: loadingFunctions.text,
		text: "It rained the first night and I huddled in my tent listening to the patter of rain on canvas."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I fell asleep knowing that I was safe inside my small tent",
		  	goal: "Camping_1_outro"
		  },{
		  	text: "I felt claustrophobic inside the tent and wished I was back in my house",
		  	goal: "Camping_1_outro"
		  },{
		  	text: "I lay awake for hours, listening to the raon mingled with the sound of my own breathing",
		  	goal: "Camping_1_outro"
		  }
		] 
	}
];


sceneData["Camping_1_outro"] = [ 
	{
		application: loadingFunctions.text,
		text: "On the second day of the trip I went to buy some candy from the camp office. At first I couldn't find it, but after I spent a while wandering around on my own I found it fine."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I've had that feeling of frantically searching for something recently.",
		  	goal: "accident_1" 
		  }
		] 
	}
];

sceneData["Camping_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "The feeling of being encased in the fabric of my spacesuit reminds me of going camping for the first time with my friends." 
	},{
		application: loadingFunctions.picture,
		path: "camping.jpg" 
	},{
		application: loadingFunctions.text,
		text: "It rained the first night and I huddled in my tent listening to the patter of rain on canvas. I spent hours lying awake and listening to the rain and the sound of my own breathing."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I spent hours lying awake and listening to the rain and the sound of my own breathing.",
		  	goal: "Camping_2_2"
		  }
		] 
	}
];


sceneData["Camping_2_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "On the second day of the trip I went to buy some candy from the camp office. At first I couldn't find it, but after I spent a while wandering around on my own I found it fine."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I felt stupid for reading the map wrong and picked a fight with my friend to make myself feel better.",
		  	goal: "Camping_2" 
		  },{
			text: "I blamed the others for pointing me in the wrong direction and shouted at them when I got back",
		  	goal: "Camping_2" 
		  },{
			text: "I noticed a broken sign on the way back warning everyone to wear high-vis vests and I realised we had been camping on the wrong side of the road",
		  	goal: "Camping_2_3" 
		  }
		] 
	}
];

sceneData["Camping_2_3"] = [ 
	{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "We told each other ghost stories around the campfire, a bunch of kids trying to scare each other silly. I was the last to go and I had to make mine the best.",
		  	goal: "accident_2" 
		  }
		] 
	}
];


sceneData["Camping_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "The feeling of being encased in the fabric of my spacesuit reminds me of going camping for the first time with my friends." 
	},{
		application: loadingFunctions.picture,
		path: "camping.jpg" 
	},{
		application: loadingFunctions.text,
		text: "It rained the first night and I huddled in my tent listening to the patter of rain on canvas. I spent hours lying awake and listening to the rain and the sound of my own breathing."
	},{
		application: loadingFunctions.text,
		text: "We told each other ghost stories around the campfire, a bunch of kids trying to scare each other silly. I was the last to go and I had to make mine the best."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I told a story about a man living in a set of flats that used to be a mental asylum; he made friends with his neighbours and they had barbecues together. One day he drove back home, and realised that the asylum had never been renovated, and he was the only one living there.",
		  	goal: "Camping_3_flats" 
		  },{
			text: "I told a story about a woman who was trapped in the walls of her house. Every day she would call out to the people who lived there, but they never answered her, just left food for her in the dumbwaiter. One day she managed to catch one of them and took over their life completely as if she had always been them.",
		  	goal: "Camping_3_old_woman" 
		  },{
			text: "I told a story about a kid who was dragged down a well by a secret civilisation of people who lived underground. Every year, another kid would be taken, and when they got old enough they would do it themselves, having forgotten everything about their families and even the sun itself.",
		  	goal: "Camping_3_sun" 
		  }
		]  
	}
];

sceneData["Camping_3_flats"] = [ 
	{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "No that wasn't me, that was the tall Greek boy.",
		  	goal: "Camping_3" 
		  }
		] 
	}
];

sceneData["Camping_3_old_woman"] = [ 
	{
		application: loadingFunctions.text,
		text: "I never told that story, where did I hear it again."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I remember hearing alarms.",
		  	goal: "accident_3" 
		  }
		] 
	}
];

sceneData["Camping_3_sun"] = [ 
	{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "Have I forgotten the sun?",
		  	goal: "Camping_3" 
		  }
		] 
	}
];
