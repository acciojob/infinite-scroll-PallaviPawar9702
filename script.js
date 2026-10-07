const list = document.getElementById("infi-list");

let count = 1;

function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${count}`;
    list.appendChild(li);
    count++;
  }
}

addItems(10);

list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});