
function verificarSePodeSerAdotado(animal){
    if(animal.idade >= 2 || animal.porte === 'pequeno') {
        animal.apto = true
    } else{
        animal.apto = false;
    }
}

function exibirAnimal(animal) {
    verificarSePodeSerAdotado(animal);
    const status = animal.apto ? "pode" : "não pode";
    console.log(`${animal.nome} ${status} ser adotado`);
}

let animal1 = {
    nome: "Pipoca",
    idade: 2,
    apto: true,
    porte: "grande"
};

let animal2 = {
    nome: "Bilu",
    idade: 1,
    apto: true,
    porte: "grande"
};

let animal3 = {
    nome: "Amora",
    idade: 1,
    apto: true,
    porte: "pequeno"
};

let animal4 = {
    nome: "Bolinha",
    idade: 2.5,
    apto: true,
    porte: "medio"
};

console.log("--- Seja Bem vindo ao Mundo da Adoção -----")
const animais = [animal1, animal2, animal3, animal4]

animais.forEach(exibirAnimal)
/*
exibirAnimal(animal1);
exibirAnimal(animal2);
exibirAnimal(animal3);
*/
