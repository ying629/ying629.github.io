var canvas;

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	// canvas.position(0,0);
    strokeWeight(0);
}

function draw() {
    circle(30,30,30);
  	clear();
	background(color(164, 216, 216));

  let white = color(255,255,255);
  fill(white);
  rect(window.innerWidth-875,window.innerHeight-445,150,150,20,20);
}


// https://p5js.org/reference/#/p5/image
// https://stackoverflow.com/questions/39126139/is-there-a-way-to-load-and-clip-an-image-with-a-round-border-in-p5-js
