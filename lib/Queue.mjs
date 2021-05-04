/*
   ESTRUTURAS DE DADOS FILA

   - Fila é uma lista linear de acesso restrito, que permite operações
     de enfileiramneto (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo no final
     e asegunda no inicio da estrutura.
   - Como consequência, a pilha funciona pelo princípio FIFO (First In, First Out -
     primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são tarefas que envolvem o processamento de tarefas
    por ordem de chegada. 

*/
export class Queue {

    #data

    constructor() {
        this.#data = []     // Vetor vazio
    }

    // Inserção na fila (enfileiramento)
    enqueue(val) {
        this.#data.push(val)
    }

    // Remoção da fila (desenfileiramento)
    dequeue() {
       return this.#data.shift() 
    }

    // "Espiadinha" (no inicio)
    peek() {
        return this.#data[0]
    }

    get empty() {
        return this.#data.length === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}