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

// Inserindo no final do vetor
frutas.push('amora') // Pode inserir mais de um elemento ao mesmo tempo
// Exemplo:
// frutas.push('amora', 'jaca')
console.log(frutas)

// Inserir no inicio do vetor
frutas.unshift('jaboticaba') // Também pode inserir mais de um elemento ao mesmo tempo
console.log(frutas)

// Inserção no meio do vetor
// Parâmetros do splice() para inserção
// 1° -> posição para inserção
// 2° -> n° de elementos a serem excluidos para inserção, usa-se 0
// 3° em diante -> elemento(s) que sera(ao) inserido(s)
frutas.splice(2,0, 'pêssego') // Inserindo a terceira posição
// Também funciona para inserir vários elementos ao mesmo tempo, por Ex.:
// frutas.splice(2,0, 'pêssego', 'jaca','nectarina')
console.log(frutas)

// Usando splice() para substituição
// Parâmetros:
// 1° -> posição para substituição
// 2° -> quantidade de elementos que serão excluidos (para substituição, 1)
// 3° -> o elemento que será incluido no lugar
frutas.splice(4,1, 'ameixa') // Substituição na 5° posição
console.log(frutas)

// Inserção múltipla com splice()
frutas.splice(1, 0, 'nectarina', 'jaca')
console.table(frutas)

/*
* PERCURSOS DE VETOR
*/

console.log('-------------------------------------------')

// 1) Percurso com for tradicional
// a) A contagem começa em zero (0 - primeiro elemento)
// b) Ocorre enquanto o contador for Menor que o número de elementos do vetor
// c) length termina com TH (língua mole)
// d) É o método mais flexível pois, se necessário, é possível fazer um percurso
// parcial (começar em algum elemento que não é o primeiro e terminar antes do final)
for(let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

console.log('-------------------------------------------')

// 2) For tradicional, em ordem inversa 
// a) O contador inicia-se em length - 1
// A condição é contador MAIOR OU IGUAL a zero (0 - primeiro elemento)
for(let i = frutas.length - 1; i >= 0; i --) {
    console.log(i, frutas[i])
}

// 3) Percurso com for .. of
// a) Sempre percorre o vetor inteiro, na ordem natural, sem necessidade de 
// uma variável contadora
// Variáveis:
// f -> variável que receberá cada elemento do vetor (pode ser qualquer nome
// válido de variável)
// frutas -> é o vetor a ser percorrido

//let x = 0
for(let f of frutas) {
    console.log(f)
    //console.log(x, f)
    //x++
}

console.log('-------------------------------------------')

// 4) Percurso com forEach()
// forEach() recebe como parâmetro uma função que recebe como parâmetro
// cada elemento do vetor
// O nome do parâmetro da função pode ser qualquer nome válido de identificador
frutas.forEach(function(elemento) {
    console.log(elemento)
})

console.log('-------------------------------------------')

// O mesmo forEach(), usando uma arrow function como parâmetro
frutas.forEach(elemento => console.log(elemento))