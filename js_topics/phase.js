// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 5000);

// console.log("3");
//
//
//
//
//
//
//
// setTimeout(() => console.log("timeout-1"), 0);

// setImmediate(() => console.log("immediate-1"));

//
//
//
//
//
//
//

// const fs = require("fs");

// fs.readFile(__filename, () => {
//     setTimeout(() => console.log("Timeout"), 0);

//     setImmediate(() => console.log("Immediate"));
// });

//
//
//
//
//
//
//

//    ┌───────────────────────────┐
// ┌─>│           poll            │ ---> prints 1, then 2
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │           check           │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │       close callbacks     │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │           timers          │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │     pending callbacks     │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// └──┤        idle, prepare      │
//    └───────────────────────────┘

// const fs = require("fs");

// fs.readFile("__filePath", () => {
//     console.log("pool");
//     setTimeout(() => console.log("setTimeout"));
//     setImmediate(() => console.log("setImmediate"));
//     process.nextTick(() => console.log("nextTick"));
// });

// const callback = () => console.log("SetTimeout");

// const urgentCallback = () => console.log("microTask");

// queueMicrotask(urgentCallback);

// setTimeout(callback, 0);