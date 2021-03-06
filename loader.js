var Level = {};

Level.currentScene = undefined;

Level.sceneIndex = 0;

function render(){
	var scr = Level.currentScene[Level.sceneIndex];
	scr.application(scr);
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
		Scene.fadeOutThenIn(render);
	}else{
		inform("no such scene: " + sceneName);	
		console.log("no such scene: " + sceneName);
	}
}

Level.renderPicture = function(path){
	Level.sceneIndex += 1;
	render();
	Scene.setBackground(path);
}

Level.setCrackLevel = function(level){
	Level.sceneIndex += 1;
	render();
	Scene.setCrackLevel(level);
}

function next(){
	Level.sceneIndex += 1;
	Scene.fadeOutThenIn(render);
}
