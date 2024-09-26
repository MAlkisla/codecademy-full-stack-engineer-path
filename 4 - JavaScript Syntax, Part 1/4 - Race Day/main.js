// 1) Race numbers are assigned randomly.
let raceNumber = Math.floor(Math.random() * 1000);
console.log(`Assigned Race Number: ${raceNumber}`);

// 2) Variable to indicate if a runner registered early.
let registeredEarly = true; // Change this value to test different conditions.

// 3) Variable for runner's age.
let runnerAge = 20; // Change this value to test different conditions.

// 4) Control flow to check if the runner is an adult AND registered early.
if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}

// 5) Control flow to determine race time for adults.
if (runnerAge > 18) {
    if (registeredEarly) {
        console.log(`You are an adult and registered early. Your race starts at 9:30 am. Your race number is ${raceNumber}.`);
    } else if (!registeredEarly) {
        console.log(`You are an adult and registered late. Your race starts at 11:00 am. Your race number is ${raceNumber}.`);
    }
} 
// 6) Control flow for youth registrants.
else if (runnerAge < 18) {
    console.log(`You are a youth runner. Your race starts at 12:30 pm. Your race number is ${raceNumber}.`);
} 
// 7) Handle exactly 18 years old runners.
else {
    console.log("Please see the registration desk.");
}
