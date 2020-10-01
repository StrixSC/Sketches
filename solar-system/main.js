/// <reference path="../p5.global-mode.d.ts"/>

// Ratios (not to scale, made up for the sake of illustration).
// Sun         100
// mercury     3      == 100/33.3
// venus       5      == 100/20
// earth       12     == 100/8
// mars        7      == 100/14.28
// jupiter     50     == 100/2
// saturn      40     == 100/2.5
// neptune     25     == 100/4
// uranus      25     == 100/4

const SUN_SIZE = 200;

let stars = [];
let sun;
let earth;

let y = 3.50;
let x = 5.15;
let time = 0;

function setup() {
  createCanvas(1000,1000);
  background(0);

  for(let i = 0; i < 200; i++) {
    stars.push(new Star(random(0, height), random(0, width), i));
  }

  sun = new Sun(width/2, height/2);
  earth = new Earth();
}

function draw() {
  for(let i = 0; i < stars.length; i++) {
    stars[i].shine();
    stars[i].render();
  }

  earth.render();

  sun.shine();
  sun.render();

  stroke(255);
  noFill();

}
// function draw() {

//   let dx = (y - x);
//   let dy = (3*x);
//   x += dx;
//   y += dy;

//   time += 0.001;

//   stroke(255);
//   point(x, y);
// }

function superformula(phi,a,b,m,n1,n2,n3) {
  return Math.pow( Math.pow( Math.abs( Math.cos(m * phi / 4) / a ), n2 ) + Math.pow( Math.abs( Math.sin(m * phi / 4) / b ), n3 ), -1 / n1 );
}