let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let result = document.getElementById("result");
let clear = document.querySelector(".clear");

const addition = () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  return num1 + num2;
};

const subtraction = () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  return num1 - num2;
};

add.addEventListener("click", function () {
  document.getElementById("operator").innerHTML = "+";
  let total = addition();
  result.innerHTML = total;
});

subtract.addEventListener("click", function () {
  document.getElementById("operator").innerHTML = "-";
  let total = subtraction();
  result.innerHTML = total;
});

clear.addEventListener("click", function () {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operator").innerHTML = "";
  result.innerHTML = "";
});