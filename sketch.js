var fixedRect, movingRect;
var block1, block2, block3, block4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  block1 = createSprite(100,100,50,50);
  block2 = createSprite(200,100,50,50);
  block3 = createSprite(300,100,50,50);
  block4 = createSprite(400,100,50,50);
  block1.shapeColor = "green";
  block2.shapeColor = "green";
  block3.shapeColor = "green";
  block4.shapeColor = "green";

  movingRect.velocityY = -5;
  block3.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(movingRect,block3);
  drawSprites();

}
