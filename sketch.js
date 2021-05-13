var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

var side1Sprite,side2Sprite,side3Sprite,ground,waste

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	fill(255,255,0);
	
	
	

	//create object for Ground class
	ground1 = new Ground(600,height,1200,20);


	//create object for waste class
	ball = new Waste(100,400,10);
	Engine.run(engine);

	//create object for side1 class
	Dustbinside1= new side1(650,650,10,80);
  
	//create object for side2 class
	Dustbinside2 = new side1(800,650,10,80)

	//create oblect for side3 class
	Dustbinside3 = new side1(725,690,150,10)
}

function keyPressed() {
	if (keyCode === UP_ARROW)
 
  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
 
 }


function draw() {
  
  background(0);
   
  ball.show();
  ground1.show();
  Dustbinside1.show();
  Dustbinside2.show();
  Dustbinside3.show();
}



