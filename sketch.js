const Engine = Matter.Engine,
   World = Matter.World,
   Bodies = Matter.Bodies,
   Constraint = Matter.Constraint;

   var engine, world;
   var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
   var ball
   var rope

   function setup(){
createCanvas(1200,800)
engine = Engine.create();
world = engine.world;

ground = new Ground(600,700,1000,20);

box1 = new Box (550,100,100,100);
box2 = new Box (550,100,100,100);
box3 = new Box (550,100,100,100);
box4 = new Box (550,100,100,100);
box5 = new Box (550,100,100,100);
box6 = new Box (650,100,100,100);
box7 = new Box (650,100,100,100);
box8 = new Box (650,100,100,100);
box9 = new Box (650,100,100,100);
box10 = new Box (650,100,100,100);

ball = new Ball (100,100,50)

rope = new Rope (ball.body, {x:300, y:50})
   }

   function draw(){
       background(0)
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  ball.display();

  rope.display();
   }

   function mouseDragged(){
       Matter.Body.setPosition(ball.body , {x:mouseX , y:mouseY});
   }

   function mouseReleased(){
       Matter.Body.applyForce(ball.body, ball.body.position, {x: -90 , y:-52} )
   }