import p5 = require("p5");
import { GameObject } from "./GameObject";

export class DoubleClick extends GameObject {
  constructor(
    p: p5,
    x: number,
    y: number,
    onComplete: (o: GameObject) => void
  ) {
    super(p, x, y, 20, 20, onComplete);
  }
  render(): void {
    const p = this.p;
    p.fill("green");
    p.strokeWeight(0);
    p.square(-10, -10, 20);
  }

  doubleClicked(evt: any) {
    if (this.rect.contains(evt.x, evt.y)) {
      this.onComplete(this);
    }
  }
}
