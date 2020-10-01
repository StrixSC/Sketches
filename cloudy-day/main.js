/// <reference path="../p5.global-mode.d.ts"/>
let hero;
let clouds = [];

function setup() {
  createCanvas(700, 700);
  hero = new Hero(width / 2, height / 2);
  for (let i = 0; i < 15; i++) {
    clouds.push(new Cloud(random(0, width), random(0, 200)));
  }
}

function draw() {
  background('skyblue');
  hero.render();
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].render();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    for (let i = 0; i < clouds.length; i++) {
      clouds[i].playerMoveUpdate(createVector(-10, 0));
    }
  } else if (keyIsDown(LEFT_ARROW)) {
    for (let i = 0; i < clouds.length; i++) {
      clouds[i].playerMoveUpdate(createVector(10, 0));
    }
  }
}

class Hero {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 100;
  }


  render() {
    noStroke();
    fill('red');
    ellipse(this.x, this.y, this.size, this.size);
  }
}


class Cloud {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.sizeX = random(35, 55);
    this.sizeY = map(this.sizeX, 35, 55, 25, 35);
    this.color = random(235, 255);
  }

  playerMoveUpdate(velVect) {
    this.pos.add(velVect);
  }
  
  windMoveUpdate(velVect) {
   this.pos.add(velVect); 
  }

  render() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.sizeX, this.sizeY);
    ellipse(this.pos.x - 30, this.pos.y - 5, this.sizeX, this.sizeY);
    ellipse(this.pos.x - 25, this.pos.y + 10, this.sizeX, this.sizeY);
    ellipse(this.pos.x - 50, this.pos.y + 5, this.sizeX, this.sizeY);
  }
}