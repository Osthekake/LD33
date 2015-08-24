sceneData["toys1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I remember when I was very young I had an actual Tracy Island." 
	},{
		application: loadingFunctions.picture,
		path: "next.png" 
	},{
		application: loadingFunctions.text,
		text: "I used to play with it for hours."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Lady Penelope was my favourite",
		  	goal: "toys1_outro"
		  }, {
		  	text: "Brains was my favourite",
		  	goal: "toys1_outro"
		  }, {
		  	text: "Alan Tracy was my favourite",
		  	goal: "toys1_outro"
		  }
		] 
	}
];


sceneData["toys1_outro"] = [ 
	{
		application: loadingFunctions.text,
		text: "Most of the games I made up with them had International Rescue save all my other toys from whatever disaster befell them."
	},{
		application: loadingFunctions.text,
		text: "I didn’t like my toys being the bad guys so I stole toys from my brother to be the villains."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I used to love those games, why did I ever stop playing?",
		  	goal: "helmet2" 
		  }
		] 
	}
];


sceneData["toys_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "I remember when I was very young I had an actual Tracy Island. I used to play with it for hours." 
	},{
		application: loadingFunctions.picture,
		path: "next.png" 
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Lady Penelope was my favourite",
		  	goal: "toys_2_1"
		  }, {
		  	text: "Brains was my favourite",
		  	goal: "toys_2_1"
		  }, {
		  	text: "Alan Tracy was my favourite",
		  	goal: "toys_2_1"
		  }
		] 
	}
];


sceneData["toys_2_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "Most of the games I made up with them had the Thunderbirds rescue all my other toys from whatever disaster befell them."
	},{
		application: loadingFunctions.text,
		text: "I didn’t like my toys being the bad guys so I stole toys from my brother to be the monsters."
	},{
		application: loadingFunctions.text,
		text: "They would chase the Tracys around the island and my bedroom. Once they chased the toys out of the window."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I got in trouble for throwing my brother's toys out of the window",
		  	goal: "toys_2_2" 
		  },{
			text: "I got in trouble for throwing my own toys out of the window",
		  	goal: "toys_2_3" 
		  },{
			text: "I lost my favorite toys",
		  	goal: "toys_2_4" 
		  }
		]  
	}
];


sceneData["toys_2_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "My brother was too old for them, but he still complained when he couldn’t find them."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I can't remember playing a different game all summer.",
		  	goal: "toys_2" 
		  }
		] 
	}
];


sceneData["toys_2_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "Digging the toys out the dirt was best part of that game."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "It felt like I played those games for ever.",
		  	goal: "toys_2" 
		  }
		] 
	}
];


sceneData["toys_2_4"] = [ 
	{
		application: loadingFunctions.text,
		text: "Eventually I lost or broke most of my toys that way."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I learned the hard way that everything breaks.",
		  	goal: "lifesupport_2" 
		  }
		] 
	}
];


sceneData["toys_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "I remember when I was very young I had an actual Tracy Island. I used to play with it for hours." 
	},{
		application: loadingFunctions.picture,
		path: "next.png" 
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Lady Penelope was my favourite. She was the most independent",
		  	goal: "toys_3_1"
		  }, {
		  	text: "Brains was my favourite. He was the cleverest",
		  	goal: "toys_3_1"
		  }, {
		  	text: "Alan Tracy was my favourite. He was the most adventurous",
		  	goal: "toys_3_1"
		  }
		] 
	}
];


sceneData["toys_3_1"] = [ 
	{
		application: loadingFunctions.text,
		text: "Most of the games I made up with them had the Thunderbirds rescue all my other toys from whatever tragedy had befallen them."
	},{
		application: loadingFunctions.text,
		text: "I didn’t like my toys being the bad guys so I stole toys from my brother to be the monsters."
	},{
		application: loadingFunctions.text,
		text: "They would chase the Tracys around the island and my bedroom, and usually out of the window."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I got in trouble for throwing my brother's toys out of the window",
		  	goal: "toys_3_2" 
		  },	  {
			text: "I got in trouble for throwing my own toys out of the window",
		  	goal: "toys_3_3" 
		  },		  {
			text: "I lost my favorite toys",
		  	goal: "toys_3_4" 
		  }
		]  
	}
];


sceneData["toys_3_2"] = [ 
	{
		application: loadingFunctions.text,
		text: "My brother was too old for them, but he still complained when he couldn’t find them."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I can't remember playing a different game all summer.",
		  	goal: "toys_3" 
		  }
		] 
	}
];


sceneData["toys_3_3"] = [ 
	{
		application: loadingFunctions.text,
		text: "Digging the toys out the dirt was best part of that game."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "It felt like I played those games for ever.",
		  	goal: "toys_3" 
		  }
		] 
	}
];


sceneData["toys_3_4"] = [ 
	{
		application: loadingFunctions.text,
		text: "I remember one day coming home from school and seeing all the toys half covered in dirt, and thinking that they were just toys."
	},{
		application: loadingFunctions.text,
		text: "They weren’t heroes or villains or people to be recused anymore.  I must have grown I suppose."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I just left them there in the dirt, lifeless, and walked away, shaking the soil from my hands.",
		  	goal: "lifesupport_3" 
		  }
		] 
	}
];