function setup() {
  createCanvas(820, 820);
  background(255);
}

function draw() {
  stroke(0);
  for (var i = 0; i <= 400; i = i + 10) {
    var startX = 400 - i;
    var startY = i;
    var endX = 400 + i;
    var endY = i;
    line(startX, startY, endX, endY);
  }
  for (var i = 0; i <= 400; i = i + 10) {
    var startXX = i;
    var startYY = 400 + i;
    var endXX = 800 - i;
    var endYY = 400 + i;
    line(startXX, startYY, endXX, endYY);
  }
}
