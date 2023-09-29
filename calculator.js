let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

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
