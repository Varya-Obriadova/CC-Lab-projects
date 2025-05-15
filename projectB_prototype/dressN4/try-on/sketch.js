let capture;
let room; 
let isCaptureReady = false;

function preload (){
  room = loadImage("assets/galleryR4_holes.png");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  capture = createCapture(VIDEO, () => {
    isCaptureReady = true; // ✅ set when webcam is ready
  });
  
  capture.hide(); 
}

function draw() {
  if (isCaptureReady) {
    image(capture, windowWidth/2, 0, windowWidth/4, windowHeight/4);
    image(room, 0, 0, windowWidth, windowHeight);
  }
}
