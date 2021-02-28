/*

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}


console.table(estado1)
estadosNe.push(estado1)

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/
let estado2 = {
    nome: 'Alagoas',
    sigla: 'AL',
    area: 27848,
    populacao: 3322820
}
console.table(estado2)
estadosNe.push(estado2)

let estado3 = {
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    area: 52811.05,
    populacao: 3479010
}
console.table(estado3)
estadosNe.push(estado3)

let estado4 = {
    nome: 'Paraíba',
    sigla: 'PB',
    area: 56469.78,
    populacao: 3996496
}
console.table(estado4)
estadosNe.push(estado4)


/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/

let densidade = (a, b) => a/b

/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/

for (let i = 0; i < estadosNe.length; i++) {
    let densidadedemografica
    densidade(i.area, i.populacao)
    return densidadedemografica
    i ['Densidade Demográfica'] = densidadedemografica
    delete i.sigla
}
console.log(estadosNe)

/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/

let propriedades = (objeto) => {
    for (const key in objeto) {
       console.log(key + " -> " + objeto[key])
    }
}



/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.

*/

   for (let objeto of estadosNe) {
    propriedades(objeto)
}

/*  
     6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.
*/

let nome_estados = []


nome_estados.unshift(estadosNe[1].nome)
nome_estados.splice(2,0,estadosNe[8].nome, estadosNe[5].nome, estadosNe[7].nome, estadosNe[3].nome,estadosNe[4].nome,estadosNe[6].nome, estadosNe[2].nome)
nome_estados.push(estadosNe[0].nome)
console.table(nome_estados)
