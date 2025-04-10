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
  let orderCount = parseInt(input[0]);
  let datas = [];

  for (let i = 1; i <= orderCount; i++) {
    let orderList = input[i].split(" ");
    let order = orderList[0];
    let data = orderList[1];

    switch (order) {
      case "push":
        datas.push(data);
        break;
      case "pop":
        if (datas.length == 0) {
          log(-1);
        } else {
          let popData = datas.pop();
          log(popData);
        }
        break;
      case "size":
        log(datas.length);
        break;
      case "empty":
        if (datas.length == 0) {
          log(1);
        } else {
          log(0);
        }
        break;
      case "top":
        if (datas.length == 0) {
          log(-1);
        } else {
          log(datas[datas.length - 1]);
        }
        break;
      default:
        break;
    }
  }

  process.exit();
});
