function Subject() {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
    },

    unsubscribe: function(fnToRemove) {
        this.observers = this.observers.filter((fn) => fn != fnToRemove);
    },

    fire: function() {
        this.observers.forEach((fn) => fn.call());
    }
};

const subject = new Subject();

const Observer1 = () => console.log("Observer 1 Firing...");
const Observer2 = () => console.log("Observer 2 Firing...");
const Observer3 = () => console.log("Observer 3 Firing...");

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.subscribe(Observer3);
subject.unsubscribe(Observer1);

subject.fire();