var bookCover = document.getElementById("cover");

function openBook() {
	bookCover.remove();
	var saveBtn = document.createElement("button");
	saveBtn.setAttribute("id", "save");
	saveBtn.innerHTML = "SAVE";
	document.body.appendChild(saveBtn);

	var clearBtn = document.createElement("button");
	clearBtn.setAttribute("id", "clear");
	clearBtn.innerHTML = "CLEAR";
	document.body.appendChild(clearBtn);

	var canvas = document.createElement("canvas");
	canvas.setAttribute("id", "drawingCanvas");
	document.body.appendChild(canvas);
	var context = canvas.getContext("2d");

	initCanvas();
	
	saveBtn.addEventListener("click", saveDrawing);
	clearBtn.addEventListener("click", clearDrawing);
}

function saveDrawing() {
	localStorage.drawing = canvas.toDataURL();
}

function clearDrawing() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

bookCover.addEventListener("click", openBook);
