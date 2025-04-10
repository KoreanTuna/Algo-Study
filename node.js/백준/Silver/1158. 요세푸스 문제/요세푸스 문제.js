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
  let n = parseInt(input[0].split(" ")[0]);
  let k = parseInt(input[0].split(" ")[1]);

  let datas = [];
  let answer = [];

  for (let i = 1; i <= n; i++) {
    datas.push(i);
  }
  let count = 1;

  while (datas.length) {
    const shiftData = datas.shift();

    if (count % k == 0) {
      answer.push(shiftData);
    } else {
      datas.push(shiftData);
    }
    count += 1;
  }

  log(`<${answer.join(", ")}>`);

  process.exit();
});