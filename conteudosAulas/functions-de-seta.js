//funcao nomeada com parametro sem retorno

const exibirNomeDoDog = (nome) => {
    console.log(nome)
}

const exibirPorteDoDog = (porte = 'ND') => {
    console.log(porte)
}

const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}

const obterObjetoDog = () => {
    return {
        nome: 'Bailey Maria',
        peso: 11.5
    }
}

const listaDeObjetosDog = () => {
    return [{
        nome: 'Bailey Maria',
        peso: 11.5
    },{
        nome: 'Bianca Maria',
        peso: 11.1
    }]

}

const listaDeNomeDeDogs = () => {
    return [
        'Pituca',
        'Mara',
        'Jojo'
    ]
}

