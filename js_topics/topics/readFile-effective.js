const fs = require("fs");
const readline = require("readline");
const stream = require("stream");

const inStream = fs.createReadStream("./test.txt");
const outStream = new stream();

const rl = readline.createInterface(inStream, outStream);

let totalCount = 0;

rl.on("line", (line) => {
    // console.log(line);
    totalCount++;
});

rl.on("close", () => {
    console.log(totalCount);
});