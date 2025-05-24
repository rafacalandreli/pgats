
function exibirAnimal(animal) {
    console.log(`Nome do Dog: ${animal.nome}`);
    console.log(`Consumo diário do Dog: ${animal.qtdDiaria}`);
}

function calcularQuantidadeDiaria(animal) {
    animal.qtdDiaria = ((animal.peso * 30) / 1000);
    console.log(`${animal.nome} consome ${animal.qtdDiaria} kgs por dia`);
}


function calcularConsumo(animais) {
    let consumo = 0;
     animais.forEach((animal) => 
         consumo = consumo + animal.qtdDiaria
     );
     console.log(`Consumo total eh de ${consumo}`)
     return consumo;
 }
 
 
 function calcularDuracaoEstoque(consumo, estoque) {
    let duracaoEstoque = 0;
    duracaoEstoque = estoque / consumo
    console.log(`O estoque vai durar ${duracaoEstoque.toFixed(2)} dias`)
  }
  

let animal1 = {
    nome: "Pipoca",
    idade: 2,
    peso: 12,
    qtdDiaria: 0,
    porte: "grande"
};

let animal2 = {
    nome: "Bilu",
    idade: 1,
    peso: 21,
    qtdDiaria: 0,
    porte: "grande"
};

let animal3 = {
    nome: "Amora",
    idade: 1,
    peso: 2,
    qtdDiaria: 0,
    porte: "pequeno"
};

let animal4 = {
    nome: "Bolinha",
    idade: 2.5,
    peso: 8,
    qtdDiaria: 0,
    porte: "medio"
};

let animal5 = {
    nome: "Bento",
    idade: 3,
    peso: 28,
    qtdDiaria: 0,
    porte: "grande"
};

console.log("--- Seja Bem vindo ao Calculador de Ração diario-----")
const animais = [animal1, animal2, animal3, animal4, animal5]
const estoqueRacao = 20;

animais.forEach(calcularQuantidadeDiaria);

const consumoTotalDiario = calcularConsumo(animais);
console.log(`Atualmente temos ${animais.length} animais`)
calcularDuracaoEstoque(consumoTotalDiario, estoqueRacao)

