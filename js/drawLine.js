window.onload = function() {
	var canvas = document.getElementById("drawingCanvas");
	var context = canvas.getContext("2d");
	context.lineWidth = 10;
	context.strokeStyle = "#cd2828";

	// Draw first line
	context.moveTo(10,10);
	context.lineTo(400,40);
	context.lineCap = "butt";
	context.stroke();

	// Draw second line
	context.beginPath();
	context.moveTo(10,120);
	context.lineTo(400,120);
	context.lineCap = "round";
	context.stroke();

	// Draw a Rectangle
	fillRect(0,10,100,200);
};

