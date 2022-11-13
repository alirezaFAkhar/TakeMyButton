let btn = document.querySelector("#fun-button");
function rund() {
  return Math.round(Math.random() * 90) + "%";
}
function moveBtn(event) {
  if (event.altKey == false) {
    btn.style.right = rund();
    btn.style.top = rund();
  }
}
btn.addEventListener("mouseover", moveBtn);
