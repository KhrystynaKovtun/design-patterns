class Factory {
  createEmployee(type, grade, salary) {
    const employee = new EmployeeFactory(type, grade, salary); 

    employee.say = function () {
      console.log(`${this.grade[0].toUpperCase() + this.grade.slice(1)} ${this.type}: salary ${this.salary}/year`);
    };

    return employee;
  };
}

class EmployeeFactory {
  constructor(type, grade, salary) {
    this.type = type;
    this.grade = grade;
    this.salary = salary;
  }
}

const factory = new Factory();
const employee = factory.createEmployee('software engineer', 'senior', 120000);
employee.say();
