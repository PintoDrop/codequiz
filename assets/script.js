document.getElementById("box1").addEventListener("click", changeColor);
function changeColor() {
  document.getElementById("box1").innerHTML = "CLICK!";
  document.getElementById("box1").style.backgroundColor = "Green";
}
