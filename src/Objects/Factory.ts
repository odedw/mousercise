import * as p5 from "p5";
import { Click } from "./Click";
import { DoubleClick } from "./DoubleClick";
import { GameObject } from "./GameObject";

export class Factory {
  // static classes = [Click];
  static classes = [Click, DoubleClick];
  static createRandomObject(
    p: p5,
    onComplete: (o: GameObject) => void
  ): GameObject {
    const random = this.classes[p.int(p.random(0, this.classes.length))];
    return new random(
      p,
      p.random(0, p.width),
      p.random(0, p.height),
      onComplete
    ) as GameObject;
  }
}
