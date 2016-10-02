function setup() {
  createCanvas(820, 820);
  background(255);
}
function draw() {
  stroke(0);
  for (var i=15; i<=750; i=i+15) {
    var startX = 410;
    var startY = 410;
    var endX = i+15;
    var endY = i+15;
    ellipse(startX, startY, endX, endY);
    noFill();
  }
}
