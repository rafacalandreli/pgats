/**
 * Validador de nomes paras as tags
 * 
 * Alguns donos estão registrando os dogs com nomes mal formatados.
 * Crie um script para limpar e padronizar os nomes.
 * Aplique as formatações e exiba
 * O nome original, como foi cadastrado
 * O nome formatado
 * Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é valido ou não.
 * Ex: "    Anita Maia", " joao Pires ", "piPOca" 
 * A tag so suporta 1 nome
 */

const prompt = require('prompt-sync')();

function removerCaracteresEspeciais(nome) {
    return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
}

function removerEspacosEntreAPalavra(nome) {
    return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome){
    return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase();
}

function verificarSeNomeValido(nome){
    return nome.split(" ").length === 1
}

function preencherForm(animal, tipoPet){

    animal.nome = prompt(`Qual é o nome do seu ${tipoPet}? `)
    
    const valido = verificarSeNomeValido(animal.nome)

    let nomeValido = false;

    while (!nomeValido) {
        animal.nome = prompt(`Qual é o nome do seu ${tipoPet} ?`).trim();
        nomeValido = verificarSeNomeValido(animal.nome);

        if (!nomeValido) {
            console.log("Só é suportado apenas 1 nome. Por favor, preencha novamente...");
        }
    }

    animal.idade = prompt(`Qual é ao idade do seu ${tipoPet} ?`)
    animal.peso = prompt(`Qual é o peso do seu ${tipoPet} ? `)
    animal.raca = prompt(`Qual é a raça do seu ${tipoPet} ? `).trim()
    animal.adotado = prompt("Ele foi adotado? ?(S/N) ").trim().toLowerCase();
    animal.racaMas = tornarAPrimeiraLetraMaiuscula(racaMas);
    return animal;
}

function mostrarTag(animal) {
    const nome = animal.nome;
    const idade = animal.idade;
    const raca = animal.racaMas;
    const peso = animal.peso;
    const adotado = String(animal.adotado).toLowerCase();

    if (adotado === "s" || adotado === "sim") {
        statusAdocao = "foi adotado";
    } else if (adotado === "n" || adotado === "nao" || adotado === "não") {
        statusAdocao = "não foi adotado";
    } else {
        statusAdocao = "não foi informado se foi adotado";
    }

    console.log(`O ${nome} tem ${idade} anos, é da raça ${raca}, tem ${peso} kilos e ${statusAdocao}`);
}
  
const tipo = prompt("Qual eh o tipo de pet? G- Gato C- Cachorro ").trim().toLowerCase();

let animal ={}

if(tipo === "c" || tipo === "cachorro") { 
    animal = preencherForm(animal, "Cachorro")
    mostrarTag(animal)
   
} else if (tipo === "g"|| tipo === "gato") {
    
    animal = preencherForm(animal, "Gato")
    mostrarTag(animal)
    
} else {
    console.log("Tipo de animal não suportado")
}
