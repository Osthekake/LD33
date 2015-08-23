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

function loadScene(sceneName, shouldSkip){
	Level.currentScene = sceneData[sceneName];
	if(Level.currentScene){
		inform("loading " + sceneName + "...");
		console.log("loading " + sceneName + "...");
		Level.sceneIndex = 0;
		if(shouldSkip)
			render();
		else
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

function next(shouldSkipFade){
	Level.sceneIndex += 1;
	if(shouldSkipFade)
		render();
	else
		Scene.fadeOutThenIn(render);
}
