import p5 from "p5";

import { GameObject } from "./GameObject";

const targetSize = 10;
export class Drag extends GameObject {
  target: { x: number; y: number };
  mouseWasPressed = false;
  isDragging: boolean = false;
  constructor(
    p: p5,
    x: number,
    y: number,
    onComplete: (o: GameObject) => void
  ) {
    super(p, x, y, "drag", onComplete);
    this.target = {
      x: p.random(targetSize, this.p.width - targetSize),
      y: p.random(targetSize, this.p.height - targetSize),
    };
  }
  render(): void {
    const p = this.p;
    if (!p.mouseIsPressed) {
      this.mouseWasPressed = false;
      this.isDragging = false;
    }
    if (
      p.mouseIsPressed &&
      !this.mouseWasPressed &&
      this.contains(p.mouseX, p.mouseY)
    ) {
      this.isDragging = true;
    }
    if (p.mouseIsPressed && this.isDragging) {
      this.x = p.mouseX;
      this.y = p.mouseY;
    }
    super.render();
    if (this.contains(this.target.x, this.target.y)) {
      this.onComplete(this);
    }
    if (this.isDragging) {
      p.circle(
        this.target.x,
        this.target.y,
        targetSize + p.sin(p.frameCount / 10)
      );
      p.strokeWeight(2).line(this.x, this.y, this.target.x, this.target.y);
    }
  }
}
