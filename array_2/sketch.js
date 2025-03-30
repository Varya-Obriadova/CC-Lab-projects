
let list_of_squares =[];
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

for (i = 1; i < 13; i++){
  //list_of_squares [i] = i*30
  list_of_squares.push (i*30)
}

function draw() {
  background(220);
  rectMode (CENTER)
  

  fill (255);
  for (i = 0; i < list_of_squares.length; i++ ){
    rect (list_of_squares [i] + random (-1, 1), 250, 10, 10)
  }
    




}