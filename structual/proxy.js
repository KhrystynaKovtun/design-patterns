class Car {
  constructor(driver) {
    this.driver = driver;
  }

  drive () {
    console.log(`${this.driver.name} is driving the car`)
  }
}

class Driver {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}


class ProxyCar {
  constructor(car) {
    this.car = car;
  }

  drive () {
    if(this.car.driver.age > 16) {
      this.car.drive();
    } else {
      console.log(`${driver.name} is too young to drive!`)
    }
  }
}

const driver = new Driver('Igor', 12);
const driverCar = new ProxyCar(new Car(driver));
driverCar.drive();