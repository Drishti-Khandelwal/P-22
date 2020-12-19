var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	




	engine = Engine.create();
	world = engine.world;
	//CREATING PACKAGE AND HELICOPTER
	helicopter = Bodies.rectangle(width/2, 150, 250, 150 , {isStatic:true} );
	packageBody = Bodies.circle(width/2 , 150 , 50 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	World.add(world,helicopter);
	walll= Bodies.rectangle(width/2-110, 580, 20, 200 , {isStatic:true} );
	wallr=Bodies.rectangle(width/2+110, 580, 20, 200 , {isStatic:true} );
	wallb=Bodies.rectangle(width/2, 670, 200, 20 , {isStatic:true} );
	World.add(world, wallr);
	World.add(world, walll);
	World.add(world, wallb);
	//Create a Ground

	ground = Bodies.rectangle(width/2, 690, width, 20 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	
	background(0);
	rectMode(CENTER);
	rect(ground.position.x, ground.position.y, width, 20)
	rect(walll.position.x, walll.position.y, 20, 200)
	rect(wallr.position.x, wallr.position.y, 20, 200)
	rect(wallb.position.x, wallb.position.y, 200, 20)
	
	
	ellipseMode(RADIUS)
	image(packageIMG, packageBody.position.x, packageBody.position.y, 70,70);
	imageMode(CENTER);
	image(helicopterIMG, helicopter.position.x, helicopter.position.y, 250,150);
	
	
  
  



 
}
//event based function
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}



