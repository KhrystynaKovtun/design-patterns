class BankAccount {
  constructor(amount) {
    this.amount = amount;
    this.history = [new Momento(this.amount)];
    this.count = 0;
  }

  deposit(value) {
    this.amount += value;
    const snapshot = new Momento(this.amount);
    this.history.push(snapshot);
    this.count++;
    return snapshot;
  }

  restore(snapshot) {
    if (snapshot) {
      this.amount = snapshot.amount;
      this.history.push(snapshot);
      this.count = this.history.length - 1;
    }
  }

  undo() {
    if (this.count > 0) {
      const previousState = this.history[--this.count];
      this.amount = previousState.amount;
      return true;
    }

    return false;
  }

  redo() {
    if (this.count >= 0) {
      const nextState = this.history[++this.count];
      this.amount = nextState.amount;
      return true;
    }

    return false;
  }
}

class Momento {
  constructor(amount) {
    this.amount = amount;
  }
}

const bankAccount = new BankAccount(100);
console.log(bankAccount.amount);
bankAccount.deposit(50);
console.log(bankAccount.amount);
bankAccount.deposit(250);
console.log(bankAccount.amount);
bankAccount.deposit(150);
console.log(bankAccount.amount);
bankAccount.undo();
console.log(bankAccount.amount);
bankAccount.undo();
console.log(bankAccount.amount);
bankAccount.redo();
console.log(bankAccount.amount);
