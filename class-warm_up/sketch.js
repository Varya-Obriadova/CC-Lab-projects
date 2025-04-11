// let ball1; 
// let ball2;
let basket = []

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  // ball1 = new Ball(100, 300);
  // ball2 = new Ball (200, 100)
  for (let i = 0; i < 5; i++){
    let egg = new Ball (100, 200)
    basket.push (egg)
  }
}

function draw() {
  background(220);

  // ball1.display ()
  // ball1.update ()

  // ball2.display ()
  // ball2.update ()
  for (let i = 0; i < basket.length; i++){
    basket[i].update()
    basket[i].display ()
  }
  

}

class Ball {
  constructor (startX, startY){
    this.posX = startX
    this.posY = startY
    this.accelerationX = random (-2, 2)
    this.accelerationY = random (-2, 2)
    this.scaleFactor = random (0.3, 1)
    this.diaX = 80
    this.diaY = 130

  }
  display (){
    push ()
    noStroke()
    scale (this.scaleFactor)
    fill (255, 200)
    translate (this.posX, this.posY)
    arc (0, 0, this.diaX, this.diaY, PI, 2*PI)
    arc (0, 0, this.diaX, this.diaX, 0, PI)
    pop ()
  }
  update (){
    this.posX += this.accelerationX
    this.posY += this.accelerationY

    if (this.posX > width || this.posX < 0 ){
      this.accelerationX = - this.accelerationX
    }
    if (this.posY > height || this.posY < 0 ){
      this.accelerationY = - this.accelerationY
    }
  }
}

function mousePressed (){
  let egg = new Ball (mouseX, mouseY)
  basket.push (egg)

}