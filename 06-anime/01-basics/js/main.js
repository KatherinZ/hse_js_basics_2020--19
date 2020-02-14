let targsAnimation01 = anime({
  targets: '.box.is-moving',
  translateX: 300,
  autoplay: false
})
let targsBtn01 = document.getElementById('targsBtn01')
targsBtn01.onclick = targsAnimation01.play


let propsAnimation01 = anime({
  targets: '.props .box',
  autoplay: false,
  translateX: 500,
  rotate: 180,
  backgroundColor: '#bfff00',
  borderRadius: [0, '50%'],
  easing: 'easeInOutQuad'
})
let propsBtn01 = document.getElementById('propsBtn01')
propsBtn01.onclick = propsAnimation01.play


let valsAnimation01 = anime({
  targets: '.vals .triangle',
  translateX: 500,
  rotate: 180,
  autoplay: false,
  easing: 'easeInOutQuint',
  delay: anime.stagger(100),
  delay: anime.stagger([-270, 270])
})
let valsBtn01 = document.getElementById('valsBtn01')
valsBtn01.onclick = valsAnimation01.play


let path = anime.path('path')
let svgMotion = anime({
  targets: '.svgAnim .triangle',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 100,
  loop: true
})

let prevTranslateX = 0
let funcAnimation01 = anime({
  targets: 'func-move .box',
  translateX: function() {
   return prevTranslateX = anime.random(100, 200)

  },
  autoplay: false,
  changeComplete: function(el){
  console.log(el.animations[0].currentValue)
  }
})
let funcBtn01 = document.getElementById('funcBtn01')
funcBtn01.onclick = funcAnimation01.play
