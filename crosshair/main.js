/// <reference path="../p5.global-mode.d.ts"/>

let width = 800;
let height = 800;
let SPEED = 2;
let crosshair;
let index = 0; 

let player;
let targetCount = 100;
let targetSize = 20;
let targetDecreaseSpeed = 0.10;
let targets = [];
let currentTargetIndex = 0;

const SHOT_REGISTER_DISTANCE = 10;
const DEFAULT_JAM_TIME = 500;

function setup() {
  createCanvas(width, height);
  noCursor();
  crosshair = new Crosshair();
  player = new Player();
  for(let i = 0; i < targetCount; i++) {
    targets.push(new Target());
  }
}

function draw() {
  background(50);
  textSize(20);
  stroke(0, 0, 0, 0.2);
  text(`Points: ${player.points}`, 10, 20);
  text(`Miss: ${player.missCount}`, 10, 40);
  text(`Defeats: ${player.defeats}`, width-150, 20);
  let currentTargetsCount = player.addMilestone();
  if(!targets[currentTargetIndex].update()) {
    currentTargetIndex = floor(random(0, targetCount));
    player.miss();
  }
  targets[currentTargetIndex].show();
  crosshair.update();
  crosshair.show();
}
  
function keyPressed() {
  if (keyCode === LEFT_ARROW || key === 'a') {
    crosshair.changeDir(-SPEED, 0);
  } else if (keyCode === RIGHT_ARROW || key === 'd') {
    crosshair.changeDir(SPEED, 0);
  } else if (keyCode === UP_ARROW || key === 'w') {
    crosshair.changeDir(0, -SPEED);
  } else if (keyCode === DOWN_ARROW || key === 's') {
    crosshair.changeDir(0, SPEED);
  } else if (key === ' ') {
    if(crosshair.shoot(targets[currentTargetIndex], player)) {
      currentTargetIndex = floor(random(0, targetCount));
    }
  }
}

function mousePressed() {
  if(crosshair.shoot(targets[currentTargetIndex], player)) {
    currentTargetIndex = floor(random(0, targetCount));
  }
}

class Crosshair {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.xspeed = 0;
    this.yspeed = 0;
    this.cwidth = 2;
  }

  changeDir(x, y) {
    if(x === 0) {
      this.yspeed = y;
    } else if (y === 0) {
      this.xspeed = x;
    }
  }

  update() {
    this.x = constrain(mouseX, this.cwidth, width - this.cwidth);
    this.y = constrain(mouseY, this.cwidth, height - this.cwidth);
  }

  show() {
    stroke(255, 0, 0);
    strokeWeight(this.cwidth);
    line(0, this.y, width, this.y);
    line(this.x, 0, this.x, height);
  }

  shoot(target_, player_) {
    if(dist(target_.x, target_.y, this.x, this.y) < SHOT_REGISTER_DISTANCE)
    {
      target_.destroy();
      player_.hit();
      return true;
    } else {
      player_.miss();
      this.jam();
      return false;
    }
  }
  
  jam() {
  }
} 

class Target {
  constructor(x, y) {
    this.x = floor(random(targetSize, width - targetSize));
    this.y = floor(random(targetSize, height-targetSize));
    this.timer = 0;
  }

  update() {
    if(this.timer >= targetSize) {
      return false;
    }
    this.timer+= targetDecreaseSpeed;
    return true;
  }

  destroy() {
    this.timer = targetSize;
  }

  show() {
    fill(255);
    if(this.timer < targetSize) {
      strokeWeight(targetSize/4);
      stroke(255, 0, 0);
      ellipse(this.x, this.y, targetSize - this.timer, targetSize - this.timer);
    }
  }
}

class Player {
  constructor() {
    this.points = 0;
    this.defeats = 0;
    this.missCount = 0;
  }

  lose() {
    this.points = 0;
    this.missCount = 0;
    this.defeats++;
  }

  hit() {
    this.points++;
  }

  miss() {
    if(this.missCount >= 3) {
      this.lose();
    } else {
      this.missCount++;
    }
  }

  addMilestone() {
    switch(this.points) {
      case 1: return 1;
      case 10: return 5;
    }
  } 
}