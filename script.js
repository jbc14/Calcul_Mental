const rulesBtn = document.getElementById('rulesBtn');
const rules = document.getElementById('rules');

rulesBtn.addEventListener('click', () => {
  if (getComputedStyle(rules).display != 'none') {
    rules.style.display = 'none';
    rulesBtn.value = 'Afficher les règles du jeu';
  } else {
    rules.style.display = 'block';
    rulesBtn.value = 'Masquer les règles du jeu';
  }
});

const letsGoBtn = document.getElementById('letsgoBtn');
const operationElement = document.getElementById('operation');
const timerElement = document.getElementById('timer');

let result = 0;

function updateTimer() {
  let timer = 5;
  timerElement.innerHTML = timer;

  setInterval(() => {
    timer--;

    if (timer >= 0) {
      timerElement.innerHTML = timer;
    }
    if (timer === 0) {
      timerElement.style.fontSize = '3rem';
      timerElement.innerHTML = `Le résultat était ${result}`;
      letsGoBtn.disabled = false;
    }
  }, 1000);
}

letsGoBtn.addEventListener('click', () => {
  document.getElementById('result').innerHTML = ``;
  timerElement.style.fontSize = '5rem';

  letsGoBtn.disabled = true;

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const secondRandomNumber = Math.floor(Math.random() * 100) + 1;
  const randomOperatorNumber = Math.floor(Math.random() * 4) + 1;

  function getRandomOperator() {
    if (randomOperatorNumber == 1) return '+';
    if (randomOperatorNumber == 2) return '-';
    if (randomOperatorNumber == 3) return '*';
    if (randomOperatorNumber == 4) return '/';
  }
  const randomOperator = getRandomOperator(randomOperatorNumber);

  operationElement.innerHTML = `${randomNumber} ${randomOperator} ${secondRandomNumber} = `;

  function getResult() {
    if (randomOperator == '+') {
      return randomNumber + secondRandomNumber;
    }
    if (randomOperator == '-') {
      return randomNumber - secondRandomNumber;
    }
    if (randomOperator == '*') {
      return randomNumber * secondRandomNumber;
    }
    if (randomOperator == '/') {
      return randomNumber / secondRandomNumber;
    }
  }

  updateTimer();
  result = getResult(randomNumber, secondRandomNumber, randomOperator);
});
