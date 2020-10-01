/// <reference path="../p5.global-mode.d.ts"/>

let grid;
let stg;
let card;

function setup() {
  createCanvas(400, 400);
  background(220);
  grid = new Grid(10, 10);
  card = new Card(0,0, grid.w, grid.h);
  stg = new SnapToGrid(grid.rects, grid.w, grid.h);
}

function draw() {
  background(200);
  grid.render();
  card.render();
}

function mouseDragged() {
  card.onDrag(mouseX, mouseY);
}

function mouseReleased() {
  let tile = stg.getTile(mouseX, mouseY);
  card.onRelease(tile.x, tile.y);
}


function mousePressed() {
}

class Card {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w * 2;
    this.h = h * 3;
  }
  
  onDrag(x, y) {
    this.x = floor(x) - this.w / 2;
    this.y = floor(y) - this.h / 2;
  }
  
  onRelease(x, y) {
    this.x = x;
    this.y = y;
  }
  
  render() {
    fill(0, 100);
    stroke(1);
    rect(this.x, this.y, this.w, this.h);
  }
  
}

class SnapToGrid {
  constructor(tiles, w, h) {
    this.tiles = tiles;
    this.tileW = w;
    this.tileH = h;
  }

  // Get an X and a Y, return the tile on which the item is supposed to go.
  getTile(x, y) {
    for (let i = 0; i < this.tiles.length; i++) {
      if (
        this.tiles[i].x <= x && this.tiles[i].x + this.tileW > x &&
        this.tiles[i].y <= y && this.tiles[i].y + this.tileH > y
      ) return this.tiles[i];
    }
  }
}


class Grid {
  constructor(colCount, rowCount) {
    this.colCount = colCount;
    this.rowCount = rowCount;
    this.w = width / this.colCount;
    this.h = height / this.rowCount;

    this.rects = [];


    for (let i = 0; i < this.colCount; i++)
      for (let j = 0; j < this.rowCount; j++)
        this.rects.push(createVector(i * this.w, j * this.h));

  }

  render() {
    noFill();
    for (let i = 0; i < this.rects.length; i++)
      rect(this.rects[i].x, this.rects[i].y, this.w, this.h);
  }

}