function weirdOrNot(n) {
  if (n % 2 !== 0) {
    return 'Weird';
  } else if (n >= 2 && n <= 5) {
    return 'Not Weird';
  } else if (n >= 6 && n <= 20) {
    return 'Weird';
  } else {
    return 'Not Weird';
  }
}

if (require.main === module) {
  const n = Number(process.argv[2]);
  if (!Number.isNaN(n)) {
    console.log(weirdOrNot(n));
  }
}

module.exports = { weirdOrNot };
