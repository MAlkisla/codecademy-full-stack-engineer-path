// Step 1: Creating the dogFactory function
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,

        // Step 2: Getters and setters with property names prefixed by underscore
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        
        // Step 3: Adding methods to the object
        bark() {
            return 'ruff! ruff!';
        },
        eatTooManyTreats() {
            this._weight++;
        }
    };
}

// Testing the dogFactory function
const myDog = dogFactory('Joe', 'Pug', 27);
console.log(myDog); 
// Should print { _name: 'Joe', _breed: 'Pug', _weight: 27 }

console.log(myDog.bark()); // Should print 'ruff! ruff!'
myDog.eatTooManyTreats();
console.log(myDog.weight); // Should print 28
