
let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new VaryaDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only
  

  dancer.update();
  dancer.display();

  console.log(mouseX, mouseY)
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class VaryaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.angleR = 0
    this.angleKneeR = 0

    this.angleL = 0
    this.angleKneeL = 0

    this.state = 0

    this.mirroring = false 
    
  }
  update() {

    if (frameCount%400 == 50) {
      this.state = 1;
      this.angleR = -PI/6
      this.mirroring = true 
      

    } else if (frameCount%400 == 100) {
      this.angleKneeR = PI/2
      this.state = 2;
      this.mirroring = false 
   
    } else if (frameCount%400 == 150) {
      this.angleKneeR = 0
      this.state = 3;
      this.mirroring = false 

      
    }else if (frameCount%400 == 200) {
      this.angleR = 0
      this.state = 4;
      this.mirroring = false 

     
    } else if (frameCount%400 == 250) {
      this.state = 5;
      this.angleL = PI/6
      this.mirroring = true 


    } else if (frameCount%400 == 300) {
      this.angleKneeL = -PI/2
      this.state = 6;
      this.mirroring = false 

   
    } else if (frameCount%400 == 350) {
      this.angleKneeL = 0
      this.state = 7;
      this.mirroring = false 

  
    }else if (frameCount%400 == 0) {
      this.angleL = 0
      this.state = 8;
      this.mirroring = false 

    }
    
  }
  display() {
    
    
    push();
    translate(this.x, this.y);
    
    noStroke()
   

    push()
  
    
    // left leg
    ellipseMode (CORNER)
    fill ("#ffdfc4")
    rotate (this.angleL)
    ellipse ( -17, 0, 15, 80)
    let kneeXL = - 14.5
    let kneeYL = 75
    translate (kneeXL, kneeYL)
    rotate (this.angleKneeL)
    ellipse (0, 0, 10, 30)
    fill ("white")
    ellipse (1, 28, 8, 20)
    pop()


    //right leg
    push()
    ellipseMode (CORNER)
    fill ("#ffdfc4")
    rotate (this.angleR)
    ellipse (2, 0, 15, 80)
    let kneeXR = 9.5
    let kneeYR = 75
    translate (kneeXR, kneeYR)
    rotate (this.angleKneeR)
    ellipse (-5, 0, 10, 30)
    fill ("white")
    ellipse (-4, 28, 8, 20)
    pop()

    //skirt
    noStroke()
    fill ("white")
    beginShape ()
    vertex (-20, 0) // from left  upper point
    vertex (20, 0) // to right
    vertex (70, 30)
    vertex (- 70, 30)
    endShape ()
    arc (0, 30, 140, 30, 0, PI )

   

     //hands
    push()
    translate (0, -50)
    fill ("#ffdfc4")
    rotate (-PI/4)
    ellipse (-40, 0, 40, 10)
    pop()

    push ()
    translate (0, -50)
    fill ("#ffdfc4")
    rotate (PI/4)
    ellipse (40, 0, 40, 10)
    pop()

    // upper part
    ellipseMode (CENTER)
    fill ("#ffdfc4")
    arc (0, -30, 50, 30,- PI, 0)
     //top
    fill ("white")
    beginShape ()
    vertex (-20, 0)
    vertex (20, 0)
    vertex (25, -30)
    vertex (-25, -30)
    endShape ()
    arc (-12.5, -30, 25, 15, - PI , 0)
    arc (+12.5, -30, - 25, 15, - PI, 0)

    //локоть левый
    push()
    
    ellipseMode (CORNER)
    fill ("#ffdfc4")
    circle (-27, 18, 8)
    let hx = -35
    let hy = -10
    translate (hx, hy)
    rotate ( - PI/1.5)
    ellipse (hx, hy, 40, 6)
    
    pop()

    //локоть правый 
    push()
    scale (-1, 1)
    ellipseMode (CORNER)
    fill ("#ffdfc4")
    circle (-27, 18, 8)
    let hg = -35
    let hw = -10
    translate (hg, hw)
    rotate (-PI/1.5)
    ellipse (hx, hy, 40, 6)
    
    pop()

    //шея
    push ()
    ellipseMode (CENTER)
    fill ("#ffdfc4")
    ellipse (0, -40, 10, 30)
    circle (0, -60, 30)
    pop()

    //голова 
    
    push()
    if (this.mirroring){
      scale (-1,1)
    }
    fill ("#E0B184")
    circle (-5, -58, 5)
    ellipse (-3, -70, 30, 10)
    ellipse (13, -55, 10, 30)
    pop()
   


    


    


    
    

   




    
   
    
  
    // this.drawReferenceShapes()
    

    
    

    pop()
    
  }
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}



