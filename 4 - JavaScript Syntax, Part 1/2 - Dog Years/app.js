// 1) Create a variable named myAge, and set it equal to your age as a number.
let myAge = 30; // Set your age here.

// Comment explaining the line: This variable stores the age of the user in human years.

// 2) Create a variable named earlyYears and save the value 2 to it.
let earlyYears = 2;

// Comment explaining the line: We're setting up a variable to account for the early years of a dog, which is the first two years of their life.

// 3) Multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
earlyYears *= 10.5;

// 4) Subtract 2 from myAge and store the result in a variable called laterYears.
let laterYears = myAge - 2;

// Comment explaining the line: We're subtracting 2 from the total age to account for the first two years of a dog's life.

// 5) Multiply the laterYears variable by 4 to calculate dog years for later years.
laterYears *= 4;

// Comment explaining the line: We're calculating the number of dog years for the later years of the dog's life by multiplying the remaining years by 4.

// 6) Print earlyYears and laterYears to the console to check the values.
console.log(earlyYears); // This will show the dog years for the first two years.
console.log(laterYears); // This will show the dog years for the remaining years.

// 7) Add earlyYears and laterYears together and store in myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;

// Comment explaining the line: We're adding the dog years from the early years to the dog years from the later years to get the total age in dog years.

// 8) Write your name as a string, call its built-in method .toLowerCase(), and store in myName.
let myName = "Meriç".toLowerCase();

// Comment explaining the line: We're converting the name to lowercase using the toLowerCase() method.

// 9) Display your name and age in dog years using string interpolation.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

// Comment explaining the line: This line outputs a formatted string that displays the user's name, age in human years, and age in dog years.
