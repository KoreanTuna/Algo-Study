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
  let n = parseInt(input[0]);
  let datas = input[1].split(" ");
  let target = parseInt(input[2]);

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (datas[i] == target) {
      count++;
    }
  }

  log(count);

  process.exit();
});