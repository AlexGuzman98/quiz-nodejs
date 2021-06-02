
const nums = [1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11];
let total =  0;
// La siguiente funcion lleva el metodo math.max que retorna el mayor de un array llamando al array de la siguien maner ...array 
exports.Mayor = function numMayor(){
   const maximo = Math.max(...nums)
    return maximo;
}
// Igual que la math.max solo que retorna el numero menor de un array
exports.Menor = function nunMenor(){
    const minimo = Math.min(...nums)
     return minimo;
 }
// La siguiente se hace un for para que recorra todo el array y se concateta y suma todos los valores dentro del array.
 exports.Sumatoria = function suma(){
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
    return total;
 }
//  La siguiente se hace un sort y retorna de menor a mayor los numero 
 exports.Order = function menorAmayor(){
   return nums.sort(function(a,b){
    return a - b;
   });
 }