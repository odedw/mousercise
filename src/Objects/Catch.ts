import p5 = require("p5");
import { GameObject } from "./GameObject";

const SPEED = 2;
export class Catch extends GameObject {
  constructor(
    p: p5,
    x: number,
    y: number,
    onComplete: (o: GameObject) => void
  ) {
    super(p, x, y, "catch", onComplete);
  }
  render(): void {
    const p = this.p;
    if (this.contains(p.mouseX, p.mouseY)) {
      this.onComplete(this);
    }
    this.x += p.mouseX < this.x ? SPEED : -SPEED;
    if (this.x > p.width - this.w) {
      this.x = p.width - this.w;
    }
    if (this.x < this.w) {
      this.x = this.w;
    }
    this.y += p.mouseY < this.y ? SPEED : -SPEED;
    if (this.y > p.width - this.h) {
      this.y = p.width - this.h;
    }
    if (this.y < this.h) {
      this.y = this.h;
    }
    super.render();
  }
}
