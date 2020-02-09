// let secondName = "Someone"
// function logUser(){
//   let name = "You"
//   console.log(name + " " + secondName);
// }
// logUser()
// console.log("secondName:" + secondName)
// console.log("name:" + name)
// //2
// function getFullName(name, secondName) {
//   return `Full name: ${name} ${secondName}`
// }
//   console.log(getFullName("You", "Are" ))
//   let leoFullName = getFullName("Leonard", "Leontyev")
//   console.log(leoFullName)
//
//   //3
//   function sayHello(name = "stranger") {
// if (name === undefined){
//   name = "stranger"
// }
//     name = name || "stranger"
//     alert(`Hello ${name}!`)
//   }
//   sayHello()

  //4
  // function makeCoffee(cups, withMilk) {
  //   if (withMilk){
  //      console.log(`Варю ${cups} кофе с молоком`);
  //   }
  //    console.log(`Варю ${cups} кофе без добавок`);
  // }
  //
  // makeCoffee(22, true)
  // makeCoffee(10, false)

  //5
  let a = 4
  let b = 6
function findMax(a, b) {
  if (a > b) {
    return a
  } else if (a === b) {
   return "equal numbers "
  } else {
    return b
  }

}
findMax(a, b)
console.log(findMax(4, 6))

//6
 let text = "expiring date on blaming"
 let author = "J. Rowling"
function showQuote(text, author = "Unknown author") {
  if (text && author) {
   return `Quote: ${text}, author ${author}`
 } return
}
showQuote(text, author)
console.log(showQuote(text, author))


// //7
let num1 = 7
let num2 = 6
function addOne(num1 +=1) {
  return result
   function randomOne(6) {
     let random = num2
   }
}
randomOne(num2)
console.log(random);

//8
let num = 112
function nextEven(num) {
  if (num % 2 !== 0){
    return num += 1
  } else if (num % 2 === 0){
    return num += 2}
}
nextEven()
console.log(nextEven(7));
