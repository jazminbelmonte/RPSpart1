new Vue({
  el: '#app',
  data: {
    playerWins: 0,
    computerWins: 0,
    gameIsRunning: false,
    rock: 1,
    paper: 2,
    scissors: 3,
    turns: []
  },

  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerWins = 0;
      this.computerWins = 0;
      this.turns = [];
    },

    rockUser: function() {
      //generate cpu choice
      var computer = this.computerChoice();

      //output of winner
      if(computer === this.paper){
        this.computerWins += 1;
        this.turns.unshift({
            isPlayer: false,
            text: 'Computer Chose Paper | Paper Beats Rock | Computer Wins!'
        })
      } else if(computer === this.scissors){
          this.playerWins += 1;
          this.turns.unshift({
              isPlayer: true,
              text: 'Computer Chose Scissors | Rock Beats Scissors | User Wins!'
          })
      } else {
          this.turns.unshift({
              tie: true,
              text: 'Computer Chose Rock | You Have Tied!'
          })
      }
      //check for winner
      this.checkWinner();
    },

      paperUser: function() {
      //generate cpu choice
          var computer = this.computerChoice();

          //output of winner
          if(computer === this.scissors){
              this.computerWins += 1;
              this.turns.unshift({
                  isPlayer: false,
                  text: 'Computer Chose Scissors | Scissors Beat Paper | Computer Wins!'
              })
          } else if(computer === this.rock){
              this.playerWins += 1;
              this.turns.unshift({
                  isPlayer: true,
                  text: 'Computer Chose Rock | Paper Beats Rock | User Wins!'
              })
          } else {
              this.turns.unshift({
                  tie: true,
                  text: 'Computer Chose Paper | You Have Tied!'
              })
          }
          //check for winner
          this.checkWinner();
      },

      scissorsUser: function() {
          //generate cpu choice
          var computer = this.computerChoice();

          //output of winner
          if(computer === this.rock){
              this.computerWins += 1;
              this.turns.unshift({
                  isPlayer: false,
                  text: 'Computer Chose Rock | Rock Beats Scissors | Computer Wins!'
              })
          } else if(computer === this.paper){
              this.playerWins += 1;
              this.turns.unshift({
                  isPlayer: true,
                  text: 'Computer Chose Paper| Scissors Beats Paper | User Wins!'
              })
          } else {
              this.turns.unshift({
                  tie: true,
                  text: 'Computer Chose Scissors | You Have Tied!'
              })
          }
          //check for winner
          this.checkWinner();
      },

    computerChoice: function() {
      var max = 3;
      var min = 0;
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },

    checkWinner: function () {
      if(this.playerWins === 10){
        if(confirm('You won! New Game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
      } else if (this.computerWins === 10){
        if(confirm('Computer won! New Game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
      }
    },
  }
});