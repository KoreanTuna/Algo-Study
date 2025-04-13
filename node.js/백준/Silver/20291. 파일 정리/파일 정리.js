const fs = require("fs");
const { log } = require("console");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let dataCount = parseInt(input[0]);
let hash = new Map();

var inputData = input.slice(1, 1 + dataCount);

inputData.forEach((v, i) => {
  let extender = v.split(".")[1];

  hash.set(extender, (hash.get(extender) || 0) + 1);
});
const mapToArray = Array.from(hash);

mapToArray.sort();

let answer = "";

mapToArray.forEach((e, i) => {
  answer += `${e[0]} ${e[1]}\n`;
});

log(answer.trim());