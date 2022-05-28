// let arr1 = [1];
// let arr2 = [2, 3, 4, 5, 6];

// const [n1, _, , ...params] = [...arr1, ...arr2];

// console.log(params);

const f1 = () => console.log("F1");
const f2 = () => console.log("F2");

const compose = (...funcs) => (
    (initialF = funcs.reduce((acc, f) => f(acc))), initialF
);

compose(f1, f2);