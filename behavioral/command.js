class BankAccount {
  constructor(amount) {
    this.amount = amount;
  }

  deposit(value) {
    this.amount += value;
  }

  withdraw(value) {
    if (this.amount - value < BankAccount.limitToWithdraw) return false;
    this.amount -= value;
    return true;
  }
}

BankAccount.limitToWithdraw = -500;

const Actions = Object.freeze({
  deposit: 0,
  withdraw: 1,
});

class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account;
    this.action = action;
    this.amount = amount;
    this.succeeded = false;
  }

  call() {
    switch (this.action) {
      case Actions.deposit:
        this.account.deposit(this.amount);
        this.succeeded = true;
        break;
      case Actions.withdraw:
        this.succeeded = this.account.withdraw(this.amount);
    }
  }

  undo() {
    if (this.succeeded) {
      switch (this.action) {
        case Actions.withdraw:
          this.account.deposit(this.amount);
          break;
        case Actions.deposit:
          this.account.withdraw(this.amount);
      }
    }
  }
}

const bankAccount = new BankAccount(100);
console.log(bankAccount.amount)
const deposit = new BankAccountCommand(bankAccount, Actions.withdraw, 100);
deposit.call();
console.log(bankAccount.amount)
deposit.undo();
console.log(bankAccount.amount)

