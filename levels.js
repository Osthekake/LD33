// Functions for loading data. Probably don't need to care about this.
var loadingFunctions = {
	text: function(textObject){ // use this to display text
		//console.log("loading textObject " + textObject);
		var onclk;
		if(textObject.choices)
			onclk = "loadScene('"+textObject.choices[0].goal+"')";
		else
			onclk = "next()";
		$("#stage").html(
			"<div class='bigShiny' onClick="+onclk+"> " + 
			textObject.text + 
			"</div>"
		);
		//$("#stage").addClass("bigShiny");
	},
	titleScreen: function(titleCard){
		$("#stage").html(
			"<div class='bigShiny' onClick=next()><h1>" + 
			titleCard.text + 
			"</h1></div>"
		);
	},
	coupled_choices: function(choicesObject){
		$("#stage").html(
		 	"<div class='upper'><ul>" + 
			$.map(choicesObject.choices, function(choice, index){
					return "<li class='unhover hoverlink"+index+"'><a href='#' onClick=loadScene('" + choice.goal + "') >" + choice.upper + "</a></li>";
			}).join("") +
			"</ul></div>"+
		 	"<div class='lower'><ul>" + 
			$.map(choicesObject.choices, function(choice, index){
					return "<li class='unhover hoverlink"+index+"'><a href='#' onClick=loadScene('" + choice.goal + "') >" + choice.lower + "</a></li>";
			}).join("") +
			"</ul></div>"
		);

		var hover = function(cls){
			return function(){
//				console.log("hovering...  " + cls);
				$(cls).addClass("hover"); 
			};
		};
		var unhover = function(cls){
			return function(){
//				console.log("unhovering")
				$(cls).removeClass("hover");
			};
		};
		for (var i = choicesObject.choices.length - 1; i >= 0; i--) {
			var cls = ".hoverlink"+(i);
			//console.log("adding hover link to " + cls);
			$(cls).hover(hover(cls), unhover(cls));
		};
		
		//$("#stage").addClass("bigShiny");	
	},
	choices: function(choicesObject){ // use this to display choices
		$("#stage").html(
		 	"<div><ul>" + 
			$.map(choicesObject.choices, function(choice){
					return "<li class='choice'><a href='#' onClick=loadScene('" + choice.goal + "') >" + choice.text + "</a></li>";
			}).join("") +
			"</ul></div>"
		);
		//$("#stage").addClass("");
	},
	sound: function(soundObject){ // use this to play a sound, or to change which sound is playing, or stop it?
		alert("sound is not implemented");
	},
	picture: function(pictureObject){ // use this to display a picture or change which picture is being displayed
		Level.renderPicture(pictureObject.path);
	},
	setCrack: function(obj){
		Level.setCrackLevel(obj.level);
	}
};

// Actual data. This is where lots and lots of stuff goes.
var sceneData = {};

sceneData["couple_test"] = [
	{
		application: loadingFunctions.coupled_choices,	
		choices: [
			{
			  	upper: "It was my safe place.",
			  	lower: "Cupboards are tastyy...",
			  	goal: "cupboard_safe"
		  	}, {
			  	upper: "It was my secret place.",
			  	lower: "I like to hide and watch!",
			  	goal: "cupboard_secret"
		  	}
		]
	}
];

sceneData["intro"] = [ // a scene is denominated by a key string. This scene has the key "intro".
	// A scene is a list of scene objects, which have a 'application' function and some data.
	// The game will display them in order.
	{
		application: loadingFunctions.text,
		// when the function 'text' is used, this is the expected data format:
		text: "When I listen closely I can hear a very faint hissing coming from somewhere nearby." // a single string called 'text'. Only this string will be displayed.
		// possibly there will be more (optional) data here in the future: Font, transition, style
	},{
		application: loadingFunctions.text,
		text: "It's quieter than the sound of my own breathing." // Keep in mind that this line might become large on screen.
	},{
		application: loadingFunctions.choices,
		//when the function 'choices' is used, this is the expected data format:
		choices: [ // a single list named 'choices'...
		  {
		  	text: "Try to work out what’s going on",
		  	goal: "cracked_visor1" //name of the scene to transition to
		  	// maybe a kind of transition would go here.
		  }, {
		  	text: "Watch the rings of Saturn drift by",
		  	goal: "cracked_visor2"
		  }
		] // All of the choices will be rendered on screen at once
	}
	// After a choice, one would end the scene, as it transitions to another one.
];

//these could theoretically go into different files, if we want to split it up into levels or something.
sceneData["cracked_visor1"] = [ // this is the scene referred to above.
	{
		application: loadingFunctions.setCrack,
		level: 1
	},{
		application: loadingFunctions.text,
		text: "There's a thin line across my visor. My suit's leaking!"
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Look for some sealant in pockets",
		  	goal: "Camping1"
		  }
		] // This list can be of any non-zero length. Here there is only one choice.
	}
];


sceneData["cracked_visor2"] = [ // this is the scene other referred to above.
	{
		application: loadingFunctions.text,
		text: "The rings are beautiful but something's spoiling the view."
	},{
		application: loadingFunctions.choices,
		choices: [ 
		  {
		  	text: "Look more closely",
		  	goal: "cracked_visor1" // Choices can lead to any scene. Loops and shortcuts are possible. I recommend maybe drawing a chart?
		  }
		] 
	}
];
