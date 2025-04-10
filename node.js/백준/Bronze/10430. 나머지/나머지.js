const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = line.split(" ").map((el) => parseInt(el)); // 1 2 3 4

  if (input.length != 3) {
    log("Wrong Input");
    rl.close;
  } else {
    let a = input[0];
    let b = input[1];
    let c = input[2];
    /// (A+B)%C
    log(`${(a + b) % c}`);
    ///((A%C) + (B%C)) %C
    log(`${((a % c) + (b % c)) % c}`);
    /// (A*B)%C
    log(`${(a * b) % c}`);
    /// ((A%C) * (B%C)) % C
    log(`${((a % c) * (b % c)) % c}`);
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
