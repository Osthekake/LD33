// Functions for loading data. Probably don't need to care about this.
var loadingFunctions = {
	text: function(textObject){ // use this to display text
		console.log("loading textObject " + textObject);
		var rendered = "<div>" + textObject.text + "</div>" +
				  		"<a href='#' onClick=next()>next</a>";
		return {
			html: rendered
		};
	},
	choices: function(choicesObject){ // use this to display choices
		return {
			html: "<div> <ul>" + 
				$.map(choicesObject.choices, function(choice){
					return "<li><a href='#' onClick=loadScene('" + choice.goal + "') >" + choice.text + "</a></li>";
				}).join("") +
				"</ul></div>"
		};
	},
	sound: function(soundObject){ // use this to play a sound, or to change which sound is playing, or stop it?
		alert("sound is not implemented");
	},
	picture: function(pictureObject){ // use this to display a picture or change which picture is being displayed
		alert("pictures are not implemented");
	}
};

// Actual data. This is where lots and lots of stuff goes.
var sceneData = {};

sceneData["intro"] = [ // a scene is denominated by a key string. This scene has the key "intro".
	// A scene is a list of scene objects, which have a 'application' function and some data.
	// The game will display them in order.
	{
		application: loadingFunctions.text,
		// when the function 'text' is used, this is the expected data format:
		text: "There was a cupboard under the stairs." // a single string called 'text'. Only this string will be displayed.
		// possibly there will be more (optional) data here in the future: Font, transition, style
	},{
		application: loadingFunctions.text,
		text: "I hid there as a child." // Keep in mind that this line might become large on screen.
	},{
		application: loadingFunctions.choices,
		//when the function 'choices' is used, this is the expected data format:
		choices: [ // a single list named 'choices'...
		  {
		  	text: "It was my safe place.",
		  	goal: "cupboard_safe" //name of the scene to transition to
		  	// maybe a kind of transition would go here.
		  }, {
		  	text: "It was my secret place.",
		  	goal: "cupboard_secret"
		  }
		] // All of the choices will be rendered on screen at once
	}
	// After a choice, one would end the scene, as it transitions to another one.
];

//these could theoretically go into different files, if we want to split it up into levels or something.
sceneData["cupboard_safe"] = [ // this is the scene referred to above.
	{
		application: loadingFunctions.text,
		text: "I needed safety from my dangerous surroundings."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "What was it again about the cupboard?",
		  	goal: "intro"
		  }
		] // This list can be of any non-zero length. Here there is only one choice.
	}
];


sceneData["cupboard_secret"] = [ // this is the scene other referred to above.
	{
		application: loadingFunctions.text,
		text: "I was doing bad things in secret."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "No actually I was just hiding.",
		  	goal: "cupboard_safe" // Choices can lead to any scene. Loops and shortcuts are possible. I recommend maybe drawing a chart?
		  }
		] 
	}
];