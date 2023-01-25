const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var engine,world;

var boardImg,gunImg;
var gun;
var bullets = [];

function preload(){
  boardImg = loadImage("./assets/board.png");
  gunImg = loadImage("./assets/gun.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  
  //console.log(bullet);

  var gun_options = {
    isStatic:true
  }
  gun = Bodies.rectangle(windowWidth/6,200,120,30,gun_options);
  World.add(world,gun);
}

function draw(){
  background(rgb(255,159,0));

  Engine.update(engine);

  //console.log(mouseY);

  push();
  imageMode(CENTER);
  image(gunImg,gun.position.x,gun.position.y,120,30);
  pop();
  
  for(var i=0;i<bullets.length;i++){
    if(bullets[i]){
      bullets[i].display();
    }
  }
}

function keyPressed(){
  if(keyCode === 32){
    var bullet = new Bullet(gun.position.x,gun.position.y);
    bullets.push(bullet);
    console.log("hello");
  }
}

function keyReleased(){
  if(keyCode === 32){
    bullets[bullets.length-1].shoot();
  }
}