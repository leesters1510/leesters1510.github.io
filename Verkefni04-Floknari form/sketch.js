function setup() {
  createCanvas(400, 400)
  noStroke();
}

function draw() {
  background(220);
  beginShape();
  fill(45, 166, 181);
  vertex(215-80,270);
  vertex(200-25, 250-30);
  vertex(200,300-80);
  vertex(200+25,250-30);
  vertex(185+80,270);
  vertex(200+40,300+30);
  vertex(200,250+80);
  vertex(200-40, 300+30);
  endShape();
}