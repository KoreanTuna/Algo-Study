const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [requiredStringCount, brandCount] = input[0].split(" ").map(Number);

let minPckPrice = 1001;
let minEachPrice = 1001;
for (let i = 1; i <= brandCount; i++) {
  let [package, each] = input[i].split(" ").map(Number);
  minPckPrice = Math.min(minPckPrice, package);
  minEachPrice = Math.min(minEachPrice, each);
}

let pkgCount = Math.floor(requiredStringCount / 6);
let remainedEachCount = requiredStringCount - 6 * pkgCount;

let cost = 0;

if (minPckPrice / 6 < minEachPrice) {
  cost =
    pkgCount * minPckPrice +
    (remainedEachCount * minEachPrice < minPckPrice
      ? remainedEachCount * minEachPrice
      : minPckPrice);
} else {
  cost = requiredStringCount * minEachPrice;
}

console.log(cost);