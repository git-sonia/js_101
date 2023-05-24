const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const ROUNDS = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

function findWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    return 'player';
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')) {
    return 'computer';
  } else {
    return 'tie';
  }
}

function displayWinner(winResult, choice, computerChoice, points) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  switch (winResult) {
    case 'player':
      prompt('You win!');
      break;
    case 'computer':
      prompt('Computer wins!');
      break;
    default:
      prompt("It's a tie!");
  }
  prompt(`player: ${points['player']}, computer: ${points['computer']}`);
}

function updatePoints(winResult, points) {
  if (winResult !== 'tie') {
    points[winResult] += 1;
  }
}

function findOverallWinner(points) {
  let mostPoints = 0;
  let winner;
  for (let player in points) {
    if (points[player] > mostPoints) {
      mostPoints = points[player];
      winner = player;
    }
  }
  return winner;
}

while (true) {
  let points = { player: 0, computer: 0 };
  while (points['player'] < ROUNDS && points['computer'] < ROUNDS) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    let winResult = findWinner(choice, computerChoice);
    updatePoints(winResult, points);
    displayWinner(winResult, choice, computerChoice, points);
  }
  let overallWinner = findOverallWinner(points);
  prompt(`Overall winner is ${overallWinner} with ${points[overallWinner]} points!`);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}