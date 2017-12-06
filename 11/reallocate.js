module.exports = (bank) => {
  const highestBlock = Math.max(...bank);
  const highestIndex = bank.indexOf(highestBlock);
  bank[highestIndex] = 0;

  const resultBank = [...bank];
  for (let i = 1; i <= highestBlock; i++) {
    resultBank[(highestIndex + i) % resultBank.length]++;
  }
  return resultBank;
}
