var drawingReady = false;
var canvas;
var context;

function initCanvas(){
	canvas = document.getElementById("drawingCanvas");
	context = canvas.getContext("2d");
	resizeCanvasToDisplaySize(canvas);
	context.strokeStyle = "#000000"
	context.lineJoin = "round";
	context.lineCap = "round";
	if(localStorage.drawing){
		retrieveDrawing();
	}
	
	canvas.addEventListener("mousemove", draw);
	canvas.addEventListener("mousedown", (event) => {
	  isDrawing = true;
	  [lastX, lastY] = [event.offsetX, event.offsetY];
	});
	canvas.addEventListener("mouseup", (e) => {
		console.log(e.offsetX, e.offsetY);
		isDrawing = false;
	});
	canvas.addEventListener("mouseout", () => isDrawing = false);

	drawingReady = true;
}

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event) {
  if(!isDrawing) return;
  
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
  
  lastX = event.offsetX;
  lastY = event.offsetY;
}

function saveDrawing() {
	localStorage.drawing = canvas.toDataURL();
}

function retrieveDrawing() {
	var dataURL = localStorage.getItem("drawing");
	var img = new Image;
	img.src = dataURL;
	img.onload = function() {
		context.drawImage(img, 0, 0);
	}
}

// thanks to https://stackoverflow.com/a/43364730
// this fixes the 1x1 pixel issue when resizing canvas
function resizeCanvasToDisplaySize(canvas) {
	// look up the size the canvas is being displayed
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
 
	// If it's resolution does not match change it
	if (canvas.width !== width || canvas.height !== height) {
		canvas.width = width;
		canvas.height = height;
		return true;
	}
 
	return false;
}

while(drawingReady){
	window.onresize(resizeCanvasToDisplaySize(canvas));
}
