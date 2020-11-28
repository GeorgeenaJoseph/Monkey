
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,monkeyGroup,bananaGroup
var score,ground,survivalTime;
var bananaCount=0,gameState="play";

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,500)
  
  monkey=createSprite(120,400,20,20);
  monkey.addAnimation("running monkey",monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(200,400,1000,10);
  ground.velocityX=-2;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  
}


function draw() {

  background(250)
  if (gameState==="play")
    {
  if(keyDown("space"))
    {
      monkey.velocityY= -8
      
    }
  monkey.velocityY= monkey.velocityY+0.5;
  
  if(ground.x<0)
    {
      ground.x=ground.width/2
    }
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  textSize(20);
  
  survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time : " +survivalTime,220,30);
  text("Banana Count: " +bananaCount,220,70);
    
  
  if(monkey.isTouching(obstacleGroup))
    { 
      gameState="end"
      
    }
  
  drawSprites();
    }
  
  if(gameState==="end")
    {
      monkey.destroy();
      bananaGroup.destroyEach();
      obstacleGroup.destroyEach();
      textSize(30);
      text("GAME OVER",150,170);
    }
}

function food()
{
  var rand= Math.round(random(120,200))
  if(frameCount%80===0)
    {
      
      banana=createSprite(400,rand,20,20)
      
      banana.addImage(bananaImage);
      banana.scale=0.1;
      banana.rotation=320;
      banana.velocityX=-3
      banana.lifetime=170;
      
      bananaGroup.add(banana);
      
    }
}

function obstacles()
{
  var rand= Math.round(random(120,200))
  if(frameCount%300===0)
    {
      
      obstacle=createSprite(400,rand,20,20)
      obstacle.scale=0.08
      obstacle.addImage("obstacleImage",obstacleImage) ;
      
      obstacle.rotation=320;
      obstacle.velocityX=-3
      obstacle.lifetime=170;
      
      obstacleGroup.add(obstacle);
    }
}




