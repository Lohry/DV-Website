

var width = 720;
var steps = 36;
var pixelDim = width/steps;

function setup () {
	createCanvas(800,800);
}

function draw() {
	background(255);
	noStroke();
	colorMode(HSB, steps);
	for (i = 0; i < steps; i++) {
		for (j = 0; j < steps; j++) {
			fill(i, j, 100);
			rect(i*pixelDim, j*pixelDim, pixelDim, pixelDim);
		}

	}
}