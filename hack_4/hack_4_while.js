/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let i = 0
while (i <= 6) {
   if (i % 2 == 0)
   result.push(i+1)
   i ++
}
//export result
module.exports = result;