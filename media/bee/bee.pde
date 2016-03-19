Mover[] movers = new Mover[1];
 
void setup() {
  size(640,360);
  background(255);
  for (int i = 0; i < movers.length; i++) {
//Initialize each object in the array.
    movers[i] = new Mover();
  }
}
 
void draw() {
  background(255);
 
  for (int i = 0; i < movers.length; i++) {
//Calling functions on all the objects in the array
    movers[i].update();
    movers[i].checkEdges();
    movers[i].display();
  }
}
 
class Mover {
 
  PVector location;
  PVector velocity;
  PVector acceleration;
  float topspeed;
 
  Mover() {
    location = new PVector(random(width),random(height));
    velocity = new PVector(0,0);
    topspeed = 3;
  }
 
  void update() {
 
//Our algorithm for calculating acceleration:
 
//Find the vector pointing towards the mouse.
    PVector mouse = new PVector(mouseX-10,mouseY-10);
    PVector dir = PVector.sub(mouse,location);
//Normalize.
    dir.normalize();
//Scale.
    dir.mult(0.05);
//Set to acceleration.
    acceleration = dir;
 
//Motion 101! Velocity changes by acceleration. Location changes by velocity.
    velocity.add(acceleration);
    velocity.limit(topspeed);
    location.add(velocity);
  }
 
//Display the Mover
    void display() {
//Using atan2() to account for all possible directions
    float angle = atan2(velocity.y,velocity.x);
 
    stroke(0);
    fill(175);
    pushMatrix();
    rectMode(CENTER);
    translate(location.x,location.y);
//Rotate according to that angle.
    rotate(angle);
    rect(0,0,30,10);
    popMatrix();
  }
 
//What to do at the edges
  void checkEdges() {
 
    if (location.x > width) {
      location.x = 0;
    } else if (location.x < 0) {
      location.x = width;
    }
 
    if (location.y > height) {
      location.y = 0;
    }  else if (location.y < 0) {
      location.y = height;
    }
  }
}