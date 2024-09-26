class School {
    // Step 2: Create constructor
    constructor(name, level, numberOfStudents) {
      // Step 3: Set properties
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    // Step 4: Create getters
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    // Step 5: Create setter for numberOfStudents
    set numberOfStudents(value) {
      if (typeof value === 'number') {
        this._numberOfStudents = value;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    // Step 6: Create quickFacts method
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    // Step 7: Create static pickSubstituteTeacher method
    static pickSubstituteTeacher(substituteTeachers) {
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
  }
  class PrimarySchool extends School {
    // Step 9: Create constructor
    constructor(name, numberOfStudents, pickupPolicy) {
      // Step 10: Call super
      super(name, 'primary', numberOfStudents);
      // Step 11: Set pickupPolicy
      this._pickupPolicy = pickupPolicy;
    }
  
    // Step 12: Create getter for pickupPolicy
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  class HighSchool extends School {
    // Create constructor
    constructor(name, numberOfStudents, sportsTeams) {
      // Call super
      super(name, 'high', numberOfStudents);
      // Set sportsTeams
      this._sportsTeams = sportsTeams;
    }
  
    // Create getter for sportsTeams
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  // Step 14: Create PrimarySchool instance
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  // Step 15: Call quickFacts on lorraineHansbury
  lorraineHansbury.quickFacts();
  
  // Step 16: Call pickSubstituteTeacher on School class
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  // Create HighSchool instance
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  // Get sportsTeams for alSmith
  console.log(alSmith.sportsTeams); // Logs: ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
  