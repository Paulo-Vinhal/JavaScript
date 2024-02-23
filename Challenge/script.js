function mostrarNumero(){
    let number = document.getElementById('n1').value
    console.log(number)
}

function mostrarTexto(){
    let string2 = document.querySelector("#string2").value
    console.log(string2)
}

function efetuarOperacao(){
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    let op = document.querySelector("#operacoes").value
    let resultado = document.getElementById("resultadoEx3")
    let resultadoEx3 = 0
    
    if(op == 'soma'){
        resultadoEx3 = x + y
        resultado.textContent = resultadoEx3
    }else if(op == 'subtracao'){
        resultadoEx3 = x - y
        resultado.textContent = resultadoEx3
    }else if (op == 'multiplicacao'){
        resultadoEx3 = x * y
        resultado.textContent = resultadoEx3
    }else if(op == 'divisao'){
        resultadoEx3 = x / y
        resultado.textContent = resultadoEx3
    }

}

function exibirTextoAlerta(){
    let texto = document.querySelector("#textoEx4").value
    alert(texto)
}

function valorBoleano(){
    let boleano = document.querySelector("#selectEx5").value;
    let res = document.getElementById("resEx5")
    if(boleano == "s"){
        res.innerHTML = "Você selecionou Verdadeiro"
    }else{
        res.innerHTML = "Você selecionou Falso"
    }


}

function gerarIteracoes(){
    let iteracoes = document.getElementById('iteracoes').value
    let retorno = document.getElementById('retornoEx6')
    let limite = 0

    while(limite <= iteracoes){
        retorno.innerHTML = retorno.innerHTML + limite + ', ' 
        if(limite == iteracoes){
            retorno.innerHTML = retorno.innerHTML + 'Finalizado'
        }
        limite++
    }


}

function ex7Executar(x,y,o, res){
    
    switch(o){
        case 's':
            res.innerHTML = x+y
            break;
        case 'sb':
            res.innerHTML = x-y
            break;
        case 'm':
            res.innerHTML = x*y
            break;
        case 'd':
            res.innerHTML = x/y
            break;
    }

}   

function exibirArray(){
    let arr = ['primeiro', 'segundo', 'terceiro', 'quarto'];
    
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }

}

function exibirObjeto(){

    let obj = {
        nome: "Paulo",
        idade: 25,
        profissao: "Gestor de Ativos de TI",
    }

    console.log(obj.nome, obj.idade, obj.profissao)

}


// Array padrão 
var arrayPadrao = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

// Objeto padrão
var objetoPadrao = {
    nome:"Tereza",
    idade: 45,
    profissao: "Cabeleleira"
}

function arrayComoParametro(x){

    for(let i in x){
        console.log(x[i])
    }

}

function objetoComoParametro(objeto){
    console.log(objeto.nome)
}


function parOuImpar(x){

    let res = document.querySelector('#ex13')

    if(x % 2 == 0){
        res.innerHTML = "O número é Par!"
    }else{
        res.innerHTML = "O número é Ímpar!"
    }

}