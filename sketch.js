
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var char;
var chImage;

var bgImg;
var logo,logoImg;

var backSound;

var ground;

function preload()
{
	chImage = loadImage("images/carBlack.png");
	ch1Image = loadImage("images/carYellow.png");
	bgImg = loadImage("images/background.jpg");
	logoImg = loadImage("images/Logo.png");
}

function setup() {
	createCanvas(1375, 625);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	char = createSprite(675,300,200,150);
	char.addImage("main",chImage);
	char.scale = 0.5;

	
	logo = createSprite(1300,60,10,10);
	logo.addImage("style",logoImg);
	logo.scale = 0.1;
 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  text("Press Right Arrow To Shift The Car ",675,100);

  if(keyDown(RIGHT_ARROW)){
	  char.velocityX = 5; 
  }
  if(char.x > 1650){
	  char.x = -300;
	  char.addImage("main",ch1Image);
  }
  
  drawSprites();
 }



