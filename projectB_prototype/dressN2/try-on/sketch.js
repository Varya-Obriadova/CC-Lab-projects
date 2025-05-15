let capture;
let room; 
let isCaptureReady = false;

function preload (){
  room = loadImage("assets/galleryR2.png");
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
  background(0);



  if (isCaptureReady) {
    push();
    translate(windowWidth * 0.75, windowHeight/8);
    scale(-1, 1);
    image(capture, 0, 0, windowWidth/4, windowHeight/4);
    pop();
    image(room, 0, 0, windowWidth, windowHeight);
  }
}
