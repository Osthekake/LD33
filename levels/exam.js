// the exam goes here:
// Maybe we should cut even more from the first pass? Or change the passes more as we go along?
// See level.js for comments on how this works.
// todo: insert title screens and the stuff at the end.

sceneData["exam_1_1"] = [
	{
		application: loadingFunctions.text,
		text: "I was the only person to study ants that year."
	}, {
		application: loadingFunctions.text,
		text: "The professors suggested it would be too difficult to get interesting data"+
			" and Meta­Study would be beyond the scope of a Masters dissertation."
	}, {
		application: loadingFunctions.text,
		text: "In the end my proposal was accepted, although it ending up being the "+
			"hardest part of the project."
	},{
		application: loadingFunctions.choices,
		choices: [ 
			{
				text: "I studied Ants.",
				goal: "exam_1_2" 
			}, {
				text: "I found a senior researcher to help me.",
				goal: "exam_1_2" 
			}, {
				text: "My dissertation was one the impact of Ants in horror film development.",
				goal: "exam_1_2" 
			}, 
		] 
	} 
];

sceneData["exam_1_2"] = [
	{
		application: loadingFunctions.text,
		text: "I was very lucky I suppose, meeting Dr Engel."
	}, {
		application: loadingFunctions.text,
		text: "She had planned a trip out to the Thai rainforest."
	}, {
		application: loadingFunctions.text,
		text: "One her students had fallen ill so she had an empty and fully funded space."
	}, {
		application: loadingFunctions.text,
		text: "Naturally I accepted."
	}, {
		application: loadingFunctions.text,
		text: "Taylor was an excellent mentor and had done her PhD on <em>Ophiocordyceps unilateralis.</em>"
	}, {
		application: loadingFunctions.text,
		text: "This was invaluable when studying the behaviour of <em>Camponotus leonardi.</em>"
	}, {
		application: loadingFunctions.choices,
		choices: [ 
			{
				text: "I studied how the ants’ society worked.",
				goal: "exam_1_3" 
			}, {
				text: "I studied how ants combated invaders.",
				goal: "exam_1_3" 
			}, {
				text: "I studied which fungus the ants ate.",
				goal: "exam_1_3" 
			}, 
		] 
	} 
]; 

sceneData["exam_1_3"] = [
	{
		application: loadingFunctions.text,
		text: "It was very difficult to getting funding for the PhD."
	}, {
		application: loadingFunctions.text,
		text: "The advances in space travel and the technologies required to bring back resources where the focus."
	}, {
		application: loadingFunctions.text,
		text: "It was all but impossible to get funding unless you could say how your work was relevant to mining the night sky."
	}, {
		application: loadingFunctions.next,
		choices: [{goal: "exam_2_1"}]
	}
]; 

sceneData["exam_2_1"] = [
	{
		application: loadingFunctions.text,
		text: "I was the only person to study ants that year."
	}, {
		application: loadingFunctions.text,
		text: "I think the professor was scared of ants and didn’t want to supervise a dissertation about them."
	},  {
		application: loadingFunctions.text,
		text: "In the end my proposal was accepted, although it ending up being the "+
			"hardest part of the project."
	},{
		application: loadingFunctions.choices,
		choices: [ 
			{
				text: "I studied Ants.",
				goal: "exam_2_2" 
			}, {
				text: "I found a senior researcher to help me.",
				goal: "exam_2_2" 
			}, {
				text: "My dissertation was one the impact of Ants in horror film development.",
				goal: "exam_2_2" 
			}, 
		] 
	} 
]; 

sceneData["exam_2_2"] = [
	{
		application: loadingFunctions.text,
		text: "I was very lucky I suppose, meeting Dr Engel."
	}, {
		application: loadingFunctions.text,
		text: "She had planned a trip out to the Thai rainforest."
	}, {
		application: loadingFunctions.text,
		text: "One her students had fallen ill so she had an empty and fully funded space."
	}, {
		application: loadingFunctions.text,
		text: "Naturally I accepted."
	}, {
		application: loadingFunctions.text,
		text: "Taylor was an excellent mentor and had done her PhD on <em>Ophiocordyceps unilateralis.</em>"
	}, {
		application: loadingFunctions.text,
		text: "This was invaluable when studying the behaviour of <em>Camponotus leonardi.</em>"
	}, {
		application: loadingFunctions.text,
		text: "I have never been able to shake how alive the the ants looked."
	}, {
		application: loadingFunctions.text,
		text: "I know they were dead, but still they looked alive."
	}, {
		application: loadingFunctions.coupled_choices,	
		choices: [
			{
			  	upper: "I studied how the ants’ society worked.",
			  	lower: "While I was there I read the novelisation of the movie Alien.",
			  	goal: "exam_2_2"
		  	}, {
			  	upper: "I studied how ants combated invaders.",
			  	lower: "While I was there I read the novelisation of John Carpenter's The Thing.",
			  	goal: "exam_2_2"
		  	}, {
			  	upper: "I studied which fungus the ants ate.",
			  	lower: "The interactions of the uninfected ants and the infected ants was fascinating.",
			  	goal: "exam_2_3"
		  	}
		]
	} 
];

sceneData["exam_2_3"] = [
	{
		application: loadingFunctions.text,
		text: "The dissertation proved to be great basis for a PhD."
	}, {
		application: loadingFunctions.text,
		text: "It was very difficult to getting funding for the PhD."
	}, {
		application: loadingFunctions.text,
		text: "The advances in space travel and the technologies required to bring back resources where the focus."
	}, {
		application: loadingFunctions.text,
		text: "It was all but impossible to get funding unless you could say how your work was relevant to mining the night sky."
	}, {
		application: loadingFunctions.next,
		choices:[{goal: "exam_3_1"}]
	} 
]; 

//more to do..