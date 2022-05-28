const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

function c1() {
    console.log("an event occurred!");
}

eventEmitter.on("testEvent", c1); // Register for eventOne

eventEmitter.emit("testEvent");