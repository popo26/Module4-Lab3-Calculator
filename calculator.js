let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");

num1.addEventListener("input", function () {
  console.log(num1.value);
});

num2.addEventListener("input", function () {
  console.log(num2.value);
});

add.addEventListener("click", function () {
  document.getElementById("operator").innerHTML = "+";
});

subtract.addEventListener("click", function () {
  document.getElementById("operator").innerHTML = "-";
});
