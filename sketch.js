
var ground, ball;
var log1, log2, log3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(350, 680, 900, 7);

	log1 = new Log(550, 623, 20, 100);
	log2 = new Log(770, 623, 20, 100);
	log3 = new Log(660, 663, 200, 20);

	ball = new Ball(100, 400, 20);
}


function draw() {
	rectMode(CENTER);

	Engine.update(engine);

	background(0);

	ground.display();

	log1.display();
	log2.display();
	log3.display();

	ball.display();


	drawSprites();

}



function keyPressed(){

if(keyCode === UP_ARROW){

	Body.applyForce(ball.body,ball.body.position,{x:65,y:-65});

}



}




