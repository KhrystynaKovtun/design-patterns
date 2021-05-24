class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  printInfo() {
    console.log(`name:${this.name} role:${this.role}`);
  }
}

class DecoratedEmployee  {
  constructor(employee, salary) {
  this.user = user;
  this.name = employee.name;
  this.salary = salary;
  }

  printInfo() {
      console.log(`Decorated User: ${this.name} with a year's salary ${this.salary}`)
  };
}