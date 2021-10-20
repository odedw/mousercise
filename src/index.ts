import * as p5 from "p5";
import { GameObject } from "./Objects/GameObject";
import { Factory } from "./Objects/Factory";

let score = 0;
const objects: GameObject[] = [];
let time = 0;
const sketch = (p: p5) => {
  const addObject = () => {
    objects.push(
      Factory.createRandomObject(p, (o: GameObject) => {
        score++;
        objects.splice(
          objects.findIndex((go) => go.id === o.id),
          1
        );
      })
    );
  };
  p.preload = () => {
    for (const name in GameObject.images) {
      GameObject.images[name] = p.loadImage(`resources/images/${name}.png`);
    }
  };
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textSize(20);
  };

  p.draw = () => {
    time += p.deltaTime;
    if (objects.length === 0) {
      addObject();
    }
    p.background(200);

    p.textSize(20).textFont("serif").fill(0).text(score, 20, 30);
    p.text(Math.floor(time / 1000), 20, 50);
    // p.textFont("Kranky").textAlign(p.LEFT);
    objects.forEach((o) => {
      p.push();
      // p.translate(o.x, o.y);
      o.render();
      // p.pop();
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
