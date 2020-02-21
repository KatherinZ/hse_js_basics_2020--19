let controller = new ScrollMagic.Controller()
// отвечает за подкличение scrjll magic'a



// example 1
let box1 = document.querySelector('#box-1')
let box1Animation = anime({
  targets: '.box1',
  translateX: 500,
  rotate: [0, 360],
  duration: 1500,
  autoplay: false
})
// то же самое как с анимэйтом: мы таргетим box1 и сцена запускается: когда он в зоне видимости
new ScrollMagic.Scene({
  triggerElment: box1,
  triggerHook: 'onLeave'
  //triggerHook: 'onEnter', 'onLeave', 'onCenter' или числом от 1 до 0
})
.addTo(controller)
.on('enter', ()=>{
  box1Animation.play()
})


//example 2
let box2 = document.querySelector('#box-2')
let box2Animation = anime({
  targets: box2,
  translateX: '80%',
  rotate: '+=5turn',
  easing: 'linear',
  autoplay: false
})

let section3 = document.querySelector('#section-3')
new ScrollMagic.Scene({
  triggerElement: section3,
  duration: section3.getBoundingClientRect().height
})
.addTo(controller)
.setPin(box2)
.on('progress', (e) =>{
  console.log(e);
  box2Animation.seek(box2Animation.duration * e.progress)
})


//example 3
let lastSection = document.getElementById('last-section')
let loader = document.querySelector('.loader')
let circlesWrapper = document.querySelector('.circles-wrapper')

let loadingScene = new ScrollMagic.Scene({
  triggerElement: loader,
  triggerHook: 'onEnter'
})
.addTo(controller)
.on('enter', ()=>{
  addCircles(20)
  setTimeOut(addCircles, 2000, 20)
})
// setTimeOut позволяет запускать указвнную в параметрах функцию. второй параметр - время делэя, последний - значение, которое надо передать
function addCircles(amount){
  let count = 0
  while (amount > count){
    let newDiv = document.createElement('div')
    newDiv.classList.add('circle')
    newDiv.style.background = 'rgb(150, 150, 150)'
    circlesWrapper.append(newDiv)
    count += 1
  }
}
function getRanomRGBcolor() {
  return
  `rgb(${getRGBcode()}, ${getRGBcode()}, ${getRGBcode()})`
}

function getRGBcode() {
  return Math.round(Math.random() * 255)
}
