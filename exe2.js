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


function isCompositeName(nome) {
    return /\s/.test(nome.trim());
}
 
function getFirstName(nome) {
    return nome.trim().split(/\s+/)[0];
}

function formatarNome(nome) {
    let nomeFormatado = nome.trim();
    if (isCompositeName(nomeFormatado)) {
        nomeFormatado = getFirstName(nomeFormatado);
    }
    return nomeFormatado.charAt(0).toUpperCase()+nomeFormatado.slice(1).toLowerCase();
}
  
const prompt = require('prompt-sync')();
const tipo = prompt("Qual eh o tipo de pet? G- Gato C- Cachorro ").trim().toLowerCase();

const animal ={}

if(tipo === "c" || tipo === "cachorro") { 
    animal.nome = prompt("Qual é o nome do seu cachorro? ")
    animal.idade = prompt("Qual é ao idade do seu cachorro? ")
    animal.peso = prompt("Qual é o peso do seu cachorro? ")
    animal.raca = prompt("Qual é a raça do seu cachorro? ").trim()
    animal.adotado = prompt("Ele foi adotado? ?(S/N) ").trim().toLowerCase();
    animal.racaMas = animal.raca[0].toUpperCase()+animal.raca.substring(1);

    const formatName = formatarNome(animal.nome)
    console.log("New Nome: "+ animal.nome)

    if(animal.adotado === "s"|| animal.adotado == "Sim"){
        console.log(`O ${formatName} tem ${animal.idade} anos, é da raça ${animal.racaMas}, tem ${animal.peso} kilos e foi adotado`);
    } else if(animal.adotado === "n"|| animal.adotado == "Não" || animal.adotado == "Nao"){
        console.log(`O ${formatName} tem ${animal.idade} anos, é da raça ${animal.racaMas}, tem ${animal.peso} kilos e não foi adotado`);
    }else{
        console.log(`O ${formatName} tem ${animal.idade} anos, é da raça ${animal.racaMas}, tem ${animal.peso} kilos e não foi informado se foi adotado`);
    }
} else if (tipo === "g"|| tipo === "gato") {
    animal.nome = prompt("Qual é o nome do seu gato? ")
    animal.idade = prompt("Qual é ao idade do seu gato? ")
    animal.peso = prompt("Qual é o peso do seu gato? ")
    animal.raca = prompt("Qual é a raça do seu gato? ").trim()
    animal.adotado = prompt("Ele foi adotado? ?(S/N) ").trim().toLowerCase();
    animal.racaMas = animal.raca.charAt(0).toUpperCase()+animal.raca.slice(1).toLowerCase();

    const formatName = formatarNome(animal.nome)
    console.log("New Nome: "+ animal.nome)

    if(animal.adotado === "s" || animal.adotado == "Sim"){
        console.log(`O ${animal.nome} tem ${animal.idade} anos, é da raça ${animal.racaMas}, tem ${animal.peso} kilos e foi adotado`);
    } else if(adotado === "n"|| adotado == "Não" || adotado == "Nao"){
        console.log(`O ${formatName} tem ${animal.idade} anos, é da raça ${racaMas}, tem ${animal.peso} kilos e não foi adotado`);
    }else{
        console.log(`O ${formatName} tem ${animal.idade} anos, é da raça ${animal.racaMas}, tem ${animal.peso} kilos e não foi informado se foi adotado`);
    }
    
} else {
    console.log("Tipo de animal não suportado")
}
