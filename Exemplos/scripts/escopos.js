// Escopo de váriavel global.

var globalNome = 'Paulo'
let globalIdade = 25
const globalProfissao = 'Analista'

// Qualquer váriavel declaro fora de uma função ou bloco, é uma váriavel global
// Ou seja, ela está acessivel em todo o código e por todo script que possui acesso ao código
// Ela se torna uma propriedade do objeto Global

// Vou criar uma função e um bloco para verificar o acesso das váriaveis a cima "globalNome, globalIdade, globalProfissao"

function exemplo(){

    console.log("Estas foram declaradas no escopo global: ", globalNome, globalIdade, globalProfissao)

}

exemplo() // Resultado no console do navegador


function exemploEscopoDeFuncao () {

    var globalNome = 'Tereza'
    let globalIdade = 45
    const globalProfissao = 'Desenvolvedora'

    console.log("Estas foram definidas dentro do escopo da funcao: ", globalNome, globalIdade, globalProfissao) // Perceba que as variáveis possuem o exato mesmo nome
    // mas não á conflitos, pois estas ultimas foram declaradas no escopo de função

}

exemploEscopoDeFuncao()

console.log("Ambas possuem o mesmo nome, mas estão declaradas em escopos distintos, retornando o valor relativo de onde está sendo chamado.")
console.log("Fim")

