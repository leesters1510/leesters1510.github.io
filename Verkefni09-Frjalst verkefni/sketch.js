var x = 0; 	var y = 200;
var xSpeed = 16; var ySpeed = -15; 
var gravity = 1;
var R = 245; var G = 212; var B = 129
var Rs = 246; var Gs = 213; var Bs = 130

function setup() {
  frameRate(15)
  createCanvas(500,200);}
 

 
function draw() { 
  background(R, G, B); 
  fill(250); 
  noStroke()
  ellipse(x, y, 50, 50); 
  x = x + xSpeed;
  y = y +ySpeed;
  ySpeed = ySpeed+gravity;
  R = R - 6
  G = G - 5
  B = B - 1
 //teiknaStjörnu
  beginShape();
  fill(Rs, Gs, Bs);
  vertex(50-25,50);
  vertex(50-7, 50-7);
  vertex(50,50-25);
  vertex(50+7,50-7);
  vertex(50+25,50);
  vertex(50+7,50+7);
  vertex(50,50+25);
  vertex(50-7, 50+7);
  endShape();
  Rs = Rs - 0.1
  Gs = Gs - 1
  Bs = Bs - 3.4
}