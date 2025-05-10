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
const nomeDog = "tHoR%";
//let nomeFormatado = nomeDog.replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "")

console.log(nomeDog)


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