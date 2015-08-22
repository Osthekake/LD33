var Level = {};

Level.setStage = function(stageObject){
	Level.stage = stageObject;
};

Level.currentScene = undefined;

Level.sceneIndex = 0;

Level.stage = undefined;

function render(){
	var scr = Level.currentScene[Level.sceneIndex];
	var renderObject = scr.application(scr);
	//transitions here.
	Level.stage.html(renderObject.html);
}

function inform(line){
	$("#errors").text(line);	
}

function loadScene(sceneName){
	Level.currentScene = sceneData[sceneName];
	if(Level.currentScene){
		inform("loading " + sceneName + "...");
		console.log("loading " + sceneName + "...");
		Level.sceneIndex = 0;
		render();
	}else{
		inform("no such scene: " + sceneName);	
		console.log("no such scene: " + sceneName);
	}
}

function next(){
	Level.sceneIndex += 1;
	render();
}
