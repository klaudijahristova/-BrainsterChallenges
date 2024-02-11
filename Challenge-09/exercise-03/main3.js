let yourNumbers = [70, 7, 23];

// The smallest number
let smallest = yourNumbers[0];

for (let i = 0; i < yourNumbers.length; i++) {
  if (yourNumbers[i] < smallest) {
    smallest = yourNumbers[i];
  }
}

console.log(`Smallest - ${smallest}`);

// The largest Number
let largest = yourNumbers[0];
for (let i = 0; i < yourNumbers.length; i++) {
  if (yourNumbers[i] > largest) {
    largest = yourNumbers[i];
  }
}

console.log(`Largest - ${largest}`);

// Function to check if the number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const smallestIsPrime = isPrime(smallest);
const largestIsPrime = isPrime(largest);

console.log(`The smallest number ${smallest} is${smallestIsPrime ? '' : ' not'} prime. The largest number ${largest} is${largestIsPrime ? '' : ' not'} prime.`);