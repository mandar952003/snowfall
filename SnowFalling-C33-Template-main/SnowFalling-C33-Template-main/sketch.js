const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

snow = new Snow(400,200,60,60)
 
}

function draw() {
  background(255,255,255);  
  snow.display()
  drawSprites();
 
}