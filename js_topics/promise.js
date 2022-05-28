const p1 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, "one");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "two");
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, "third");
});

const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "fourth");
});

Promise.race([p1, p2, p3, p4]).then(console.log).catch(console.log);