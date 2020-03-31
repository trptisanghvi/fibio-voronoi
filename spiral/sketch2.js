var Fibonacci = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(10);
}

function draw(){
  background(255,164,168);
  stroke(255);
  noFill();
  strokeWeight(3);
  translate(windowWidth/2, windowHeight/2);
  rotate(-PI / 6 * frameCount);
  for( var i = 0; i < 20; i ++){
    var a = i <= 1 ? 1 : Fibonacci[i-1] + Fibonacci[i-2];
    Fibonacci.push(a);
    arc(0,0,a * 2,a * 2,0,PI / 2);
    rotate(PI / 2);
    translate(-Fibonacci[i-1],0); 
  } 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}