let count = 0;
let countUl = document.getElementById("count-ul");
let saveEl = document.getElementById("save-el");
const InCrement = () => {
  count += 1;
  countUl.textContent = count;
};

const Save = () => {
  let countNum = count + " - ";
  saveEl.textContent += countNum;
  console.log(countNum);
  countUl.textContent = 0;
  count = 0;
};
let errormsg = document.getElementById("error");
render = () => {
  errormsg.textContent = "something went wrong please try again";
};

let num1 = 8;
let num2 = 2;
document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;
let sum = document.getElementById("sum-ell");

const Add = () => {
  let numSum = num1 + num2;
  sum.textContent = "Sum:" + numSum;
};
const Substract = () => {
  let numSum = num1 - num2;
  sum.textContent = "Sum:" + numSum;
};
const Divide = () => {
  let numSum = num1 / num2;
  sum.textContent = "Sum:" + numSum;
};
const Multiply = () => {
  let numSum = num1 * num2;
  sum.textContent = "Sum:" + numSum;
};
// BLACKJACK GAME
let firstCard = 10;
let secondCard = 21;
let sumCard = firstCard + secondCard;
let hasBlackcard = false;
let isAlive = true;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

startGame = () => {
  cardEl.textContent = "Card:" + firstCard + " " + secondCard;
  sumEl.textContent = "Sum:" + sumCard;
  if (sumCard <= 20) {
    message = "Do you want to draw a new card";
  } else if (sumCard === 21) {
    message = "whoo you have a blackcard";
    hasBlackcard = true;
  } else {
    message = "you are out of the game";
  }
  messageEl.textContent = message;
};

newCard = () => {
  console.log(" drawing a new card from the deck");
  let Card = 5;
  sumCard += Card;
  startGame();
};
