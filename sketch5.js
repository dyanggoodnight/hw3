function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  stroke(0);
  for (var i = 0; i <= 400; i = i + 100) {
    for (var r = 10; r <= 50; r = r + 10) {
      rectMode(CENTER);
      rect(i + 100, 300, r, r);
      noFill();
    }
  }
}
