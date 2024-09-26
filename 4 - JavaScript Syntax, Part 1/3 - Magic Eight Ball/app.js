// 1. Define a variable called userName set to an empty string.
let userName = '';

// 2. Ternary expression to greet the user based on the value of userName.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// 3. Create a variable named userQuestion.
let userQuestion = "Will I become a successful programmer?";

// 4. Log the user's question to the console.
console.log(`The user asked: ${userQuestion}`);

// 5. Generate a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);

// 6. Create a variable named eightBall and set it to an empty string.
let eightBall = '';

// 7. Control flow to assign a response to eightBall based on randomNumber.
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}

// 8. Log the Magic Eight Ball's answer to the console.
console.log(`The Magic Eight Ball answered: ${eightBall}`);
