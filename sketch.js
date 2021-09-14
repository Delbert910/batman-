
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=100
var engine,world;
var drops=[];
function preload(){
    
}

function setup(){
  createCanvas(400,600);
engine=Engine.create();
world=engine.world;
if (frameCount%150===0){
for(var i=0;i<maxDrops;i++){
  drops.push(new Drop(random(0,400), random(0,400)));
}
  
}
  
    
}

function draw(){
  Engine.update(engine);
 background("cyan")   ;


 for(var i=0;i<maxDrops;i++){

  drops[i].showdrop();
  drop[i].updatey();
 }
}   

