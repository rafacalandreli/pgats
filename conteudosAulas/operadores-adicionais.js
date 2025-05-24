/** Operadores Aritméticos
 * 
 *  --  -> decremento em 1 em uma variavel numerico
 *  ++  -> incremento em 1 em uma variavel numerico
 * 
 *  ?   -> Ternario (condicional)
 */

let pesoDoDog = 10;
let pesoDoGato = 5;
pesoDoDog++
pesoDoGato--

console.log(`pesoDoDog++ = ${pesoDoDog++}`);   // 11
console.log(`pesoDoDog-- = ${pesoDoDog--}`);     // 4


// Ternario

const porteDog = pesoDoDog <=10 ? 'pequeno' : 'medio'
console.log(porteDog)
// Estrutura <condicao> ? <acao se verdardeiro> : <acao se falso>

pesoDoGato = pesoDoGato+1
const porteGato = pesoDoGato <=5  // se
                             ? 'pequeno' 
                             : pesoDoGato >5 & pesoDoGato <10  //senao if
                             ? 'medio'
                             : 'grande' //senao

console.log(`${pesoDoGato} é considerado do porte = ${porteGato}`)