class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  printInfo() {
    console.log(`name:${this.name} role:${this.role}`);
  }
}

class EmployeeGroup {
  constructor(name, composite = []) {
    this.name = name;
    this.composites = composite;
  }
  printInfo() {
    console.log(this.name);
    this.composites.forEach((employee) => {
      employee.printInfo();
    });
  }
}

const john = new Employee('John', 'developer');
const kate = new Employee('Kate', 'developer');
const natalia = new Employee('Natalia', 'tester');
const marian = new Employee('Marian', 'tester');
const petro = new Employee('Petro', 'vendor', 70);

const groupDevelopers = new EmployeeGroup('Developers', [john, kate]);
const groupTesters = new EmployeeGroup('Testers', [natalia, marian]);

const employees = new EmployeeGroup('All Employees', [
  groupDevelopers,
  groupTesters,
  petro,
]);


employees.printInfo();
