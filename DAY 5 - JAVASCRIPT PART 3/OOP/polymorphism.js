// Polymorphism

class Animal {
  makeSound() {
    return "The animal makes a noise.";
  }
}

class Cat extends Animal {
  makeSound() {
    return super.makeSound() + "I heard a cat meow.";
  }
}

const cat = new Cat();
console.log(cat.makeSound());
