function primeGen(maxVal) {
  const primes = [];
  for (let i = 2; i <= maxVal; i++) {
    let notPrime = 0;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        notPrime = 1;
      }
    }
    if (notPrime === 0) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(primeGen(10));

function cumulativeSum(list) {
  const sums = [];
  for (let i = 0; i < list.length; i++) {
    let forSum = 0;
    for (let j = 0; j <= i; j++) {
      forSum += list[j];
    }
    sums.push(forSum);
  }
  return sums;
}

console.log(cumulativeSum([1, 2, 3, 4]));

function maxPrimeSum(maxVal) {
  const primes = primeGen(maxVal / 2); // create array of prime numbers
  let MaxPrimeSum = 0;
  let MaxPrimeCount = 0;
  let currPrimeSum = 0;
  let primeCount = 0;
  for (let j = 0; j <= maxVal; j++) { // set beginning of consecutive primes
    currPrimeSum = primes[j];
    for (let k = j + 1; k <= maxVal; k++) { // test each length of consecutive terms
      currPrimeSum += primes[k];
      let Prime = 1;
      for (let l = 2; l <= currPrimeSum; l++) { // test currPrimeSum if prime
        if (currPrimeSum % l === 0 && l !== currPrimeSum) {
          Prime = 0;
        }
      }
      if (Prime === 1 && currPrimeSum < maxVal) { // if prime, test length of consecutive primes
        primeCount = k - j + 1;
        if (primeCount > MaxPrimeCount) { // if greater consecutive primes length, update Max values
          MaxPrimeSum = currPrimeSum;
          MaxPrimeCount = primeCount;
        }
      }
    }
  }
  return [MaxPrimeSum, MaxPrimeCount]; // return max consecutive prime sum
}

console.log(maxPrimeSum(1000));
