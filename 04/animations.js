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
  box.style.transform = "translate(50px, 50px)"
}
function makeBlinking() {
box.classList.add("blinking")
}

function addText() {
    let smth = document.getElementById("myText").value
  document.getElementById("textInput").innerHTML = smth
  box.style.color = "white"
}
function changeColor() {
 let name = document.getElementById("myColor").value
 box.style.backgroundColor = name
 name.value = ""
}
//  ИЛИ ТАК
// function changeColor() {
//   let colorInput = document.querySelector("#myColor")
//   box.style.backgroundColor = colorInput
// }
