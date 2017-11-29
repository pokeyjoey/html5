window.onload = function() {
	var canvas = document.getElementById("drawingCanvas");
	var context = canvas.getContext("2d");

	// create variables to store each detail about the arc
	var centerX = 150;
	var centerY = 300;
	var radius = 100;
	var startingAngle = 1.25 * Math.PI;
	var endingAngle = 1.75 * Math.PI;

	// draw the arc
	context.arc(centerX, centerY, radius, startingAngle, endingAngle);
	context.stroke();
};
