const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var engine,world,bodies,body,box1,box2,box3,box4,box5,box6,ground,ball,rope;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(550,320,50,50);
  box2=new Box(600,320,50,50);
  box3=new Box(650,320,50,50);
  box4=new Box(575,270,50,50);
  box5=new Box(625,270,50,50);
  box6=new Box(600,220,50,50);
 ground=new Ground(400,350,800,10);
 ball=new Ball(300,100,20);
 rope=new Shooter(ball.body,{x:300,y:80});
}

function draw() {
  Engine.update(engine);
  background(0,10,105);  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ball.display();
  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode==32){
    rope.attach(ball.body);
  }
}