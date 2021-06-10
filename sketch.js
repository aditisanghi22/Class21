
var fixedRect, movingRect;
var gameObject1, gameObject2;
var bus;

function setup() {
  createCanvas(1200,800);
 
 bus = createSprite(20,20,50,60);

  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
 movingRect.velocityX = -1
  fixedRect = createSprite(100, 400, 50, 50);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  
  if(isTouching(movingRect,bus)){
    movingRect.shapeColor = "blue";
    bus.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 

bounceOff(movingRect,fixedRect); 
  drawSprites();
}



