//funcao nomeada com parametro sem retorno

function exibirNomeDog(nome){
    console.log(nome)
}

// funcao nomeada, com parametro (valor default e sem retorno
function exibirPorteDoDog(porte = "Grande"){
    console.log(porte)
}

// funcao nomeada, com parametro (valor default e sem retorno
function obterObjetoDog(){
    return {
        nome: 'Bailey Maria',
        peso: 11.5
    }
}

// funcao nomeada, com parametro (valor default e sem retorno
function listaDeObjetosDog(){
    return [{
        nome: 'Bailey Maria',
        peso: 11.5
    }]
}

function listaDeNomeDeDogs(){
    return [
        'Pituca',
        'Mara',
        'Jojo'
    ]
}




// funcao nomeada, com parametro e com retorno
function obterNomeDoDogFormatado(nome){
    return nome.toUpperCase()
}

exibirNomeDog("pipoca");
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("pipoca"));