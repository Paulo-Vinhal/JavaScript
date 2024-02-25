// JavaScript Maps
// Uma mapa é uma coleção de chave/valores onde a ordem de inserção é lembrada.


// Criando um map através do seu método construtor
let novoMapa = new Map([
    ['Maçãs', 500],
    ['Bananas', 350],
    ['Laranjas', 150]
])

// Adicionando elementos ao map
novoMapa.set('Abacaxi', 100)

// Alterando o valor de um elemento com o mesmo método
novoMapa.set('Maçãs', 510)

// Retornando o valor de um elemento
console.log(`Retornando a quantidade de bananas: ${novoMapa.get('Bananas')}`)

// Retornando o tamanho do map
console.log(`Tamanho da coleção: ${novoMapa.size}`)

// Exibindo o mapa no console
console.log(novoMapa)

// Deletando um elemento do mapa
novoMapa.delete('Abacaxi')

console.log(novoMapa)

// Verificando se dentro do mapa existe um valor com o metodo has()
console.log(novoMapa.has('Laranjas'))
console.log(novoMapa.has('Abacaxi'))

// Metodo forEach() chama uma função para cada chave/valor do map
let txt = ''

novoMapa.forEach((value, key) => {
    txt += key + ' = ' + value + ' '
})

console.log(txt)


console.log(novoMapa.entries())