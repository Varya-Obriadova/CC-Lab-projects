let rooms = 6// how many rooms are in the gallery
let gallery_rooms = [] //where the class objects are stored, which is each room in gallery with its attributes
let gallery_room_number = 0

let shagn;
let shagv;

let sounds  = []

// //buttons
// let buttonTakePhoto;
// let buttonHistory;

let titleFont;


function preload(){
  for (let i = 0; i < rooms; i++){
    let galleryR = loadImage ("assets/galleryR" + i + ".jpg")
    let dressN = loadImage ("assets/dressN" + i +".png")

    gallery_rooms.push (new Gallery (galleryR, dressN, i))
  } 

  shagv = loadSound ("assets/step_forward.mp3")
  shagv.setVolume (0.4)

  shagn = loadSound ("assets/step_back.mp3")
  shagn.setVolume (0.4)

  sounds.push (shagv, shagn)

  titleFont = loadFont ("assets/Fraunces.ttf")

  swanLake = loadSound ("assets/Swan_Lake.mp3")
  swanLake.setVolume (0.4)
}



function setup() {

  swanLake.play ()

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  
  
  // //buttons
  // buttonTakePhoto = createButton("📷");
  // buttonTakePhoto.style('font-size', '80px');
  // buttonTakePhoto.mousePressed(tryOn);

  // buttonHistory =  createButton ("History")
  // buttonHistory.style('font-size', '28px');
  // buttonHistory.mousePressed(knowMore);
 
}

function draw() {
  background(220);

  push ()
  translate (width/2, height/2)

  
  gallery_rooms[gallery_room_number].display()
  gallery_rooms[gallery_room_number].update()
  
  pop()

  //buttons



  fill('deeppink');
  textFont(titleFont);
  textSize(60);
  // drawingContext.shadowOffsetX = 0
  // drawingContext.shadowOffsetY = 0
  // drawingContext.shadowBlur = 20
  // drawingContext.shadowColor = "white"


  if (mouseX > 0  && mouseY > windowHeight/8 && mouseY < windowHeight/8 + windowHeight/7  ){
    noStroke ()
    rect (0,  windowHeight/8, windowWidth/2, windowHeight/7)

    fill ("white")
    textSize(30);
    
    text('Know more', windowWidth / 14, windowHeight/8 + windowHeight/8);
    text('Try it on!', windowWidth / 14 + windowWidth / 14 + windowWidth / 14 + windowWidth / 14, windowHeight/8 + windowHeight/8);


    // drawingContext.shadowBlur = 50
    // drawingContext.shadowColor = "white"
    textSize(60);
    stroke ("deeppink")
    text('Tintamarresque', 0, windowHeight/8);

    

  // buttonTakePhoto.position ((windowWidth/7)/4, windowHeight/7)
  // buttonHistory.position((windowWidth/7)/4, windowHeight/7 + windowHeight/7)

 

}
}

class Gallery {
  constructor (galleryR, dressN, roomNumber){
  this.galleryRoomImage = galleryR
  this.dressExhibit = dressN
  this.galleryRoomNumber = roomNumber
  this.steps = 0
  this.picture_scale = 1
}

display(){
  scale (this.picture_scale)
  image (this.galleryRoomImage, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight)
  
  // let offsetX = map (mouseX, 0, windowWidth, 10, -10)
  // let offsetY = map (mouseY, 0, canvasHeight, 10, -10)
  drawingContext.shadowOffsetX = 0
  drawingContext.shadowOffsetY = 0
  drawingContext.shadowBlur = 40
  drawingContext.shadowColor = "white"
  image (this.dressExhibit, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight)


  
  
}

update (){
  if (keyIsPressed == true && key == "ArrowUp"){

    this.picture_scale += 0.005

    if (this.steps <= 200) {
      this.steps += 1
    }
    
    if (shagn.isPlaying()==false && shagv.isPlaying() == false){
      random (sounds).play()
    }
    

  }else if (keyIsPressed == true && key == "ArrowDown" ){

    if (this.picture_scale > 1){
        this.picture_scale -= 0.005
      if (shagn.isPlaying()==false && shagv.isPlaying() == false){
        random(sounds).play()
      }
    }
      
    if (this.steps > 0) {
      this.steps -= 1
    }

    if(this.steps == 0 && gallery_room_number > 0){
      this.steps -= 1
    }
    console.log (this.steps)
  }

  if (this.steps > 200){
    if (gallery_room_number < rooms - 1){
    this.steps = 199
    gallery_room_number += 1
  } else if (gallery_room_number == rooms - 1){
    gallery_room_number = 0

    for (let i=0; i < rooms; i++){
      gallery_rooms[i].picture_scale = 1
      gallery_rooms[i].steps = 0
    }
  }
}


  if (this.steps < 0){
    this.steps = 1
    gallery_room_number -= 1
  }

}
}

function tryOn(){
  window.location.href = "dressN" + gallery_room_number + "/try-on/index.html";
}

function knowMore (){
  window.location.href = "dressN" + gallery_room_number + "/know-more/index.html";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {

  if (gallery_room_number > 1 && gallery_room_number < rooms - 1){

      // Check if mouse is over the "Know more" button area
    if (
      mouseX > 0 &&
      mouseX < windowWidth / 2 &&
      mouseY > windowHeight / 8 &&
      mouseY < windowHeight / 8 + windowHeight / 7
    ) {
      // Check if it's in the left area = "Know more"
      if (mouseX < windowWidth / 2 / 2) {
        knowMore();
      }
      // Else it's in the right half = "Try it on!"
      else {
        tryOn();

      }
    }

  }
  
}