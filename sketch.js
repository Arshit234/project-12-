var path;
var pathImage;
var jake;
var jakeImage;
var boundry1;
var boundry3;


function preload(){
    //pre-load images
    pathImage=loadImage("path.png")
    jakeImage=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
  }
  
  function setup(){
    createCanvas(400,400);
    //create sprites here
    path=createSprite(200,200)
    path.addImage(pathImage)
    path.velocityY=4;
    path.scale=1.2;

    jake=createSprite(200,350,10,40)
    jake.addAnimation("running",jakeImage)
    jake.scale=0.6;

    //creating invisible boundries
    boundry1=createSprite(25,400,51,800)
    boundry1.visible=false;

   boundry3=createSprite(390,400,55,800)
  boundry3.visible=false;

  }
  
  
  function draw() {
    background(0);
  
  if (path.y > 400) {
      path.y = height/2
  }
  
  jake.x=World.mouseX;

  jake.collide(boundry1);
  jake.collide(boundry3);
    drawSprites()
  }
  