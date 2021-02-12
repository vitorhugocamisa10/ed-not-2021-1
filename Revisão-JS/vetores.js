let frutas = ['maçã', 'laranja', 'pera', 'uva', 'mamão', 'banana']

// Vetor original
console.log(frutas)

// Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop()

// Vetor aletrado
console.log(frutas)
console.log(ultimaFruta)

// Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Remoção em posição intermediária
// 1° parâmetro -> a posição de remoção (contagem começa em 0)
// 2° parâmetro -> a quantidade de elementos a remover
let terceiraFruta = frutas.splice(2,1) // SEMPRE retornará um vetor

console.log(frutas)
console.log(terceiraFruta)
