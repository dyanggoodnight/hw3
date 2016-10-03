function setup() {
  createCanvas(820, 820);
  background(255);
}

function draw() {
  stroke(0);
  for (var i = 50; i <= 770; i = i + 5) {
    var startX = i;
    var startY = 50;
    var endX = i;
    var endY = i;
    line(startX, startY, endX, endY);
  }
}
