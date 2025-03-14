let dogX;
let dogY = 360;

let catX;
let catY = 63;
let catDirection = 1

let mouX;
let mouY = 300
let catIsVisible = true;
let dogIsVisible = true;
let mouseIsVisible = true;
let randomNum
let transparency = 0
let circleStart = 1
let offset = 5
let traspInc = 1

function setup() {
  
  //let canvas = createCanvas(800, 500);
  //canvas.id ("p5-canvas")
  //canvas.parent ("p5-canvas-container")
  
  createCanvas(800, 500);
  dogX = random(129, 452);
  catX = random(50, 450);
  mouX = random (40, 150)
  
  
  randomNum = round (random (1, 3))
  
  
  
}

function draw() {
  
  console.log (mouseX, mouseY)
  
  background("#613b16"); 
  
  
        
  drawBackground();
  

  
  
  if (catIsVisible) {
    drawCat(catX, catY);
    if (catX >= 800 && catX <= 0 ){
      
      catX += 1 } else {
        catX 
        
        
      
    }
    
    
  }
  
  if (mouseIsVisible) {
    drawMouse(mouX, mouY);
  }

  if (dogIsVisible) {
    drawDog(dogX, dogY);
    
  }
  
  if (catIsVisible == false){
    for (let x = circleStart; x < 802; x += 10){
      for (let y = 1; y < 502; y +=10){
        fill (random (0, 30), transparency)
        circle (x, y, 10)
      }
    }
    
    
    
    
    
  }

  if (dogIsVisible == false){
    for (let x = circleStart; x < 802; x += 10){
      for (let y = 1; y < 502; y +=10){
        fill (random (0, 30), transparency)
        circle (x, y, 10)
      }
    }
  }
  
  if (mouseIsVisible == false){
    for (let x = circleStart; x < 802; x += 10){
      for (let y = 1; y < 502; y +=10){
        fill (random (0, 30), transparency)
        circle (x, y, 10)
      }
    }
  }
  
  transparency += traspInc
  if (transparency > 200 || transparency < 0){
    traspInc = -traspInc
  }

  circleStart += offset
  offset = - offset
  
}
  

  

 
    


function drawBackground() {
  rectMode(CENTER);

  
  beginShape();
  noStroke();
  fill(255);
  vertex(0, 450);
  vertex(0, 0);
  vertex(80, 0);
  vertex(80, 120);
  vertex(213, 120);
  vertex(215, 416);
  endShape();
  
  beginShape()
  fill ("lightblue")
  vertex (526, 218)
  vertex (676, 237)
  vertex (676, 341)
  vertex (526, 299)
  endShape(CLOSE);
  
  stroke ("#613b16")
  strokeWeight (3)
  line (600, 227, 600, 320)
  
  beginShape()
  fill (255, 0, 0)
  curveVertex(584, 110)
  curveVertex (660, 248)
  curveVertex(800, 317)
  
  curveVertex(800, 105)
  
  endShape(CLOSE);

  beginShape();
  noStroke();
  fill(158, 110, 40);
  vertex(width, 100);
  vertex(0, 120);
  vertex(0, 50);
  vertex(width, 50);
  endShape();

  beginShape();
  noStroke();
  fill("#532e18");
  vertex(0, 120);
  vertex(0, 100);
  vertex(width, 90);
  vertex(width, 110);
  endShape();

  beginShape();
  noStroke();
  fill(158, 110, 40);
  vertex(0, 500);
  vertex(0, 450);
  vertex(277, 394);
  vertex(516, 394);
  vertex(800, 500);
  endShape();
  
  //door
  fill("#5A3E2B");
  noStroke()
  rectMode(CENTER);
  rect(337, 267, 120, 250); 
  fill("gold");
  ellipse(386, 268, 10, 10);
  
  fill(0);  // Black color
  noStroke();
  ellipse(101, 300, 180);
  
  beginShape()
  noStroke();
  fill (255)
  vertex (0, 447)
  vertex (212, 408)
  vertex (212, 308)
  vertex (0, 327)
  endShape(CLOSE);
  
  //curtain
  //windown
  
  
  beginShape()
  fill (255, 0, 0)
  curveVertex(84, 118)
  curveVertex(0, 192)
  vertex(0, 120)
  endShape(CLOSE);
  
  
  
   
}


function drawCat(x, y) {
  
  noStroke();

  // cat
  push();
  translate(x, y);
  
  // // find out which drirecrtion i moves
  // if(....movs right:.){
  //   scale(-1, 1) // cat looks to the right
  // }
  
  
  fill(0);
  circle(-20, -20, 30); // head
  ellipse(0, 0, 60, 40); // body
  triangle(-25, -30, -10, -45, 0, 0); // ear
  fill (255)
  fill (255)
  circle (-21, -25, 5) // eye
  fill(0);
  circle (-22, -25, 3)
  fill ("#DC143C")
  circle (-30, -20, 4)
  
  push();
  translate(5, 0 - sin(radians(frameCount + 0) * 10) * 5);
  fill(0);
  // moving tail
  for (let i = 0; i < 30; i++) {
    let xtail = i;
    let ytail = sin(radians(frameCount + i) * 10) * 5;
    circle(xtail + 25, ytail, 11);
  }
  pop();
  
  fill("red");
  circle(0, 0, 5)
  pop()
  
  

  
}

function drawDog(x, y) {
  noStroke();

  push();
  translate(x, y);

  fill("#2A1D11"); // Dog color

  // body
  ellipse(0, 50, 120, 90);

  // head
  ellipse(0, 0, 100, 90);

  // eyes
  fill(0);
  ellipse(-20, -10, 15, 20);
  ellipse(20, -10, 15, 20);
  fill(255);
  ellipse(-18, -13, 5, 5);
  ellipse(22, -13, 5, 5);

  // nose
  fill(0);
  ellipse(0, 10, 15, 10);

  // Mouth
  noFill();
  arc(-5, 20, 15, 10, 0, PI / 2);
  arc(5, 20, 15, 10, PI / 2, PI);

  fill("#2A1D11");

  // Dog ears
  beginShape();
  curveVertex(-40, -20);
  curveVertex(-60 + sin(frameCount * 0.5) * 3, -60);
  curveVertex(-40, -70);
  curveVertex(-10, -45);
  endShape(CLOSE);

  beginShape();
  curveVertex(40, -20);
  curveVertex(60 + sin(frameCount * 0.5) * 3, -60);
  curveVertex(40, -70);
  curveVertex(10, -45);
  endShape(CLOSE);

  fill("#2A1D11"); // Paws color (same as body)

  // Paws
  ellipse(-40, 95, 30, 20);
  ellipse(40, 95, 30, 20);

  // Tail
  strokeWeight(5);
  arc(60, 40, 50, 50 + sin(frameCount * 0.5) * 4, -PI / 2, PI);
  
  
  // helper function
  noFill();
  stroke("red");
  rect(0,0, 120, 90) //detection of click area
  circle(0,0, 5) // center
  pop();
}

function drawMouse(x, y) {
  push();
  translate(x, y);
  
  // Body
  fill("grey");
  ellipse(-0, 0, 60, 35); 
  
   // Ears
  fill("darkgrey");
  ellipse(-30, -10, 15, 15);
  ellipse(-15, -22, 12, 12);
  
  
  
  // Head

  
 
  
  

  
  
  // Tail
  noFill();
  stroke("grey");
  strokeWeight(3);
  curve(10, 20, 20, 10, 50, sin(frameCount)*10, sin(frameCount)*10, -40);
  pop()
}

//function mouseObject(){
//  if (mouseX > catX - 25 && mouseX < catX + 25 && mouseY < catY + 20 && mouseY > catY - 20) {
   
// }
  
//}



function mousePressed() {
  
  if (randomNum == 1) {
    if (mouseX > catX - 25 && mouseX < catX + 25 && mouseY < catY + 20 && mouseY > catY - 20) {
      catIsVisible = false;
    }
  }
  
  if (randomNum == 2) {
    if (mouseX > dogX - 60 && mouseX < dogX + 60 && mouseY > dogY - 45 && mouseY < dogY + 45) {
      dogIsVisible = false;
    }
  }
 
  if (randomNum == 3) {
    if (mouseX > mouX - 25 && mouseX < mouX + 25 && mouseY > mouY - 15 && mouseY < mouY + 15) {
      mouseIsVisible = false;
    }
  }
}


  