/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
for (let i = 0; i < 7; i = i + 2) {
   result.push(i+1)
   result.sort()
   result.reverse()
}


//export result
module.exports = result;