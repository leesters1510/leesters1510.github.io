var eyeSize = 75; 
  var faceWidth = 150; 
  var faceHeight = 150; 
  var mouthWidth = 40;
  var mouthHeight = 50
  var x = 150; 
  var y = 150;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(131, 191, 134)
  stroke(0)
 ellipse(200, 200, faceWidth, faceHeight);
  fill(250, 250, 250)
  ellipse(160, 160, eyeSize)
  ellipse(240, 160, eyeSize)
  fill(1, 1, 1)
   ellipse(150, 170, eyeSize - 25)
  ellipse(235, 170, eyeSize - 25)
  fill (164, 205, 166)
  noStroke ()
  ellipse (200, 240, mouthHeight, mouthWidth)
  rect(210, 240, 10, 27, 20);
}
 function mousePressed() {
    eyeSize    = (40, 100); 
   mouthWidth = (60)
   mouthHeight = (70)
}