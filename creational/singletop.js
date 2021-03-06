class Singleton {
  constructor() {
    if(this.constructor.instance) {
      return this.constructor.instance
    }

    this.constructor.instance = this;
    return this;
  }
}


console.log(new Singleton() === new Singleton()); // returns true