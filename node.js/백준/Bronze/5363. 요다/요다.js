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
  let sentenceCount = parseInt(input[0]);

  for (let i = 1; i <= sentenceCount; i++) {
    let wordList = input[i].split(" ");

    for (let j = 0; j < 2; j++) {
      let removedWord = wordList.shift();
      wordList.push(removedWord);
    }

    log(wordList.join(" "));
  }

  process.exit();
});