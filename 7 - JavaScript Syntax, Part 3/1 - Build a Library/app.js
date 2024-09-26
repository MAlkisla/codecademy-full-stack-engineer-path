class Media {
    // Step 2 & 3: Create an empty constructor with a parameter.
    constructor(title) {
      // Step 3: Set shared properties
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    // Step 4: Create getters
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    // Step 5: Create setter for isCheckedOut
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    // Step 6: toggleCheckOutStatus method
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    // Step 7: getAverageRating method
    getAverageRating() {
      const sum = this._ratings.reduce((accumulator, rating) => accumulator + rating, 0);
      return sum / this._ratings.length;
    }
  
    // Step 8: addRating method
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  class Book extends Media {
    // Step 10: Create constructor
    constructor(title, author, pages) {
      // Step 11: Call super with the required parameter
      super(title);
      // Step 12: Set unique properties for Book
      this._author = author;
      this._pages = pages;
    }
  
    // Step 13: Create getters for author and pages
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  // Step 15: Create a Book instance
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  
  // Step 16: Toggle checkout status
  historyOfEverything.toggleCheckOutStatus();
  
  // Step 17: Log isCheckedOut status
  console.log(historyOfEverything.isCheckedOut); // Output should be true
  
  // Step 18: Add ratings
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  // Step 19: Get average rating
  console.log(historyOfEverything.getAverageRating()); // Output should be 4.666666666666667
  
  // Step 20: Create a Movie instance
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  
  // Step 21: Toggle checkout status for speed
  speed.toggleCheckOutStatus();
  
  // Step 22: Log isCheckedOut status for speed
  console.log(speed.isCheckedOut); // Output should be true
  
  // Step 23: Add ratings for speed
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  // Step 24: Get average rating for speed
  console.log(speed.getAverageRating()); // Output should be 2.3333333333333335