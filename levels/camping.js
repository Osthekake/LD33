sceneData["Camping1"] = [ 
	{
		application: loadingFunctions.text,
		text: "The feeling of being encased in the fabric of my spacesuit reminds me of going camping for the first time with my friends." 
	},{
		application: loadingFunctions.picture,
		path: "next.png" 
	},{
		application: loadingFunctions.text,
		text: "It rained the first night and I huddled in my tent listening to the patter of rain on canvas."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "I fell asleep knowing that I was safe inside my small tent",
		  	goal: "Camping1_outro"
		  }, {
		  	text: "I felt claustrophobic inside the tent and wished I was back in my house",
		  	goal: "Camping1_outro"
		  }, {
		  	text: "I lay awake for hours, listening to the raon mingled with the sound of my own breathing",
		  	goal: "Camping1_outro"
		  }
		] 
	}
];


sceneData["Camping1_outro"] = [ 
	{
		application: loadingFunctions.text,
		text: "On the second day of the trip I went to buy some candy from the camp office. At first I couldn't find it, but after I spent a while wandering around on my own I found it fine."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "I've had that feeling of frantically searching for something recently.",
		  	goal: "accident1" 
		  }
		] 
	}
];