// Write your code here

let myBulb1 = document.querySelector("#lightbulb1");
let myBulb2 = document.querySelector("#lightbulb2");
let myBulb3 = document.querySelector("#lightbulb3");
let output = document.querySelector(".subtitle");
let count = 0;
// You've clicked the lights 0 times

myBulb1.addEventListener("click", function () {
  myBulb1.classList.toggle("active");
  count++;
  if (count == 1) {
    output.innerHTML = `You've clicked the lights ${count} time`;
  } else {
    output.innerHTML = `You've clicked the lights ${count} times`;
  }
});
myBulb2.addEventListener("click", function () {
  myBulb2.classList.toggle("active");
  count++;
  if (count == 1) {
    output.innerHTML = `You've clicked the lights ${count} time`;
  } else {
    output.innerHTML = `You've clicked the lights ${count} times`;
  }
});
myBulb3.addEventListener("click", function () {
  myBulb3.classList.toggle("active");
  count++;
  if (count == 1) {
    output.innerHTML = `You've clicked the lights ${count} time`;
  } else {
    output.innerHTML = `You've clicked the lights ${count} times`;
  }
});
