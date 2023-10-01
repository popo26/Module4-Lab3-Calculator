let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

num1.addEventListener("input", function (e) {
  // console.log(e.target.value);
  // console.log(typeof e.target.valueAsNumber);
  console.log(num1.value);
});

num2.addEventListener("input", function (e) {
  // console.log(e.target.value);
  // console.log(typeof e.target.valueAsNumber);
  console.log(num2.value);
});
