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
