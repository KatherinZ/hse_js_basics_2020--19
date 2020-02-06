
// координаты корабля
let location1 = 5
let location2 = 6
let location3 = 7
// координаты выстрела
let currentShot
// number of shots
let shots = 0
// попадания
let hits = 0
//утонул ли
let isSunk = false

//пишем цикл, работающий пока корабль не утонул
while (isSunk === false) {
  //спрашиваем координату выстрела у игрока
  currentShot = Number(prompt('Enter a number from 0 to 9:'))
  //увеличиваю кол-во выстрелов
  shots++

  //проверяю, было ли попадание (hit)
  //если координата выстрела совпадает с какой-нибудь координатой корабля, тогда игрок попал
  //Поэтому увеличиваю кол-во попаданий

  if (currentShot === location1 || currentShot === location2|| currentShot === location3){
    hits = hits + 1}
     else if (currentShot === location1 ){
     hits != hits + 1
   }

  if (currentShot != location1 || location2|| location3){
    alert('try again!')
  }

  //если попал  три раза, топлю корабль
  if (hits === 3) {
    alert('congrats!')
    isSunk === true
  }


}
