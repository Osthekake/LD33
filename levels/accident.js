sceneData["accident1"] = [ 
	{
		application: loadingFunctions.text,
		text: "I was nearest to the gas extraction platform when the alarm went off, and I was the first on the scene. A leakage in the gas transferral system. If I couldn't stop the leak quickly, it would grow to a full rupture, and we would lose the tanks and maybe the whole spoke-arm of the orbital station." 
	},{
		application: loadingFunctions.picture,
		path: "next.png" 
	},{
		application: loadingFunctions.text,
		text: "I shut the airlock and started cycling the air out of the room I was in. I had to do it carefully or I wouldn't be able to find the leak before the pressure changes tore the metal apart, but I would never be able to find it in time otherwise."
	},{
		application: loadingFunctions.text,
		text: "It was close to the tanker that the gas had been collected in, as far away from the rest of the station as possible. I got the sealant on it and started closing off all the manual seals. I managed to get the first three done before the tanker exploded."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Other than being knocked back, I suffered no further damage",
		  	goal: "accident1_outro"
		  }, {
		  	text: "Other than being knocked back the station suffered no further damage",
		  	goal: "accident1_outro"
		  }, {
		  	text: "I was slightly injured by the blast",
		  	goal: "accident1_outro"
		  }
		] 
	}
];


sceneData["accident1_outro"] = [ 
	{
		application: loadingFunctions.text,
		text: "I was driven backwards towards the station, and my magnetic boots saved me from rebounding off through the gaping hole which had been punched out of the outer shell of the platform. Bits of metal and blocks of instantly frozen gas slammed into the walls around me. I lost consciousness."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
			text: "There was a flash in my vision like a firework as I passed out.",
		  	goal: "Birthday1" 
		  }
		] 
	}
];