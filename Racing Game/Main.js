var canvas, canvasContext;

window.onload = function() {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext("2d");
		
	loadImages();
}

function imageLoadingDoneStartGame() {

	var framesPerSecond = 30;
	setInterval(updateAll, 1000 / framesPerSecond);
	
	setupInput();
	carReset();
}

function moveAll() {
	carMove();
	carTrackHandling();
}

function updateAll() {
	moveAll();
	drawAll();
}

function drawAll() {	
	drawTracks();
	carDraw();
}