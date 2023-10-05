const c1 = document.getElementById("a");
const c2 = document.getElementById("b");
const c3 = document.getElementById("counter");
let counterValue = 0;

function updateCounter() {
  c3.textContent = counterValue;
}

a.addEventListener("click", function () {
  counterValue++;
  updateCounter();
});

b.addEventListener("click", function () {
  counterValue--;
  updateCounter();
});
updateCounter();
