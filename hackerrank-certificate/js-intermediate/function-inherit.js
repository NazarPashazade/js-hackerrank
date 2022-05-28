function Activity(amount) {
    this.amount = amount;

    this.setAmount = function(newAmount) {
        if (newAmount <= 0) {
            return false;
        } else {
            this.amount = newAmount;
            return true;
        }
    };

    this.getAmount = function() {
        return this.amount;
    };
}

function Payment(amount, receiver) {
    this.receiver = receiver;

    Payment.prototype = new Activity(amount);

    //  Activity.call(this, amount)

    this.setReciver = function(newReciver) {
        this.receiver = newReciver;
    };

    this.getReciver = function() {
        return this.receiver;
    };
}

function Refund(amount, sender) {
    this.sender = sender;

    Refund.prototype = new Activity(amount);

    this.setSender = function(newSender) {
        this.sender = newSender;
    };

    this.getSender = function() {
        return this.sender;
    };
}

Refund.prototype = new Activity(10);

const refund = new Refund("test");

console.log(refund.amount);