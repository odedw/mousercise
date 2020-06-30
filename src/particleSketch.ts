// class Particle {
//   acceleration: p5.Vector;
//   velocity: p5.Vector;
//   position: p5.Vector;
//   lifespan: number;
//   constructor(position: p5.Vector, p: p5) {
//     this.acceleration = p.createVector(0, 0.05);
//     this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 0));
//     this.position = position.copy();
//     this.lifespan = 180;
//   }
//   run(p: p5) {
//     this.update();
//     this.display(p);
//   }

//   update() {
//     this.velocity.add(this.acceleration);
//     this.position.add(this.velocity);
//     this.lifespan--;
//   }

//   display(p: p5) {
//     p.stroke(200, this.lifespan);
//     p.strokeWeight(2);
//     p.fill(127, this.lifespan);
//     p.ellipse(this.position.x, this.position.y, 12, 12);
//   }

//   isDead() {
//     return this.lifespan < 0;
//   }
// }

// class ParticleSystem {
//   particles: Particle[];
//   constructor() {
//     this.particles = [];
//   }

//   addParticle(position: p5.Vector, p: p5) {
//     this.particles.push(new Particle(position, p));
//   }

//   run(p: p5) {
//     this.particles.forEach((particle, i) => {
//       particle.run(p);
//       if (particle.isDead()) {
//         this.particles.splice(i, 1);
//       }
//     });
//   }
// }

// let system = new ParticleSystem();
// const sketch = (p: p5) => {
//   p.setup = () => {
//     p.createCanvas(700, 700);
//     p.frameRate(60);
//   };

//   p.draw = () => {
//     p.background(51);

//     if (p.mouseIsPressed) {
//       system.addParticle(p.createVector(p.mouseX, p.mouseY), p);
//     }
//     system.run(p);
//   };
// };

// new p5(sketch);
