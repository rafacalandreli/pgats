/*
    >  - Maior que
    >= - Maior ou igual a
    < -  menor que
    <=  menor ou igual que
    == igualdade somente de valores
    != difernte somente de valores
    === igualdade de valores e tipo de dado
*/

console.log("Maior que");
console.log(`3 > 2 = ${3 > 2}`); // verdadeiro
console.log(`3 > 4 = ${3 > 4}`); // falso
console.log("\n");

console.log("Maior ou igual a");
console.log(`2 >= 2 = ${2 >= 2}`); // verdadeiro
console.log(`2 >= 3 = ${2 >= 3}`); // falso
console.log("\n");

console.log("menor que");
console.log(`10 < 15 = ${10 < 15}`); // verdadeiro
console.log(`20 < 15 = ${20 < 15}`); // falso
console.log("\n");

console.log("menor ou igual que");
console.log(`10 <= 10 = ${10 <= 10}`); // verdadeiro
console.log(`11 <= 10 = ${11 <= 10}`); // falso
console.log("\n");

console.log("== Igualdade (só compara valores)");
console.log(`'10' == 10 = ${'10' == 10}`); // verdadeiro
console.log(`'11' == 10 = ${'11' == 10}`); // falso
console.log(`true == 1 = ${true == 1}`); // verdadeiro
console.log(`false == 1 = ${false == 1}`); // falso
console.log(`null == undefined = ${null == undefined}`); // verdadeiro
console.log(`'' == 0 = ${'' == 0}`); // verdadeiro
console.log("\n");

console.log("!= Diferente (só compara valores)");
console.log(`10 != 1 = ${10 != 1}`); // verdadeiro
console.log(`1 != 1 = ${1 != 1}`); // falso
console.log("\n");

console.log("=== Estritamente igual (valor e tipo)"); //+Seguros
console.log(`10 === 10 = ${10 === 10}`); // verdadeiro
console.log(`true === 1 = ${true === 1}`); // falso
console.log(`false === 1 = ${false === 1}`); // falso
