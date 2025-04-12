const fs = require("fs");
const { log } = require("console");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let question = input[0].split(" ");
let dataCount = parseInt(question[0]);
let mapCount = parseInt(question[1]);

let dataMap = new Map();

let answer = "";

for (let i = 1; i <= dataCount; i++) {
  let data = input[i].split(" ");
  let email = data[0];
  let pwd = data[1];

  dataMap.set(email, pwd);
}

for (let i = dataCount + 1; i <= dataCount + mapCount; i++) {
  answer += dataMap.get(input[i]) + "\n";
}
log(answer.trim());