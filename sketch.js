var wall,thickness;
var bullet,weight,speed;

function setup() {
  createCanvas(1400,400);
  

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83)

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor=color(255);

  wall=createSprite(1300,200,thickness,height/2);
  wall.shapeColor=color("white");

  bullet.velocityX=speed;

 
}

function draw() {
  background(0); 
   if(wall.x-bullet.x<wall.width/2+bullet.width/2){
   }

  if(bullet.isTouching(wall)){
  var deformation=0.5*weight*speed*speed/thickness*thickness*thickness
  if(deformation>3.68){
    bullet.shapeColor=color("green")
  }

  if(deformation<3.68 && deformation>12.43){
    bullet.shapeColor=color("red")
  }
  bullet.velocity=0
}
  drawSprites();

  
}