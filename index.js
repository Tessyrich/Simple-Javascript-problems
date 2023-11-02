let count = 0;
let countUl = document.getElementById("count-ul");
let saveEl = document.getElementById("save-el");
const InCrement = () => {
  count = count + 1;
  countUl.innerText = count;
};

const Save = () => {
  countNum = count + "-";
  saveEl.innerText = countNum;
  console.log(count);
};
Save();
