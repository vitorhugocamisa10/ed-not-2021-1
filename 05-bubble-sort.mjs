/*

BUBBLE SORT

Percorre o conjunto de dados, comparando o elemento atual com o seu
sucessor e promovendo a troca entre eles caso o primeiro seja maior
que o segundo.

Faz isso em várias passadas, até, que, na última delas, nenhuma troca
tenha sido registrada
*/

let totTrocas, passadas, comparacoes

function bubbleSort(vetor) {
    totTrocas = 0, passadas =0, comparacoes =0
    let trocas
    do {
        trocas = 0 // Iniciando uma nova passada
        passadas++

        // Percurso do vetor, da primeira até a PENÚLTIMA posição
        for(let i =0; i <= vetor.length - 2; i++) {
             if(vetor[i] > vetor[i + 1]) {
                
                 // Troca direta em JS via destruturação de vetor
                 [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                 trocas++
             }
             comparacoes++
        }
        totTrocas += trocas

    } while(trocas > 0)
}

//let nums = [7,4, 9, 0, 6, 1, 8, 2, 5, 3]

// Pior caso: vetor em ordem inversa
//let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// Melhor caso: vetor já ordenado
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('Antes: ', nums)
bubbleSort(nums)
console.log('Depois: ', nums)
console.log({totTrocas, passadas, comparacoes})

import { nomes } from './includes/100-mil-nomes.mjs'

console.log('Antes: ', nomes)
console.time('Ordenando por nomes...')
bubbleSort(nomes)
console.timeEnd('Ordenando por nomes...')
console.log('Depois: ', nomes)
console.log({totTrocas, passadas, comparacoes})