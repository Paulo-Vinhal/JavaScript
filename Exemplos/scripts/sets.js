// Práticando Sets
// É uma coleção de valores exclusivos, ou seja, não a duplicidade de elementos


// Metodo construtor que inicia um Set
let colecao = new Set()

// Metodo responsável por adicionar itens ao Set
colecao.add('Objeto1') 
colecao.add('Objeto2')

// Adicionando váriaveis ao Set
let x = 'Objeto3'
colecao.add(x)

// Metodo responsável por percorrer cada item do Set e aplicar uma função
let txt = '' // Criando uma string vazia para armazenar os valores do Set através do método forEach()

colecao.forEach((elemento)=>{
    txt += elemento + ' ';
})

// console.log(txt)

console.log(colecao)

// Metodo para exibir todos os valores de um Set values()

console.log(colecao.values())