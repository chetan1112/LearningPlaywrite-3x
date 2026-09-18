const fs = require('fs');

function isLeap(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function main() {
  const input = fs.readFileSync(0, 'utf8').trim();
  const year = parseInt(input, 10);
  if (isNaN(year)) return;
  console.log(isLeap(year) ? 'YES' : 'NO');
}

main();
