const fs = require("fs");
const { log } = require("console");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let groupCount = parseInt(input[0].split(" ")[0]);
let quiestionCount = parseInt(input[0].split(" ")[1]);
let hash = new Map();

let answer = "";
let index = 1;
for (let i = 0; i < groupCount; i++) {
  let groupName = input[index++];
  let memberCount = parseInt(input[index++]);
  hash.set(groupName, []);
  for (let j = 0; j < memberCount; j++) {
    hash.get(groupName).push(input[index++]);
  }
}

for (let i = 0; i < quiestionCount; i++) {
  let name = input[index++];
  let questionType = parseInt(input[index++]);
  if (questionType == 0) {
    for (let [key, value] of hash) {
      if (key.includes(name)) {
        let dataList = hash.get(key).sort();
        dataList.map((data) => {
          answer += data + "\n";
        });
      }
    }
  } else if (questionType == 1) {
    for (let [key, value] of hash) {
      if (value.includes(name)) {
        answer += key + "\n";
        break;
      }
    }
  }
}

log(answer.trim());