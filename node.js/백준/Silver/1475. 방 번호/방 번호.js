const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = Array(10).fill(0);

let data = input[0];

while (data > 0) {
  num[data % 10]++;
  data = Math.floor(data / 10);
}
num[9] = Math.ceil((num[6] + num[9]) / 2);
num[6] = 0;
console.log(Math.max(...num));
