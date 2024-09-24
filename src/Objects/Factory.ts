import * as p5 from "p5";
import { Click } from "./Click";
import { DoubleClick } from "./DoubleClick";
import { Drag } from "./Drag";
import { Hold } from "./Hold";
import { Catch } from "./Catch";
import { TypeChar } from "./TypeChar";

import { GameObject, SIZE } from "./GameObject";

export class Factory {
  static classes = [Click, DoubleClick, Drag, Catch, Hold, TypeChar];

  static createRandomObject(
    p: p5,
    onComplete: (o: GameObject) => void
  ): GameObject {
    const random = this.classes[p.int(p.random(0, this.classes.length))];
    return new random(
      p,
      p.random(SIZE, p.width - SIZE),
      p.random(SIZE, p.height - SIZE),
      onComplete
    ) as GameObject;
  }
}
