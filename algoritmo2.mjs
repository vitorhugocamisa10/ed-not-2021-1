// Código correspode ao algoritmo de busca binária

function k(m, n, fnComp) {    // Função de comparação
    let o = 0, p = m.length - 1, q
    while(p >= o) {
        q = Math.floor((p + o) / 2)
        if(m[q] === n) return q
        else if(n > m[q]) o = q + 1
        else p = q - 1
    }
    return -1  
}

import { countries } from './countries.mjs'   // Importa os objetos do aqruivo countries


console.log(countries)    // Imprime os valores dos objetos

