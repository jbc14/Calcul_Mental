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

function updateTimer() {
  let timer = 20;
  const timerElement = document.getElementById('timer');
  timerElement.innerHTML = timer;

  setInterval(() => {
    timer--;

    if (timer >= 0) {
      timerElement.innerHTML = timer;
    }
    if (timer === 0) {
      timerElement.innerHTML = 'Done !';
      letsGoBtn.disabled = false;
    }
  }, 1000);
}

letsGoBtn.addEventListener('click', () => {
  const firstNumber = document.getElementById('firstNumber');
  const operator = document.getElementById('operator');
  const secondNumber = document.getElementById('secondNumber');

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

  firstNumber.innerHTML = randomNumber;
  secondNumber.innerHTML = secondRandomNumber;
  operator.innerHTML = randomOperator;

  updateTimer();
});
