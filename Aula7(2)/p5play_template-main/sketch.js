var box
function setup() {
  createCanvas(400, 400);
  box = createSprite(200,200,40,50);
}

function draw() {
  background("black");
  drawSprites();
  if(keyDown("up")){
    box.velocityY = -5
  }
  if(keyDown("right")){
    box.velocityX = 5
  }
  if(keyDown("left")){
    box.velocityX = -5
  }
  if(keyDown("down")){
    box.velocityY = 5
  }
}