
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if(keyDown("left"))
  {
    background("red");
  }
  if(keyDown("right"))
  {
    background("yellow");
  }
  drawSprites();

}




