
let animal1 = {
    nome: "Pipoca",
    idade: 2,
    peso: 12,
    qtdDiaria: 0,
    porte: "M",
    atividade: "",
    tempo: 12
};

let animal2 = {
    nome: "Bilu",
    idade: 1,
    peso: 21,
    qtdDiaria: 0,
    porte: "G",
    atividade: "",
    tempo: 40
};

let animal3 = {
    nome: "Amora",
    idade: 1,
    peso: 2,
    qtdDiaria: 0,
    porte: "P",
    atividade: "",
    tempo: 20
};

let animal4 = {
    nome: "Bolinha",
    idade: 2.5,
    peso: 8,
    qtdDiaria: 0,
    porte: "P",
    atividade: "",
    tempo: 28
};

let animal5 = {
    nome: "Bento",
    idade: 3,
    peso: 28,
    qtdDiaria: 0,
    porte: "G",
    atividade: "",
    tempo: 15
};

function calcularAtividade(animal){
   switch(animal.porte){
    case "P":
        animal.atividade = "Brincar dentro de casa";
        break
    case "M":
        animal.atividade = "Caminhada no quarteirao";
        break
    case "G": 
        animal.atividade = "Correr no parque";
        break
    default: console.log("Porte inválido")
   }

   if(animal.tempo < 15) {
    console.log(`Atividade rápida: [${animal.atividade}]`);
   } else if(animal.tempo >= 15 && animal.tempo <= 30){
    console.log(`Tempo ideal: [${animal.atividade}]`);
   }else if(animal.tempo > 30 ){
    console.log(`Hora da diversao: [${animal.atividade}]`);
   }

}

function exibirAnimal(animal) {
    console.log(`Nome do Dog: ${animal.nome}`);
    console.log(`Porte do Dog: ${animal.porte}`);
    calcularAtividade(animal);
    console.log("--------")
}

console.log("--- Seja Bem vindo ao Calculador de Porte do seu Dog-----")
const animais = [animal1, animal2, animal3, animal4, animal5]



animais.forEach(exibirAnimal);

/** Classificador de Porte
 * Ate 10kg Pequeno
 * Maior que 10 M
 */