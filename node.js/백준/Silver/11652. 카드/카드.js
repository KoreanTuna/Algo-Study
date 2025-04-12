const fs = require("fs");
const { log } = require("console");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let dataCount = parseInt(input[0]);
let hash = new Map();

var input_arr = input.slice(1, 1 + dataCount);
input_arr.forEach((v, i) => {
  hash.set(v, (hash.get(v) || 0) + 1);
});

var hash2 = new Map();

hash.forEach((v, i) => {
  if (hash2.has(v)) {
    if (hash2.get(v) > BigInt(i)) {
      hash2.set(v, BigInt(i));
    }
  } else {
    hash2.set(v, BigInt(i));
  }
});

var ans_arr = [];
hash2.forEach((v, i) => {
  ans_arr.push([i, v]);
});

ans_arr = ans_arr.sort((a, b) => b[0] - a[0]);

console.log(ans_arr[0][1].toString());
