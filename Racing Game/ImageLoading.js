var carPic = document.createElement("img");
var wallPic = document.createElement("img");
var roadPic = document.createElement("img");

var picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	if (picsToLoad == 0) {
		imageLoadingDoneStartGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	picsToLoad++;
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = fileName;
}

function loadImages() {
	beginLoadingImage(carPic, "player1car.png");
	beginLoadingImage(roadPic, "track_road.png");
	beginLoadingImage(wallPic, "track_wall.png");
}