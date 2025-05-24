/* Seu Programa sobre função
*
  🚀 Hands-on
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata . O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.  
O campo abaixo é um campo de texto, logo, copie o código javascript e cole abaixo
*/

const prompt = require('prompt-sync')();

function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

function deixarItemMinusculo(item){
    return item.toLowerCase();
}


function agradecimento(){
    console.log(`-----------------------------------------------------------------------------------`);
    console.log("Obrigado por usar o nosso sistema")
    console.log(`-----------------------------------------------------------------------------------`);
}

function abertura(){
    console.log(`-----------------------------------------------------------------------------------`);
    console.log("----------------------- Seja Bem vindo ao contador de Vogais -----------------------")
    console.log(`-----------------------------------------------------------------------------------\n`);
    console.log("---------------- Veja a quantidade de Vogais de cada item da lista -----------------")
}

function removerItensVaziosNaLista(lista) {
    return lista.filter(item => {
        return typeof item === 'string' && item.trim().length > 0;
    });
}


function deixarPalavrasEmMinusculo(lista) {
    for (var i=0; i < lista.length; i++) {
        let itemMinusculo = deixarItemMinusculo(lista[i]);
        
        listaPadronizada.push(itemMinusculo);
    }
}

function contarVogaisLista(lista){
    for (var i=0; i < lista.length; i++) {
        let quantidadeVogais = contarVogais(listaPadronizada[i]);
        console.log(`O nome "${listaPadronizada[i]}" tem ${quantidadeVogais} vogais.`);
    }
}

var lista = ["joao", "Maria", "MARIANA", "pedro", " ", ' ', null];
var listaPadronizada = [];

abertura();
lista = removerItensVaziosNaLista(lista);
deixarPalavrasEmMinusculo(lista);
contarVogaisLista(lista);
agradecimento();
