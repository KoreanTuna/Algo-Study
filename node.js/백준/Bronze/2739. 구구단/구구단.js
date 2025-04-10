const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  for (let i = 1; i <= 9; i++) {
    log(`${line} * ${i} = ${line * i}`);
  }

  rl.close();
});

rl.on("close", () => {
  process.exit();
});
