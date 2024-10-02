/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
for (let i = 0; i <= 7; i = i + 2) {
   result.push(i+1);
}
//export result
module.exports = result;