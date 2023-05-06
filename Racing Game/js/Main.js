var canvas, canvasContext;

var blueCar = new carClass();

window.onload = function() {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext("2d");
	
	colorRect(0, 0, canvas.width, canvas.height, "black");
	colorText("Loading images", canvas.width / 2, canvas.height / 2);
	
	loadImages();
}

function imageLoadingDoneStartGame() {

	var framesPerSecond = 30;
	setInterval(updateAll, 1000 / framesPerSecond);
	
	setupInput();
	blueCar.reset();
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	blueCar.move();
	carTrackHandling(blueCar);
}

function drawAll() {	
	drawTracks();
	blueCar.draw();
}