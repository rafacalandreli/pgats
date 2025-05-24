/** Operadores Aritméticos
 * 
 *  +  -> Soma
 *  -  -> Subtração
 *  *  -> Multiplicação
 *  /  -> Divisão
 *  %  -> Resto da divisão
 *  ** -> Exponenciação
 */

console.log(`10 + 10 = ${10 + 10}`);   // 20
console.log(`10 - 5 = ${10 - 5}`);     // 5
console.log(`10 * 2 = ${10 * 2}`);     // 20
console.log(`10 / 2 = ${10 / 2}`);     // 5
console.log(`10 % 3 = ${10 % 3}`);     // 1
console.log(`10 ** 2 = ${10 ** 2}`);   // 100 (10 elevado à 2ª potência)

console.log(11/2) //5.5
console.log(parseInt(11/2)) //5

//arredodamento
console.log(Math.floor(5.8))
console.log(Math.round(5.8))
console.log(Math.ceil(5.8)) // Para cima
//
const valorDecimal = 2.123232
console.log(valorDecimal.toFixed(3))