import p5 = require("p5");
import { GameObject } from "./GameObject";

const SPEED = 1;
const MIN_RANGE = 10;
const MAX_RANGE = 70;

export class Hold extends GameObject {
  max: number;
  min: number;
  cur = 0;
  mousedown = false;
  constructor(
    p: p5,
    x: number,
    y: number,
    onComplete: (o: GameObject) => void
  ) {
    super(p, x, y, "hold", onComplete);
    this.min = p.random(50, 70);
    this.max = p.random(this.min + MIN_RANGE, this.min + MAX_RANGE);
    // p.mouseReleased(() => {

    // });
  }
  render(): void {
    const p = this.p;

    if (!p.mouseIsPressed) {
      if (this.mousedown) {
        if (this.cur >= this.min && this.cur <= this.max) {
          this.onComplete(this);
          p.mouseReleased = null;
        }
        this.mousedown = false;
      }
      this.cur = 0;
    } else if (this.contains(p.mouseX, p.mouseY)) {
      this.mousedown = true;
      this.cur += SPEED;
    }

    p.strokeWeight(0).fill(150).circle(this.x, this.y, this.max);
    p.strokeWeight(0).fill(200).circle(this.x, this.y, this.min);
    super.render();
    if (this.cur > 0) {
      p.strokeWeight(2).fill(0, 0, 0, 0).circle(this.x, this.y, this.cur);
    }
  }
}
