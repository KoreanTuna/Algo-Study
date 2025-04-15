const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const caseCount = parseInt(input[0]);

let answer = "";

/// cent : 0.01$
/// Quarter : 0.25$
/// Dime : 0.10$
/// Nickel : 0.05$
/// Penny : 0.01$
for (let i = 1; i <= caseCount; i++) {
  /// 입력받은 센트를 달러로 변환
  let cent = parseInt(input[i]);

  /// Q / D / N / P 순으로 answer에 넣기
  /// ex) 2 4 0 1

  let quarter;
  let dime;
  let nickel;
  let penny;

  /// 가장 큰 쿼터 개수 구하고 dollor를 나누기
  quarter = Math.floor(cent / 25);
  cent = cent % 25;

  /// 가장 큰 다임 개수 구하고 dollor를 나누기
  dime = Math.floor(cent / 10);
  cent = cent % 10;

  /// 가장 큰 니켈 개수 구하고 dollor를 나누기
  nickel = Math.floor(cent / 5);

  cent = cent % 5;
  /// 나머지 센트는 페니
  penny = cent;

  /// answer에 넣기

  answer += `${quarter} ${dime} ${nickel} ${penny}\n`;
}

console.log(answer.trim());