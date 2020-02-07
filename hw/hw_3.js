let i = " "
for (let hash = 0; hash < 8; hash++){
 for (let space = 0; space < 8; space++){
   if ((hash + space) % 2 != 0){
     i = i
   }
   else {
     i = i + "#"
   }
 }
 i = i + "\n"
}
console.log(i)
// while (hash.length < 8){
//   hash + space + hash
// }
// console.log(hash, hash, hash, hash)

// let landscape = function(){
//   let result = ""
//   let flat = function(x){
//     for(var count = 0; count < x; count++)
//     result += "_"
//   }
//   let mount = function(x){
//     result += "/"
//     for (var count = 0; count < x; count++)
//      result += " ' "
//     result += "\\"
//   }
//
//   flat(3)
//   mount(4)
//   flat(6)
//   mount(1)
//   flat(1)
//   return result
// }
// console.log(landscape())
