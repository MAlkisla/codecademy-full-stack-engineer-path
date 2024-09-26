// Function to get sleep hours based on the day
const getSleepHours = (day) => {
  switch (day.toLowerCase()) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
    case "wednesday":
      return 6;
    case "thursday":
      return 7;
    case "friday":
      return 8;
    case "saturday":
      return 9;
    case "sunday":
      return 8;
    default:
      return "Invalid day";
  }
};

// Function to get actual sleep hours for the week
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

// Function to get ideal sleep hours for the week
const getIdealSleepHours = (idealHours) => {
  return idealHours * 7; // Multiplying by 7 to get the total ideal hours for the week
};

// Function to calculate sleep debt and provide feedback
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8); // Assuming 8 hours per day is ideal

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got more sleep than needed. You slept ${
        actualSleepHours - idealSleepHours
      } hours more.`
    );
  } else {
    console.log(
      `You should get some rest. You slept ${
        idealSleepHours - actualSleepHours
      } hours less.`
    );
  }
};

// Start the program
calculateSleepDebt();
