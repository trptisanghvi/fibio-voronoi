
var number = 100;                              // number of shapes to draw
var size = 10;                                 // size of each shape
var stepSize = 1;                               // size of each step
var opacity = 125;                               // color opacity [0-255]
var animate = true;                            // control animation [true or false]
var time = 0;
var Fibonacci = [];

function setup() {
  createCanvas(windowHeight,windowWidth);                       // create a  canvas
  noStroke();                                   // disables drawing an outline
}

function draw() {
  background(255,230,118);                                // draw  background
  fill(0, opacity);                                         // set color to white
  translate(windowWidth/2, windowHeight/2)              // move center to middle of canvas
  if (animate) number = frameCount;             // controls animation

  var goldenAngle = PI * (3.0 - sqrt(5));       // https://en.wikipedia.org/wiki/Golden_angle
  rotate(time);
  for (var i = 0; i < number; i++) {
    translate(0, i * stepSize);                 // take step forward
    rotate(goldenAngle);                        // rotate by the golden angle

    /////////////////////
    // Draw the shape! //
    /////////////////////
    triangle(-size, 0, 0, size, size, 0);       // draw a triangle
    ellipse(0, 0, size);						// draw an ellipse (circle)
    rect(0, 0, size, size); 					// draw a rectangle
  }
  time += 0.001;    
  rotate(-PI / 6 * frameCount);
  
}