// Código correspode ao algoritmo de ordenação quickSort

/*
    Listagem das variáveis
    k - algoritmo de ordenação
    m - vetor
    n - inicio do vetor
    o - fim do vetor
    p - ordena o vetor (pivot)
    FnComp - Função de comparação
    i - conta a sub-função
    q - separa os subvetores do vetor principal (div) 

*/

function k(m, n = 0, o = m.length - 1, fnComp) {   // Função de comparação. 
    if(o <= n) return   // Retorna o valor
    const p = o
    let q = n - 1   // Cria a váriavel (div)
    for(let i = n; i < o; i++) {  // Cria a sub-função
        if(m[i] < m[p]) {
            q++  // (div) vai andar duas casas
            if(i !== q) [ m[i], m[q] ] = [ m[q], m[i] ]
        }
    }

     if(fnComp(m[p], m[i])) {   // Função de comparação para fazer a ordenação
                comps++  
                q++
                if(i !== div) {
                    [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                    trocas++
                }
            }
        

    q++
    if(m[p] < m[q]) [ m[p], m[q] ] = [ m[q], m[p] ]
    k(m, n, q - 1)
    k(m, q + 1, o)
}

import { countries } from './countries.mjs'   // Importa os objetos do aqruivo countries


console.log(countries)   // Imprime os valores dos objetos