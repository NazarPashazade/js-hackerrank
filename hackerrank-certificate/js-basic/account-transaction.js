class Account {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    // plus
    credit(amount) {
        this.balance += amount;
    }

    //minus
    debit(amount) {
        if (this.balance > amount) {
            this.balance -= amount;
            return true;
        }

        return false;
    }
}

const accountObj = new Account(10000);
accountObj.debit(1000);

accountObj.credit(1000);
console.log(accountObj.getBalance());