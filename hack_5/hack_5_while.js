/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let i = 0
while (i <= 6) {
   if (i % 2 == 0)
   result.push(i+1)
   i ++
   result.sort()
   result.reverse()
}


//export result
module.exports = result;