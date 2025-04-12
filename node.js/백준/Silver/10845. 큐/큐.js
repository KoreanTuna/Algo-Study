const fs = require("fs");
const { log } = require("console");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let count = parseInt(input[0]);
let queue = [];
let answer = "";
for (let i = 1; i <= count; i++) {
  const datas = input[i].split(" ");

  switch (datas[0]) {
    case "push":
      queue.push(datas[1]);
      break;
    case "pop":
      if (queue.length == 0) {
        answer += -1 + "\n";
      } else {
        let shift = queue.shift();
        answer += shift + "\n";
      }
      break;
    case "size":
      answer += queue.length + "\n";
      break;

    case "empty":
      answer += queue.length == 0 ? 1 + "\n" : 0 + "\n";
      break;
    case "front":
      if (queue.length == 0) {
        answer += -1 + "\n";
      } else {
        answer += queue[0] + "\n";
      }
      break;
    case "back":
      if (queue.length == 0) {
        answer += -1 + "\n";
      } else {
        answer += queue[queue.length - 1] + "\n";
      }
      break;
    default:
      break;
  }
}
log(answer);