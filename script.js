const list = document.getElementById("infi-list");

let count = 1;

// Add 10 items initially
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${count}`;
    list.appendChild(li);
    count++;
  }
}

addItems(10);

// Add 2 more items when user reaches the end
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});