const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.playerPosition = { x: 0, y: 0 }; // starting position at the top left corner
  }

  // Method to display the current field
  print() {
    this.field.forEach(row => console.log(row.join('')));
  }

  // Method to prompt the user for a move direction and update position
  promptMove() {
    const direction = prompt('Which way? (u = up, d = down, l = left, r = right) ').toLowerCase();
    switch (direction) {
      case 'u':
        this.playerPosition.y -= 1;
        break;
      case 'd':
        this.playerPosition.y += 1;
        break;
      case 'l':
        this.playerPosition.x -= 1;
        break;
      case 'r':
        this.playerPosition.x += 1;
        break;
      default:
        console.log('Invalid move');
        break;
    }
  }

  // Check if the player is out of bounds
  isOutOfBounds() {
    const { x, y } = this.playerPosition;
    return y < 0 || y >= this.field.length || x < 0 || x >= this.field[0].length;
  }

  // Check if the player has fallen into a hole
  isHole() {
    const { x, y } = this.playerPosition;
    return this.field[y][x] === hole;
  }

  // Check if the player has found the hat
  isHat() {
    const { x, y } = this.playerPosition;
    return this.field[y][x] === hat;
  }

  // Main game loop
  playGame() {
    let playing = true;

    while (playing) {
      this.print();
      this.promptMove();

      if (this.isOutOfBounds()) {
        console.log('You went out of bounds! Game over.');
        playing = false;
      } else if (this.isHole()) {
        console.log('You fell in a hole! Game over.');
        playing = false;
      } else if (this.isHat()) {
        console.log('Congratulations, you found your hat!');
        playing = false;
      } else {
        // Mark the player's path
        this.field[this.playerPosition.y][this.playerPosition.x] = pathCharacter;
      }
    }
  }

  // Static method to generate a random field
  static generateField(height, width, holePercentage = 0.2) {
    // Create a field filled with fieldCharacter
    const field = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => fieldCharacter)
    );

    // Place hat at a random position
    const hatX = Math.floor(Math.random() * width);
    const hatY = Math.floor(Math.random() * height);
    field[hatY][hatX] = hat;

    // Place holes based on holePercentage
    const numHoles = Math.floor(height * width * holePercentage);
    for (let i = 0; i < numHoles; i++) {
      let holeX, holeY;
      do {
        holeX = Math.floor(Math.random() * width);
        holeY = Math.floor(Math.random() * height);
      } while (field[holeY][holeX] === hat || (holeX === 0 && holeY === 0)); // avoid start position
      field[holeY][holeX] = hole;
    }

    // Set the player's starting point
    field[0][0] = pathCharacter;
    return field;
  }
}

// Create a new game field and start the game
const myField = new Field(Field.generateField(10, 10, 0.2));
myField.playGame();
