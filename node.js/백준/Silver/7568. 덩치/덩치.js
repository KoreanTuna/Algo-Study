const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let count = parseInt(input[0]);

  let answer = [];

  const datas = input.slice(1).map((data) => data.split(" ").map(Number));

  for (let i = 0; i < count; i++) {
    let currentData = datas[i];
    let order = 1;

    for (let j = 0; j < count; j++) {
      if (i != j) {
        let comparingData = datas[j];
        if (
          comparingData[0] > currentData[0] &&
          comparingData[1] > currentData[1]
        ) {
          order++;
        }
      }
    }

    answer.push(order);
  }
  log(answer.join(" "));
});
