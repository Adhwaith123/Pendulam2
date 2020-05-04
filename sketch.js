const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var  chain;





function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,200,50,50);
    log1 = new Log(200,50,200, PI/2);

    chain = new Chain(box1.body,{x:200, y:50});
}

function draw(){
    background("lightblue");
    Engine.update(engine);
 
    box1.display();
    log1.display();
    chain.display();    
}

function mouseDragged(){

    Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
   //chain.fly();
  
}

function keyPressed(){
    if(keyCode === 32){
       
    }
}