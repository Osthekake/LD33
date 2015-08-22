var Scene = {};

Scene.setOpacity = function(opacity){
	$(".fadeable").css({"opacity" : opacity});
};

Scene.getOpacity = function(){
	return $(".fadeable").css("opacity");
}

Scene.fadeOutThenIn = function(between){
	Scene.setOpacity(0.0);
//	console.log("fading out")
	var step = function(){
//		console.log("doing inbetween step");
		between();
		Scene.setOpacity(1.0);
//		console.log("fading in");
	}
	setTimeout(step, 1000);
};

Scene.setBackground = function(path){
	console.log("setting background " + path);
	$("#image").css({"opacity" : 0.0});
	setTimeout(function(){
		$("#image").css({"background-image": "url(images/"+path+")"});
		$("#image").css({"opacity" : 1.0});
	}, 1000);
	
};