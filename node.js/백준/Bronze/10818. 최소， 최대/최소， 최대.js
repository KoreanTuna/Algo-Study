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

  let datas = input[1].split(" ");

  let min = 1000000;
  let max = -1000000;

  for (let i = 0; i < count; i++) {
    if (datas[i] < min) {
      min = parseInt(datas[i]);
    }

    if (datas[i] > max) {
      max = parseInt(datas[i]);
    }
  }

  log(`${min} ${max}`);

  process.exit();
});
