let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Step 1: Logging storyWords array
// console.log(storyWords); // Commented out as per task instructions

// Step 2: Logging the story as a joined string
// console.log(storyWords.join(' ')); // Commented out as per task instructions

// Step 3: Counting words
let count = 0;
storyWords.forEach(word => {
  count++;
});
console.log(count); // Word count

// Step 4: Filtering out unnecessary words
storyWords = storyWords.filter(word => word !== unnecessaryWord);

// Step 5: Replacing misspelled words
storyWords = storyWords.map(word => {
  return word === misspelledWord ? 'beautiful' : word;
});

// Step 6: Finding the index of the bad word
const badWordIndex = storyWords.findIndex(word => word === badWord);
console.log(badWordIndex); // Index of bad word

// Step 7: Replacing the bad word
if (badWordIndex !== -1) {
  storyWords[badWordIndex] = 'really';
}

// Step 8: Checking word length
const lengthCheck = storyWords.every(word => word.length <= 10);
console.log(lengthCheck); // Should log false if there's any word longer than 10 characters

// Step 9: Finding and replacing words longer than 10 characters
storyWords = storyWords.map(word => {
  return word.length > 10 ? 'stunning' : word;
});

// Step 10: Logging the final edited story
console.log(storyWords.join(' '));
