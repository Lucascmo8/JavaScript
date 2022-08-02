var inicio = window.document.getElementById("inicio")
var fim = window.document.getElementById("final")
var passo = window.document.getElementById("passo")
var resposta = window.document.getElementById("res")

function contar() {
    var f = Number(fim.value)
    var p = Number(passo.value)
    var i = Number(inicio.value)
    if(i > f ){
        alert(`Favor preencher o número do inicio maior do que o número do fim`)
        resposta.innerText = "Preparando contagem..."
    }else if(p <= 0){
        alert(`Favor colocar o um número diferente de 0`)
        resposta.innerText = "Impossível fazer a contagem..."
    }else{
    resposta.innerHTML = `<p>Vamos começar:</p>`
    for (i; i <= f; i += p) {
        resposta.innerHTML += `${i} &#X1F449`
    }
    resposta.innerText+= `\u{1f3c1}`
}}





// var f = 10
// var p = 2

// for(var i = 1; i <= f; i+=p){
//     console.log(`bom dia ${i}`)
// }