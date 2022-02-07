
// Setup code goes here
function setup() {
  createCanvas(800, 800);
  // background(2);
 }


 var size = 10;
 var clr = 0;
// Draw code goes here
function draw() {
  fill(133, 132, 103);
  stroke(0);
  strokeWeight(6);

  // SHIRT
  beginShape();
  vertex(160, 610);
  vertex(316, 480);
  vertex(440, 610);
  endShape(CLOSE);

  // NECK
  fill(237, 181, 135);
  beginShape();
  vertex(214, 370);
  vertex(362, 350);
  vertex(358, 540);
  vertex(280, 584);
  vertex(228, 584);
  endShape(CLOSE);

  // HAIR
  fill(51, 36, 24);
  beginShape();
  vertex(344, 330);
  vertex(394, 330);
  vertex(440, 150);
  vertex(350, 90);
  vertex(150, 90);
  vertex(90, 150);
  vertex(130, 198);
  endShape(CLOSE);
  hairDetails();

  // EAR
  fill(237, 181, 135);
  circle(374, 345, 80);

  // FACE
  beginShape();
  vertex(116, 160);
  vertex(122, 420);
  vertex(154, 504);
  vertex(250, 504);
  vertex(340, 440);
  vertex(350, 160);
  endShape(CLOSE);

  // DRAW FACIAL FEATURES
  drawFace();

}

function drawFace(){
  // iris
  fill(51, 36, 24);
  circle(150, 310, 30);
  circle(256, 310, 30);

  // cutoff circle
  stroke(237, 181, 135);
  line(130, 296, 170, 293);
  line(292, 297, 236, 293);

  // left eyelid
  stroke(0);
  line(128, 302, 170, 298);
  line(170, 298, 174, 318);

  // right eyelid
  line(290, 302, 236, 298);
  line(236, 298, 228, 318);

  // eyebrows
  line(118, 250, 170, 246);
  line(230, 246, 310, 250);

  // NOSE
  fill(237, 181, 135);
  arc(196, 375, 38, 38, HALF_PI, PI + HALF_PI);

  // MOUTH
  line(180, 426, 224, 426);
}

function hairDetails() {
  push();
  strokeWeight(5);
  stroke(0,0,0, 100);
  line(200, 160, 160, 120);
  line(160, 120, 100, 160);

  line(270, 160, 210, 90);
  line(310, 160, 350, 90);
  line(350, 160, 440, 150);

  strokeWeight(4);
  line(350, 182, 416, 250);
  line(348, 210, 410, 272);
  line(346, 236, 404, 294);

  pop();
}




