import * as p5 from "p5";

export const SIZE = 50;
export abstract class GameObject {
  static images: Record<string, p5.Image | null> = {
    click: null,
    doubleclick: null,
    drag: null,
    hold: null,
  };
  p: p5;
  x: number;
  y: number;
  onComplete: (o: GameObject) => void;
  id: number;
  image: p5.Image;
  h = SIZE;
  w = SIZE;
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
