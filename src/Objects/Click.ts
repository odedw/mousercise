import p5 from "p5";

import { GameObject } from "./GameObject";

export class Click extends GameObject {
  constructor(
    p: p5,
    x: number,
    y: number,
    onComplete: (o: GameObject) => void
  ) {
    super(p, x, y, "click", onComplete);
  }
  render(): void {
    super.render();
  }

  mouseClicked(evt: any) {
    if (this.contains(evt.x, evt.y)) {
      this.onComplete(this);
    }
  }
}
