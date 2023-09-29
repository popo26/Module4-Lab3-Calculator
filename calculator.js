let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");

num1.addEventListener("input", function (e) {
  console.log(e.target.value);
  console.log(typeof e.target.valueAsNumber);
  // return num1.valueAsNumber;
});

num2.addEventListener("input", function (e) {
  console.log(e.target.value);
  console.log(typeof e.target.valueAsNumber);
  // return num2.valueAsNumber;
});

add.addEventListener("click", function () {
  document.getElementById("operator").innerHTML = "+";
});

subtract.addEventListener("click", function () {
  document.getElementById("operator").innerHTML = "-";
});
