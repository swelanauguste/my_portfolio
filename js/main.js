let n = localStorage.getItem("on_load_counter");

if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);

let nums = n.toString().split("").map(Number);
document.getElementById("CounterVisitor").innerHTML = "";
for (let i of nums) {
  document.getElementById("CounterVisitor").innerHTML +=
     i;
}
