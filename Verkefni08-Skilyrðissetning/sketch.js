function setup() {
  createCanvas(400,400);
  frameRate(5);
}

function draw() {
  fill(199, 216, 218);

  if(mouseX > 200){ 
    if(mouseY > 200){
      background(205, 102, 102);
      for(var i = 1; i< 60;i = i+1) {
        fill(134, 36, 36)
        ellipse(random(width), random(height), random(30), random(50));
      }
      }
       else{
         background(122, 172, 125);
        for(var j = 1; j< 50;j = j+1){
          fill(42, 87, 44);
          square(random(width), random(height), random(50));
        }
        }
                  }
  if(mouseX < 200){ 
    if(mouseY > 200){
      background(125, 173, 218);
      for(var m = 1; m< 50;m = m+1) {
        fill(25, 81, 138)
        circle(random(width), random(height), random(50));
      }
      }
       else{
         background(250, 238, 137);
        for(var r = 1; r< 50;r = r+1){
          fill(232, 214, 57);
          square(random(width), random(height), random(50), random (60));
        }
        }
      }
 
  }
