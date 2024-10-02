/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let i = 0
while (i < 5) {
   result.push(i+1)
   result.sort()
   result.reverse()
   i ++
}
//export result
module.exports = result;