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
  rect: Rectangle;
  onComplete: (o: GameObject) => void;
  id: number;
  constructor(
    p: p5,
    x: number,
    y: number,
    w: number,
    h: number,
    onComplete: (o: GameObject) => void
  ) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.rect = new Rectangle(x - w / 2, y - h / 2, w, h);
    this.onComplete = onComplete;
    this.id = new Date().valueOf();
  }

  abstract render(): void;

  mouseClicked(evt: any): void {}
  doubleClicked(evt: any): void {}
}
