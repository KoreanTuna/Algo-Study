const { log } = require("console");
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let count = parseInt(input[0]);

let data = input[1].split(" ").map((item) => parseInt(item));

data.sort((a, b) => a - b);

let result = 0;
for (let i = 0; i < count; i++) {
  result += data[i] * (count - i);
}

console.log(result);
