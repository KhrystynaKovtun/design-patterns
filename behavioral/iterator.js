class Grades {
  constructor(math, literature) {
    this.math = math;
    this.literature = literature;
  }

  [Symbol.iterator] () {
    let count = 0;
    const self = this;
    return {
      next() {
        return {
          done: count > 1,
          value: self[count++ === 0 ? 'math' : 'literature']
        }
      }
    }
  }
}

const grades = new Grades(10, 6);
for (let grade of grades) {
  console.log(grade);
}