import { Stack } from './lib/Stack2.mjs'

const texto = 'Socorram-me, subi no ônibus em Marrocos'

const pilha = new Stack()

// Empilhamento 
for(let i = 0; i < texto.length; i++) {
    pilha.push(texto.charAt(i))
}

console.log(pilha.print())

let textoRev = ''

// Desimpilhamento
while(! pilha.empty) {          
    textoRev += pilha.pop()
}
console.log(textoRev)