

const pessoa = {

    nome: 'Andre', // Esta é uma propriedade simples do objeto, do tipo String
    sobrenome: 'Soares',
    idade: 26,
    profissao: 'Atendente',
    peso: 69.5,

    endereco: ['Rua da patria', 249, 'Santa Cecilia', 'MT', 'Brasil'], //Podemos utilizar arrays como propriedades, tanto simples como aninhados

    nomeCompleto: function(){
        console.log(this.nome,'',this.sobrenome );        // Este é um metódo de um objeto
    },

    exibirEndereco: function(){
        let txt = this.endereco[0] + ' Nº: ' + this.endereco[1] + ', ' + this.endereco[2] + ', ' + this.endereco[3] + ', ' + this.endereco[4]
        return txt
    }

}

console.log(pessoa.exibirEndereco()) // Exibindo o endereço completo no console, utilizando o método do objeto pessoa.

function exibirObejtoPeloNome(pessoa){
    
    document.querySelector('#retorno1').innerHTML = 'Nome: ' + pessoa.nome + ' ' + pessoa.sobrenome + ' idade: ' + pessoa.idade
    + ' Profissão: ' + pessoa.profissao + ' Peso: ' + pessoa.peso + '</br> Endereço: ' + pessoa.exibirEndereco()

}


function exibirObejtoComLoop(objeto){

    let res;

    for(let i in objeto){
        res += objeto[i] + ','
    }

    document.querySelector('#retorno2').innerHTML = res;

}