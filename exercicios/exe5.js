
let animal1 = {
    nome: "Pipoca",
    idade: 2,
    peso: 12,
    qtdDiaria: 0,
    porte: ""
};

let animal2 = {
    nome: "Bilu",
    idade: 1,
    peso: 21,
    qtdDiaria: 0,
    porte: ""
};

let animal3 = {
    nome: "Amora",
    idade: 1,
    peso: 2,
    qtdDiaria: 0,
    porte: ""
};

let animal4 = {
    nome: "Bolinha",
    idade: 2.5,
    peso: 8,
    qtdDiaria: 0,
    porte: ""
};

let animal5 = {
    nome: "Bento",
    idade: 3,
    peso: 28,
    qtdDiaria: 0,
    porte: ""
};

function calcularPorte(animal){
   animal.peso <= 10 ? animal.porte = "P" : animal.porte = "M" ;
}

function exibirAnimal(animal) {
    console.log(`Nome do Dog: ${animal.nome}`);
    console.log(`Porte do Dog: ${animal.porte}`);
    console.log("--------")
}

console.log("--- Seja Bem vindo ao Calculador de Porte do seu Dog-----")
const animais = [animal1, animal2, animal3, animal4, animal5]

animais.forEach(calcularPorte);

animais.forEach(exibirAnimal);

/** Classificador de Porte
 * Ate 10kg Pequeno
 * Maior que 10 M
 */