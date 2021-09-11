import * as p5 from "p5";

export class Rectangle {
  x: number;
  y: number;
  w: number;
  h: number;
  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  contains(x: number, y: number): boolean {
    return (
      x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h
    );
  }
}
export abstract class GameObject {
  p: p5;
  x: number;
  y: number;
  onComplete: (o: GameObject) => void;
  id: number;
  name: string;
  h: number;
  w: any;
  constructor(
    p: p5,
    x: number,
    y: number,
    name: string,
    onComplete: (o: GameObject) => void
  ) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.name = name;
    this.h = 30;
    this.onComplete = onComplete;
    this.id = new Date().valueOf();
    this.setWidth();
  }
  setWidth() {
    this.w = this.p.textSize(this.h).textWidth(this.name);
  }

  render() {
    const p = this.p;
    p.textSize(this.h);
    // p.square(-this.w / 2, -this.h / 2, this.w, this.h);

    // p.fill(0).circle(0, 0, 5);
    p.text("Click", -this.w / 2, -this.h / 2, this.w, this.h);
  }

  contains(x: number, y: number): boolean {
    return (
      x > this.x - this.w / 2 &&
      x < this.x + this.w / 2 &&
      y > this.y - this.h / 2 &&
      y < this.y + this.h / 2
    );
  }
  mouseClicked(evt: any): void {}
  doubleClicked(evt: any): void {}
}
