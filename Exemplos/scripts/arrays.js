// Praticando arrays

const mArray = ['Item1', 'Item2', 'Item3']

console.log(mArray[0])         // Acessando um elemento específico através do seu indice

console.log(mArray.toString()) // Converte o array em uma string com seus valores separados por virgula

console.log(mArray)            // Exibindo o array completo, retornando o tipo objeto

// Arrays podem armazenar qualquer tipo de dados primitivos, funções e até mesmo outro array.

console.log(mArray.length)    // Exibindo o tamanho do array

// Acessando o primeiro e o ultimo elemento do array, respectivamente

console.log(`Este é o primeiro elemento do array: ${mArray[0]}`)
console.log(`Este é o ultimo elemento do array: ${mArray[mArray.length - 1]}`)


// Concatenando arrays
const mSecondArray = new Array('Item 4', 'Item 5', 'Item 6')
const mTArray = ['Item 7', 'Item 8']
console.log(mArray.concat(mSecondArray, mTArray)) // Concatenando os 3 arrays

console.log('\n\n\n')

// Adicionando e removendo itens do array
console.log(mArray.push('item adicionado via metodo push'))
console.log(mArray)
console.log(mArray.pop())
console.log(mArray)

// Filter
console.log(mArray.filter())

