const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var box


function setup() {
  createCanvas(3000,800);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,600,1200,20);

  ball = new Ball(200,200,80,80);

  rope = new Rope(ball.body, {x: 500, y:50});


  box1 = new Box(900,100,70,70);
  box2 = new Box(900,100,70,70);
  box3 = new Box(900,100,70,70);
  box4 = new Box(900,100,70,70);
  box5 = new Box(900,100,70,70);
  box6 = new Box(900,100,70,70);
  box7 = new Box(800,100,70,70);
  box8 = new Box(800,100,70,70);
  box9 = new Box(800,100,70,70);
  box10 = new Box(800,100,70,70);
  box11= new Box(800,100,70,70);
  box12= new Box(800,100,70,70);
  box13= new Box(700,100,70,70);
  box14= new Box(700,100,70,70);
  box15= new Box(700,100,70,70);
  box16= new Box(700,100,70,70);
  box17= new Box(700,100,70,70);
  box18= new Box(700,100,70,70);
  box19= new Box(700,100,70,70);
  box20 = new Box(700,100,70,70);
}

function mouseDragged(){

Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY});


}

function draw() {
  background("white");  
  Engine.update(myEngine);
  ground.show();

  ball.show();

  rope.show();

  box1.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();
  box6.show();
  box7.show();
  box8.show();
  box9.show();
  box10.show();
  box11.show();
  box12.show();
  box13.show();
  box14.show();
  box15.show();
  box16.show();
  box17.show();
  box18.show();
  box19.show();
  box20.show();

  }

  
