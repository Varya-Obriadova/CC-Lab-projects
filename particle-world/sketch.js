// CCLab Mini Project - 9.R Particle World Template

let num_of_arcs = 7; // Decide the initial number of particles.
let max_of_arcs = 500; // Decide the maximum number of particles.

let rainbows = [];
let colors = ["red", "orange", "yellow", "green", "blue", "#00008B", "purple"];



function setup() {

  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  angleMode(DEGREES);

}

function draw() {
  background(255);

  for (let i = 0; i < rainbows.length; i++) {
    rainbows[i].update();
    rainbows[i].display();
  }


  // // limit the number of particles
  // if (particles.length > MAX_OF_PARTICLES) {
  //   particles.splice(0, 1); // remove the first (oldest) particle
  // }

  

}

function mousePressed() {
  rainbows.push(new Rainbow(mouseX, mouseY));
}


class Rainbow {
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.growth = [];
    for (let i = 0; i < 7; i++) {
      this.growth.push(0);
    }
    this.startFrame = frameCount;
    this.delay = random (1,300)
  }
  // methods (functions): particle's behaviors
  update() {
    let elapsed = frameCount - this.startFrame;
    

    for (let i = 0; i < 7; i++) {
      if (elapsed > i * this.delay && this.growth[i] < 180) {
        this.growth[i] += 3;
      }
      if (this.growth[i] >= 180) {
          this.growth[i] = 180;
        }
          
      }
    }
  
    
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);

    noFill();
    strokeWeight(10);
    for (let i = 0; i < 7; i++) {
      if (this.growth[i] > 0) {
        stroke(random(colors));
        arc(0, 0, (200 + i * 20), (200 + i * 20), 180 - this.growth[i], 180 + this.growth[i]);
      }
    }

    pop();
  }
}
