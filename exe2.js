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

function formatarTexto(nome) {
    let nomeFormatado;
    nomeFormatado = removerCaracteresEspeciais(nome);
    nomeFormatado = tornarAPrimeiraLetraMaiuscula(nomeFormatado);
    return nomeFormatado;
}

function tornarAPrimeiraLetraMaiuscula(nome){
    if (!nome) return "";
    return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase();
}

function verificarSeNomeValido(nome){
    return nome.split(" ").length === 1
}


function validarIdade(idade) {
    const numero = Number(idade);
    if (!idade || isNaN(numero) || numero < 0 || numero > 50 || !Number.isInteger(numero)) {
        return false;
    }

    return true;
}

function validarPeso(peso) {
    const numero = Number(peso);
    if (!peso || isNaN(numero) || numero < 0 || numero > 250 || !Number.isInteger(numero)) {
        return false;
    }

    return true;
}

function obterStatusAdocao(valor) {
    const resposta = String(valor).trim().toLowerCase();

    if (resposta === "s" || resposta === "sim") {
        return "foi adotado";
    } else if (resposta === "n" || resposta === "nao" || resposta === "não") {
        return "não foi adotado";
    } else {
        return "não foi informado se foi adotado";
    }
}



function preencherForm(animal, tipoPet){

    let nomeValido = false;
    let idadeValida = false;
    let pesoValido = false;

    while (!nomeValido) {
        animal.nomeOriginal = prompt(`Qual é o nome do seu ${tipoPet} ? `).trim();
        nomeValido = verificarSeNomeValido(animal.nomeOriginal);

        if (!nomeValido) {
            console.log("Só é suportado apenas 1 nome. Por favor, preencha novamente...");
        }
    }
    
    animal.nome = formatarTexto(animal.nomeOriginal);
    
    while (!idadeValida) {
        const entradaIdade = prompt(`Qual é a idade do seu ${tipoPet} ? `)
        idadeValida = validarIdade(entradaIdade);

        if (!idadeValida) {
            console.log("Por favor, insira uma idade válida entre 0 e 50.");
        }
        else {
            animal.idade = Number(entradaIdade);
            break;
        }
    }
    
    while (!pesoValido) {
        const entradaPeso = prompt(`Qual é o peso do seu ${tipoPet} ? `)
        pesoValido = validarPeso(entradaPeso);

        if (!pesoValido) {
            console.log("Por favor, insira um peso válido entre 0 e 250.");
        }
        else {
            animal.peso = Number(entradaPeso);
            break;
        }
    }
    animal.raca = prompt(`Qual é a raça do seu ${tipoPet} ? `).trim()
    animal.adotado = prompt("Ele foi adotado? (S/N) ").trim().toLowerCase();
    animal.statusAdocao = obterStatusAdocao(animal.adotado);

    animal.raca = formatarTexto(animal.raca);

    return animal;
}


function mostrarTag(animal) {
    console.log(`--------------------------------------------------------------------------------------------------------`);
    console.log(`------------------------------------- TAG CRIADA COM SUCESSO -------------------------------------------`);
    console.log(`Nome: ${animal.nome}`);
    console.log(`Idade: ${animal.idade} ano(s)`);
    console.log(`Peso: ${animal.peso} kg(s)`);
    console.log(`Raça: ${animal.raca}`);
    console.log(`Adotado: ${animal.statusAdocao}`);
    console.log(`--------------------------------------------------------------------------------------------------------`);
    console.log(`Nome Original: ${animal.nomeOriginal}`)
    console.log(`--------------------------------------------------------------------------------------------------------`);
}

function pegarTipoPet(){
    const tipoPet = prompt("Qual eh o tipo de pet? G- Gato C- Cachorro ").trim().toLowerCase();
    return tipoPet;
}

let novoPet = true;
let tipo;

console.log("--- Seja Bem vindo ao Mundo Pet -----")
while (novoPet) {
   
    let animal ={}
    tipo = pegarTipoPet()

    if(tipo === "c" || tipo === "cachorro") { 
        animal = preencherForm(animal, "Cachorro")
        mostrarTag(animal)

    } else if (tipo === "g"|| tipo === "gato") {
        animal = preencherForm(animal, "Gato")
        mostrarTag(animal)
        
    } else {
        console.log("Tipo de animal não suportado")
    }
    novoPet = prompt("Você possui mais algum outro Pet ? (S/N) ").trim().toLowerCase();
    if (novoPet === "sim" || novoPet === "s"){
        novoPet = true;
    } else {
        novoPet = false;
        console.log(`-----------------------------------------------------------------------------------`);
        console.log("Obrigado por usar o nosso sistema")
        console.log(`-----------------------------------------------------------------------------------`);
    }
}
