const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;
var RedPc, board;

function preload() {
  board = loadImage("images/background.png");
}
function setup() {
  createCanvas(600, 725);
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 0

RedPc = new RedPiece(20,570,40,40);

}
function draw() {
  background("pink");
Engine.update(engine);
image(board, 0, 0, 600, 600)

RedPc.display();



drawSprites();

}
