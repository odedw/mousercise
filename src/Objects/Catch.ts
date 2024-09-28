import p5 from "p5";

import { GameObject } from "./GameObject";

const SPEED = 0.6;
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

    this.x += p.mouseX < this.x ? SPEED : -SPEED;
    if (this.x > p.width - this.w) {
      this.x = p.width - this.w;
    }
    if (this.x < this.w) {
      this.x = this.w;
    }
    this.y += p.mouseY < this.y ? SPEED : -SPEED;
    if (this.y > p.height - this.h) {
      this.y = p.height - this.h;
    }
    if (this.y < this.h) {
      this.y = this.h;
    }
    super.render();
  }

  mouseClicked(evt: any) {
    if (this.contains(evt.x, evt.y)) {
      this.onComplete(this);
    }
  }
}
