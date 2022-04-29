class BankAccount {
    accountNumber;
    owner;
    transactions;

    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = []



    }

    balance() {
        let bal = 0;
        for (let i = 0; this.transactions.length; i++) {
            bal += this.transactions[i].amount;
        }
    };

    chargeMoney(payee, amount) {
        let Balance = this.balance();

        if (amount > Balance) {
            return
        } else {
            let charge = new Transactions(-1 * amount, payee);
            this.transactions.push(charge);
        }


    }

    depositMoney(amount) {
        if (amout > 0) {
            let deposit = new Transactions(amount, 'Deposit');
            this.transactions.push(deposit);
        }
    }
}


class Transactions {
    amount;
    payee;
    date;

    constructor(amount, payee) {
        this.amount = amount
        this.payee = payee
        this.date = new Date();
    }
}

