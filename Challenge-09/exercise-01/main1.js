// Use conditions to check if a given number is even. If so , print with
// console.log “ The Number (TheNumberYouWrote) is even ". If the
// number is not even, print " The Number (TheNumberYouWrote) is not
// even".
let yourNumber = Number(prompt('Enter a number'));

if (yourNumber % 2 === 0) {
    console.log(`The Number ${yourNumber} is even.`);
} else if (isNaN(yourNumber)) {
    console.log('Please enter a number.');
} else {
    console.log(`The Number ${yourNumber} is not even.`);
}
