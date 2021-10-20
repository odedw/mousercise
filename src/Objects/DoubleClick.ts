import p5 = require("p5");
import { GameObject } from "./GameObject";

export class DoubleClick extends GameObject {
  constructor(
    p: p5,
    x: number,
    y: number,
    onComplete: (o: GameObject) => void
  ) {
    super(p, x, y, "doubleclick", onComplete);
  }
  render(): void {
    super.render();
  }

  doubleClicked(evt: any) {
    if (this.contains(evt.x, evt.y)) {
      this.onComplete(this);
    }
  }
}
