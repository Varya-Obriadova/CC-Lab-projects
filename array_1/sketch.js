let greetings1 = "Halo"
let greetings2 = "Здравствуйте"
let greetings = ["Halo","Здравствуйте", "Bonjour", "Привет", "HI"]

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(220);
  noStroke()
  fill ("yellow")
  circle (40, 50, 10)

  // text(greetings1, width/2, height/2)
  // text (greetings2, width/2, height/2 + 12 )
  // text (greetings[3], width/2, height/2 + 24 )
  let randomIndex = floor (random (0, greetings.length))

  for (i = 0; i < greetings.length; i++){

    if (i==0){
      fill ("red")
    }else {
      fill (0)
    }

    

    let y = height/2 + i*12
    text (greetings[i], width/2, y)

  }

}