const refreshBtn = document.querySelector('.refresh');
const dice1 = document.querySelector('.img1');
const dice2 = document.querySelector('.img2');
var randomNum1;
var randomNum2;

const drawDices = () => {
  randomNum1 = Math.floor(Math.random() * 6 + 1);
  randomNum2 = Math.floor(Math.random() * 6 + 1);

  switch (randomNum1) {
    case 1:
      dice1.src = 'images/dice1.png';
      break;
    case 2:
      dice1.src = 'images/dice2.png';
      break;
    case 3:
      dice1.src = 'images/dice3.png';
      break;
    case 4:
      dice1.src = 'images/dice4.png';
      break;
    case 5:
      dice1.src = 'images/dice5.png';
      break;
    case 6:
      dice1.src = 'images/dice6.png';
      break;
    default:
      break;
  }

  switch (randomNum2) {
    case 1:
      dice2.src = 'images/dice1.png';
      break;
    case 2:
      dice2.src = 'images/dice2.png';
      break;
    case 3:
      dice2.src = 'images/dice3.png';
      break;
    case 4:
      dice2.src = 'images/dice4.png';
      break;
    case 5:
      dice2.src = 'images/dice5.png';
      break;
    case 6:
      dice2.src = 'images/dice6.png';
      break;
    default:
      break;
  }
};

const compareTwoNumbers = (num1, num2) => {
  if (num1 > num2) return 'User1 Win!';
  else if (num1 < num2) return 'User2 Win!';
  else return 'Draw!';
};

refreshBtn.addEventListener('click', (event) => {
  event.preventDefault();
  drawDices();

  const result = compareTwoNumbers(randomNum1, randomNum2);

  refreshBtn.innerText = result + ' 🎉';
});
