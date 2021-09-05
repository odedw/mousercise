import * as p5 from "p5";
import { GameObject } from "./Objects/GameObject";
import { Factory } from "./Objects/Factory";

const objects: GameObject[] = [];
const sketch = (p: p5) => {
  const addObject = () => {
    objects.push(
      Factory.createRandomObject(p, (o: GameObject) =>
        objects.splice(
          objects.findIndex((go) => go.id === o.id),
          1
        )
      )
    );
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    if (objects.length === 0) {
      addObject();
    }
    p.background(200);
    objects.forEach((o) => {
      p.push();
      p.translate(o.x, o.y);
      o.render();
      p.pop();
    });
  };

  p.mouseClicked = (evt: object) => {
    objects.forEach((o) => o.mouseClicked(evt));
  };

  p.doubleClicked = (evt: object) => {
    objects.forEach((o) => o.doubleClicked(evt));
  };
};

new p5(sketch);
