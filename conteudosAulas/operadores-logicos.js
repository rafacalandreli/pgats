
/** Operadores Logicos 
 * 
 * 
 * && - E/AND
 * || - Ou/Or
 * ! - não/not
 * 
 */

console.log("Operador AND (&&)");
console.log(`true && true = ${true && true}`); // verdadeiro
console.log(`false && true = ${false && true}`); // falso
const nomeDog = "Pipoca"
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").push.length === 1
const nomePossuiAte10Caracteres = nomeDog.length <= 10

console.log(nomePossuiApenasUmaPalavra && nomePossuiAte10Caracteres) // verdadeiro
console.log("\n");

console.log("Operador OR (||)");
console.log(`false || true = ${false || true}`); // verdadeiro
console.log(`false || false = ${false || false}`); // falso
const dog = {
    adotado: false,
    peso: 5.3
};

console.log("Exemplos com operador lógico OR (||) e NOT (!)");
console.log(`!dog.adotado || dog.peso < 10 = ${!dog.adotado || dog.peso < 10}`); // true || true => true
console.log(`!dog.adotado || dog.peso > 10 = ${!dog.adotado || dog.peso > 10}`); // true || false => true
console.log(`dog.adotado || dog.peso < 10 = ${dog.adotado || dog.peso < 10}`);   // false || true => true
console.log(`dog.adotado || dog.peso > 10 = ${dog.adotado || dog.peso > 10}`);   // false || false => false



console.log("\n");

console.log("Operador NOT (!)");
console.log(`!false = ${!false}`); // verdadeiro
console.log(`!true = ${!true}`); // falso
