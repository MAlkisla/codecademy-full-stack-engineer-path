const team = {
    _players: [
      { firstName: 'John', lastName: 'Doe', age: 25 },
      { firstName: 'Jane', lastName: 'Smith', age: 28 },
      { firstName: 'Michael', lastName: 'Jordan', age: 40 }
    ],
    _games: [
      { opponent: 'Lakers', teamPoints: 105, opponentPoints: 98 },
      { opponent: 'Bulls', teamPoints: 110, opponentPoints: 105 },
      { opponent: 'Celtics', teamPoints: 98, opponentPoints: 95 }
    ]
  };
  
  Object.defineProperty(team, 'players', {
    get: function() {
      return this._players;
    }
  });
  
  Object.defineProperty(team, 'games', {
    get: function() {
      return this._games;
    }
  });
  
  team.addPlayer = function(newFirstName, newLastName, newAge) {
    let newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(newPlayer);
  };
  
  team.addGame = function(newOpponent, newTeamPoints, newOpponentPoints) {
    let newGame = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(newGame);
  };
  
  // Adding a new player
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team._players);
  
  // Adding a new game
  team.addGame('Titans', 100, 98);
  console.log(team._games);
  