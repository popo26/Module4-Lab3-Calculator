let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let result = document.getElementById("result");
let equal = document.querySelector(".equal");

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

// Debug Purpose
// num1.addEventListener("input", function () {
//   console.log(num1.value);
// });

// num2.addEventListener("input", function () {
//   console.log(num2.value);
// });

add.addEventListener("click", function () {
  operator.innerHTML = "+";
});

subtract.addEventListener("click", function () {
  operator.innerHTML = "-";
});

equal.addEventListener("click", function () {
  if (num1.value === "" || num2.value === "") {
    result.innerHTML = "Please enter a number in both fields.";
  } else if (operator.innerHTML === "") {
    result.innerHTML = "Please select an operator.";
  } else {
    if (operator.innerHTML === "+") {
      let total = addition();
      result.innerHTML = total;
    } else {
      let total = subtraction();
      result.innerHTML = total;
    }
  }
});
