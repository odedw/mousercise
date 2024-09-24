import p5 = require("p5");
import { GameObject } from "./GameObject";

export class TypeChar extends GameObject {
  private char: string;

  constructor(
    p: p5,
    x: number,
    y: number,
    onComplete: (o: GameObject) => void
  ) {
    super(p, x, y, "typechar", onComplete);
    this.char = this.randomChar();
  }

  render(): void {
    const p = this.p;
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(32);
    p.fill(0);
    p.text("Type", this.x, this.y - 15);
    p.textSize(42);
    p.text(this.char, this.x, this.y + 25);
  }

  keyPressed(keyCode: number) {
    console.log(keyCode);
    console.log(this.char.charCodeAt(0));
    if (keyCode === this.char.charCodeAt(0)) {
      this.onComplete(this);
    }
  }

  private randomChar(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }
}
