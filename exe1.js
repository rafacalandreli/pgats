/**
 * Gerador de tags de identificação
 * 
 * Crie um script para gerar a etiqueta (tag) de identificação que sera presa na coleira de um cachorro
 * no abrigo. O dono ira informar nome, idade, peso, raça e se é adotado ou nao.
 */
const prompt = require('prompt-sync')();

while (novoPet == true) {


const tipo = prompt("Qual eh o tipo de pet? G- Gato C- Cachorro ").trim().toLowerCase();

const animal ={}

if(tipo === "c" || tipo === "cachorro") { 
    animal.nome = prompt("Qual é o nome do seu cachorro? ")
    animal.idade = prompt("Qual é ao idade do seu cachorro? ")
    animal.peso = prompt("Qual é o peso do seu cachorro? ")
    animal.raca = prompt("Qual é a raça do seu cachorro? ").trim()
    animal.adotado = prompt("Ele foi adotado? ?(S/N) ").trim().toLowerCase();
    animal.racaMas = animal.raca[0].toUpperCase()+animal.raca.substring(1);

    if(animal.adotado === "s"|| animal.adotado == "Sim"){
        console.log(`O ${animal.nome.toUpperCase()} tem ${idade} anos, é da raça ${animal.racaMas}, tem ${animal.peso} kilos e foi adotado`);
    } else if(animal.adotado === "n"|| animal.adotado == "Não" || animal.adotado == "Nao"){
        console.log(`O ${animal.nome.toUpperCase()} tem ${animal.idade} anos, é da raça ${animal.racaMas}, tem ${animal.peso} kilos e não foi adotado`);
    }else{
        console.log(`O ${animal.nome.toUpperCase()} tem ${animal.idade} anos, é da raça ${animal.racaMas}, tem ${animal.peso} kilos e não foi informado se foi adotado`);
    }
} else if (tipo === "g"|| tipo === "gato") {
    animal.nome = prompt("Qual é o nome do seu gato? ")
    animal.idade = prompt("Qual é ao idade do seu gato? ")
    animal.peso = prompt("Qual é o peso do seu gato? ")
    animal.raca = prompt("Qual é a raça do seu gato? ").trim()
    animal.adotado = prompt("Ele foi adotado? ?(S/N) ").trim().toLowerCase();
    animal.racaMas = animal.raca.charAt(0).toUpperCase()+animal.raca.slice(1).toLowerCase();

    if(animal.adotado === "s" || animal.adotado == "Sim"){
        console.log(`O ${animal.nome} tem ${animal.idade} anos, é da raça ${animal.racaMas}, tem ${animal.peso} kilos e foi adotado`);
    } else if(adotado === "n"|| adotado == "Não" || adotado == "Nao"){
        console.log(`O ${animal.nome.toUpperCase()} tem ${animal.idade} anos, é da raça ${racaMas}, tem ${animal.peso} kilos e não foi adotado`);
    }else{
        console.log(`O ${animal.nome.toUpperCase()} tem ${animal.idade} anos, é da raça ${animal.racaMas}, tem ${animal.peso} kilos e não foi informado se foi adotado`);
    }
    
} else {
    console.log("Tipo de animal não suportado")
}
}