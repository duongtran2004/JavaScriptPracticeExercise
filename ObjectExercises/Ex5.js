class Cylinder {
  constructor(radius, height) {
    this.height = height;
    this.radius = radius;
  }

  calculateVolume() {
    return Math.PI * this.radius * this.radius * this.height;
  }
}

let cylinder = new Cylinder(7, 2);
let volume = cylinder.calculateVolume();

console.log(volume);
