let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
  ];
  
  // 1. Remove the last string of the array
  secretMessage.pop();
  
  // 2. Add the words 'to' and 'Program' as separate strings to the end of the array
  secretMessage.push("to", "Program");
  
  // 3. Change the word 'easily' to 'right' by accessing the index and replacing it
  const indexToReplace = secretMessage.indexOf("easily");
  secretMessage[indexToReplace] = "right";
  
  // 4. Remove the first string of the array
  secretMessage.shift();
  
  // 5. Add the string 'Programming' to the beginning of the array
  secretMessage.unshift("Programming");
  
  // 6. Remove the strings 'get', 'right', 'the', 'first', 'time,', and replace them with the single string 'know,'
  const startIndex = secretMessage.indexOf("get");
  const endIndex = secretMessage.indexOf("time,") + 1;
  secretMessage.splice(startIndex, endIndex - startIndex, "know,");
  
  // 7. Print the secret message as a sentence
  console.log(secretMessage.join(" "));
  