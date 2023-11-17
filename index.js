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
let sum = document.getElementById("sum-el");

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
let firstCard = 10;
let secondCard = 4;
let sumCard = firstCard + secondCard;
