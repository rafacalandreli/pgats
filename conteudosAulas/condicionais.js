
/**
 * If, else, else if 
 */

if(10>5)  {
    console.log('valor eh maior')
} else {
    console.log('valor eh menor')
}

if(10<5)  {
    console.log('valor eh maior')
} else {
    console.log('valor eh menor')
}

const idade = 1
const porte = "P"

if(idade > 2) {
    console.log("Pode ser adotado pela idade")
} else if (porte === 'P') {
     console.log("Pode ser adotado pelo porte")
} else {
     console.log("Não pode ser adotado")
}

/** Switch case -> Usado em casos de multiplas condicoes Acima de 3*/
const peso = 15

switch (true) {
    case peso <=10 :
        console.log('P')
        break
    case peso > 10 && peso <= 20: 
        console.log('M')
        break
    case peso >20 : 
        console.log('G')
        break
    default: //else
        console.log('ND')
}

switch (peso) {
    case 10 :
        console.log('P')
        break
    case 20: 
        console.log('M')
        break
    case 30 : 
        console.log('G')
        break
    default: //else
        console.log('ND')
}