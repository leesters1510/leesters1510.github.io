function setup() {
  createCanvas(400, 400);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(2);
  strokeWeight (2)
}

function draw(){
  for (var j=0.5 ; j < 22 ; j = j + 1){
  fill(random(180, 345),100,100);
  for(var i = 0; i < 22 ; i = i + 1) {
    ellipse(j*20, 10 + i*20, 15, 15);
  }
  }
}