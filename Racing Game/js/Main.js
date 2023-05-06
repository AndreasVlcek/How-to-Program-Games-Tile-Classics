var canvas, canvasContext;

var blueCar = new carClass();
var greenCar = new carClass();

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
	greenCar.reset();
	blueCar.reset();
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	greenCar.move();
	blueCar.move();
}

function drawAll() {	
	drawTracks();
	greenCar.draw();
	blueCar.draw();
}