const buttonElem = document.querySelector(".calculate");

const addElem = document.querySelector(".add");
const minusElem = document.querySelector(".minus");
const multiplyElem = document.querySelector(".multiply");
const devideElem = document.querySelector(".devide");

const inputAElem = document.querySelector(".inputA");
const inputBElem = document.querySelector(".inputB");
const paragraphElem = document.querySelector(".summation");

let operator = "";
addElem.addEventListener("click", (e) => {
    e.preventDefault();
  operator = "+";
});

minusElem.addEventListener("click", (e) => {
    e.preventDefault();
  operator = "-";
});

multiplyElem.addEventListener("click", (e) => {
    e.preventDefault();
  operator = "*";
});

devideElem.addEventListener("click", (e) => {
    e.preventDefault();
  operator = "/";
});

buttonElem.addEventListener("click", function (e) {
  e.preventDefault();

  let sum = Number(inputAElem.value) + Number(inputBElem.value);
  let diff = Number(inputAElem.value) - Number(inputBElem.value);
  let product = Number(inputAElem.value) * Number(inputBElem.value);
  let devident = Number(inputAElem.value) / Number(inputBElem.value);

  if (operator === "+") {
    paragraphElem.innerHTML = "A + B  =  " + sum;
  }

  if (operator === "-") {
    paragraphElem.innerHTML = "A - B  =  " + diff;
  }

  if (operator === "*") {
    paragraphElem.innerHTML = "A * B  =  " + product;
  }

  if (operator === "/") {
    paragraphElem.innerHTML = "A / B  =  " + devident;
  }

});
