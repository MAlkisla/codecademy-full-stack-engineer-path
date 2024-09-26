// Step 1: Create a variable named input with any phrase.
const input = "turpentine and turtles";

// Step 2: Create an array of vowels.
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Step 3: Create an empty array named resultArray.
let resultArray = [];

// Step 4: Iterate through each letter of the input variable text.
for (let i = 0; i < input.length; i++) {
  // Logging iterator numbered position.
  // console.log('i is ' + i);

  // Step 5: Nested loop to check against the vowels array.
  for (let j = 0; j < vowels.length; j++) {
    // Logging iterator number positions inside inner loop.
    // console.log('j is ' + j);

    // Step 6: Check if the input letter is a vowel.
    if (input[i] === vowels[j]) {
      // Step 7: Push vowel to resultArray.
      resultArray.push(input[i]);

      // Step 8: Log letter matches.
       console.log('Matched vowel: ' + input[i]);
    }
  }

  // Step 9: Double the letter 'e'.
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  // Step 10: Double the letter 'u'.
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
}

// Step 11: Log the resultArray.
console.log(resultArray);

// Step 12: Capitalize and join the resultArray into a string.
const resultString = resultArray.join('').toUpperCase();

// Step 13: Log the whale talk.
console.log(resultString);  // This should print 'UUEEIEEAUUEE' for the given input.
