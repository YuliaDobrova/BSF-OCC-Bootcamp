class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    throw new Error("Method not implemented.");
  }
}

class Rectangle extends Shape {
  displayFormula() {
    console.log("this.width * this.height");
  }
  calculateArea() {
    const area = this.width * this.height;
    console.log("area: ", area);
  }
}

const shape1 = new Rectangle(7, 17);

shape1.displayFormula();
shape1.calculateArea();
