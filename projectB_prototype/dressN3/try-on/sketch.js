let capture;
let room; 
let isCaptureReady = false;

function preload (){
  room = loadImage("assets/galleryR3_holes.png");
}

function setCaptureReady() {
  isCaptureReady = true;
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  capture = createCapture(VIDEO, setCaptureReady); 

  capture.hide();
}

function draw() {
  if (isCaptureReady) {
   push();
    translate(windowWidth/3 + windowWidth/4, windowHeight/4); 
    scale(-1, 1); // flip horizontally
    scale (0.5)
    image(capture, 0, 0, windowWidth/4, windowHeight/4); 
    pop();
    image(room, 0, 0, windowWidth, windowHeight);
  }
}
