function reset() {
  window.location.reload()
}
let box = document.querySelector(".box")
// работает так же ка getElementById

function paintItBlack() {
  box.style.backgroundColor = "black"
}
function makeCircle() {
  box.style.borderRadius = "100%"
}
function move() {
  box.style.translateX = "50px"

}
