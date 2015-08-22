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

function load(sceneName){
	Level.currentScene = sceneData[sceneName];
	Level.sceneIndex = 0;
	render();
}

function next(){
	Level.sceneIndex += 1;
	render();
}
