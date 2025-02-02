const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const computerChoiceDiv = document.getElementById('computerChoice');

const choice = ['Rock', 'Cutter', 'Paper'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choice.length); //random - случайное нецелое число (17 чисел после запятой) от 0 до 1
  return choice[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) return 'Ничья';

  if (
    (playerChoice == 'Cutter' && computerChoice == 'Paper') ||
    (playerChoice == 'Rock' && computerChoice == 'Cutter') ||
    (playerChoice == 'Paper' && computerChoice == 'Rock')
  )
    return 'Вы выиграли!';

  return 'Компьютер выиграл!';
}

rockBtn.addEventListener('click', () => playGame('Rock'));
paperBtn.addEventListener('click', () => playGame('Paper'));
scissorsBtn.addEventListener('click', () => playGame('Cutter'));

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  computerChoiceDiv.textContent = `Выбор компьютера: ${computerChoice}`;
  resultDiv.textContent = determineWinner(playerChoice, computerChoice);
}
