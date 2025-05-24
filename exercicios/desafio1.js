/* Seu Programa sobre função
*
  🚀 Hands-on
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.  
O campo abaixo é um campo de texto, logo, copie o código javascript e cole abaixo
*/

const prompt = require('prompt-sync')();

function retornaInteiros(lista){
    return lista.filter(item => typeof item === 'number');
}

function retornaString(lista){
    return lista.filter(item => typeof item === 'string');
}

function retornaBoolean(lista){
    return lista.filter(item => typeof item === 'boolean');
}

function agradecimento(){
    console.log(`-----------------------------------------------------------------------------------`);
    console.log("Obrigado por usar o nosso sistema")
    console.log(`-----------------------------------------------------------------------------------`);
}

function abertura(){
    console.log(`-----------------------------------------------------------------------------------`);
    console.log("----------------------- Seja Bem vindo ao exibidor de lista -----------------------")
    console.log(`-----------------------------------------------------------------------------------`);
}

function exibirListaPorTipo(lista) {
    while (novaLista) {
        const tipo = prompt("Você deseja ver apenas que tipo de dados na lista? Numeros Inteiros(1), Strings (2) ou Boolean (3): ").trim().toLowerCase();
    
        console.log(tipo === "1" ? retornaInteiros(lista)
                                : tipo === "2" 
                                ? retornaString(lista)
                                : tipo === "3" 
                                ? retornaBoolean(lista)
                                : "Valor inválido, por favor digite para Numeros Inteiros(1), Strings (2) ou Boolean (3)");
    
        novaLista = prompt("Você deseja ver outra lista (S/N)? ").trim().toLowerCase();
        novaLista = novaLista === "sim" || novaLista === "s";
    
        if(!novaLista) agradecimento()
    }
}


let novaLista = true;

var lista = ["este é o primeiro elemento", 15, true, "este é o segundo elemento", 20, 25, false];

abertura()
exibirListaPorTipo(lista)
