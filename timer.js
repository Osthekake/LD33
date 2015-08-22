function Timer(from) {
	var Timer = {
		totalLength: from,
		time: from,
		running: false,
		triggers: {},
		updates: []
	};

	Timer.tick = function(time){
		if(time)
			Timer.time = time
		else
			Timer.time -= 1;
		if(Timer.triggers[Timer.time])
			Timer.triggers[Timer.time](Timer);
		for (var i = Timer.updates.length - 1; i >= 0; i--) {
			Timer.updates[i](Timer);
		};
		if(Timer.time <= 0){
			Timer.stop();
		}
	};

	Timer.start = function(from){
		if(Timer.running)
			Timer.stop();
		Timer.running = true;
		if(from){
			Timer.time = from;
			Timer.totalLength = from;
		}
		Timer.interval = setInterval(Timer.tick, 1000);
		console.log("Timer started");
	};

	Timer.normalized = function(){
		//console.log("calculating " + Timer.time + " / " + Timer.totalLength + " = " + (Timer.time/Timer.totalLength));
		return Timer.time / Timer.totalLength;
	}

	Timer.stop = function(){
		console.log("Timer stopped");
		Timer.running = false;
		Timer.tick(Timer.totalLength);
		clearInterval(Timer.interval);
	};

	Timer.clearTriggers = function(){
		Timer.triggers = {};	
	};

	Timer.triggerOn = function(time, what){
		if(Time.triggers[time]){
			console.log("Error!! Timer already has an event to trigger on time " + time);
		}
		Time.triggers[time] = what;
	};

	Timer.clearUpdates = function(){
		Timer.updates = [];
	}

	Timer.requestUpdates = function(how){
		Timer.updates.push(how);
	}
	return Timer;
}