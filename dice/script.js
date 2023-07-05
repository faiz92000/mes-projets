// Récupération des éléments du DOM
const newGameButton = document.getElementById('new-game');
const rollDiceButton = document.getElementById('roll-dice');
const holdButton = document.getElementById('hold');
const scorePlayer1Element = document.getElementById('score-player1');
const scorePlayer2Element = document.getElementById('score-player2');
const roundPlayer1Element = document.getElementById('round-player1');
const roundPlayer2Element = document.getElementById('round-player2');
const currentPlayerElement = document.getElementById('current-player');

let currentPlayer = 1;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let roundScorePlayer1 = 0;
let roundScorePlayer2 = 0;

// Fonction pour générer un nombre aléatoire entre 1 et 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Fonction pour mettre à jour le score et le score ROUND d'un joueur dans le DOM
function updateScore(player) {
  if (player === 1) {
    scorePlayer1Element.textContent = scorePlayer1;
    roundPlayer1Element.textContent = roundScorePlayer1;
  } else if (player === 2) {
    scorePlayer2Element.textContent = scorePlayer2;
    roundPlayer2Element.textContent = roundScorePlayer2;
  }
}

// Fonction pour changer de joueur
function changePlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  currentPlayerElement.textContent = `Joueur ${currentPlayer}`;
}

// Fonction pour gérer le lancer de dé
function handleRollDice() {
  const diceValue = rollDice();

  if (diceValue === 1) {
    if (currentPlayer === 1) {
      roundScorePlayer1 = 0;
      roundPlayer1Element.textContent = roundScorePlayer1;
    } else if (currentPlayer === 2) {
      roundScorePlayer2 = 0;
      roundPlayer2Element.textContent = roundScorePlayer2;
    }

    changePlayer();
  } else {
    if (currentPlayer === 1) {
      roundScorePlayer1 += diceValue;
      roundPlayer1Element.textContent = roundScorePlayer1;
    } else if (currentPlayer === 2) {
      roundScorePlayer2 += diceValue;
      roundPlayer2Element.textContent = roundScorePlayer2;
    }
  }
}

// Fonction pour gérer l'option "Hold"
function handleHold() {
  if (currentPlayer === 1) {
    scorePlayer1 += roundScorePlayer1;
    scorePlayer1Element.textContent = scorePlayer1;
    roundScorePlayer1 = 0;
    roundPlayer1Element.textContent = roundScorePlayer1;
  } else if (currentPlayer === 2) {
    scorePlayer2 += roundScorePlayer2;
    scorePlayer2Element.textContent = scorePlayer2;
    roundScorePlayer2 = 0;
    roundPlayer2Element.textContent = roundScorePlayer2;
  }

  if (scorePlayer1 >= 100) {
    alert("Joueur 1 a gagné !");
    handleNewGame();
  } else if (scorePlayer2 >= 100) {
    alert("Joueur 2 a gagné !");
    handleNewGame();
  } else {
    changePlayer();
  }
}

// Fonction pour réinitialiser le jeu
function handleNewGame() {
  currentPlayer = 1;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  roundScorePlayer1 = 0;
  roundScorePlayer2 = 0;
  updateScore(1);
  updateScore(2);
  currentPlayerElement.textContent = `Joueur ${currentPlayer}`;
}

// Ajout des gestionnaires d'événements aux boutons
newGameButton.addEventListener('click', handleNewGame);
rollDiceButton.addEventListener('click', handleRollDice);
holdButton.addEventListener('click', handleHold);
