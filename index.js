console.log("Hello world")

console.error("Falha na execução")

console.warn("Atenção!")

console.table({
    nome: 'Samu',
    turma: '02',
    disciplina: 'Prog JS'
})

/**
 * Constantes e Variaveis
 */

//const - para infor que nunca mudam

const nome = "Loki"
const raca = "SRD/Vira Lata"
const sexo = "Macho"
const cor = "Caramelo"
const dataNascimento = "01/01/2020"
const porte = "M"
// var ou let - para info que podem mudar

let idade = 5
let peso = 10.5
var vacinado = true
var castrado = false
var tamanho = 'M'

console.log(nome, raca, sexo, cor)

/**
 * Tipos de dados
 * 
 * undefined
 * boolean
 * string
 * number
 * bigInt
 * Symbol
 * null
 */

const numeroAula = "03"
const turma = "02"
const diaSemana = "Sabado"
let data = "05 de Abril"

console.log(`Aula ${numeroAula} da Turma ${turma} no ${diaSemana} dia ${data}`)

console.log(numeroAula.length)

//STRINGS
//splint separa a string
const nomeDeAlunos = "Giu Marcus Bruno Maria"
const nomeDeAlunosSplit = nomeDeAlunos.split(" ")
console.log(nomeDeAlunosSplit)

//lowerCase and UpperCase
console.log(nomeDeAlunos.toLowerCase())
console.log(nomeDeAlunos.toUpperCase())

//includes na lista
console.log(nomeDeAlunos.includes("Joao"))
console.log(nomeDeAlunos.includes("Giu"))
console.log(nomeDeAlunos.toLowerCase().includes("giu"))

console.log(nomeDeAlunos.replaceAll('a', 'i'))

const conceitosLogica = "            inteiro real cadeia de caracteres....      "
console.log(conceitosLogica.trim()); 

let data2 = "05 de Abril"
console.log("A data é: " + data2.slice(0, 2));
console.log("A data é: " + data2.substring(0, 2));

//A difereça eh apenas em algumas exececoes

//Exercicio
/* 1. Quais as 3 formas de declarar uma string em Javascript? "",´´ , ''
   2. O que o metodo .trim() faz? Ele remove os espaços em branco no inicio e no final da string
   3. Qual o resultado de "Dog".toUpperCase()? DOG
   4. Em que situação o uso de template strings com crease (´) pode tornar o codigo mais legivel do que concatenação com + ?  Muitas variaveis, muito grande a string
*/