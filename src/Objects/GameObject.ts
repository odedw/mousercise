import * as p5 from "p5";
import { Factory } from "./Factory";

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
  static images: Record<string, p5.Image | null> = {
    click: null,
    doubleclick: null,
    drag: null,
  };
  p: p5;
  x: number;
  y: number;
  onComplete: (o: GameObject) => void;
  id: number;
  image: p5.Image;
  h = 50;
  w = 50;
  constructor(
    p: p5,
    x: number,
    y: number,
    image: string,
    onComplete: (o: GameObject) => void
  ) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.onComplete = onComplete;
    this.id = new Date().valueOf();
    this.image = GameObject.images[image]!;
  }

  render() {
    const p = this.p;
    // p.fill("yellow").rect(
    //   this.x - this.w / 2,
    //   this.y - this.h / 2,
    //   this.w,
    //   this.h
    // );
    p.image(
      this.image,
      this.x - this.w / 2,
      this.y - this.h / 2,
      this.w,
      this.h
    );
    // p.text("Click", -this.w / 2, -this.h / 2, this.w, this.h);
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
