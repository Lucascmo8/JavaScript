var numero = document.getElementById("input_num")
var select = document.getElementById("select")
var resposta = document.getElementById("res")
var conjunto = []

function adicionar() {
    if (numero.value < 1 || numero.value > 100) {
        alert(`O Número ${numero.value} não foi aceito, por favor adicione um numero válido`)
    } else if (conjunto.indexOf(Number(numero.value)) != -1) {
        alert(`O Número já foi utilizado`)
    } else {
        conjunto.push(Number(numero.value))
        let grupo = document.createElement('option')
        grupo.text = `Valor ${Number(numero.value)} foi adicionado`
        grupo.value = `${Number(numero.value)}`
        select.appendChild(grupo)
        resposta.innerHTML = ""
    }
    numero.value = ""
    numero.focus()
}
function somar(index){
    let resultado = 0
    for(let soma = 0; soma < index.length; soma+=1){
        resultado = resultado + index[soma]
    }
    return resultado
}
function finalizar() {
    resposta.innerHTML = ""
    if (conjunto.length == 0) {
        alert(`Por favor adicionar valores antes de finalizar`)
    } else {
        if (conjunto.length == 1) {
            resposta.innerHTML += `Você adicionou <u>${conjunto.length}</u> número`
        } else {
            resposta.innerHTML += `Você adicionou ao todo <u>${conjunto.length}</u> números`
        }
        resposta.innerHTML +=`<br>O menor número foi <u>${conjunto.sort((a,b)=>a-b)[0]}</u>`
        resposta.innerHTML +=`<br>O maior número foi <u>${conjunto.sort((a,b)=>a-b)[conjunto.length -1]}</u>`
        resposta.innerHTML +=`<br>O somatório deu <u>${somar(conjunto)}</u>`
        resposta.innerHTML +=`<br>A média deu <u>${somar(conjunto) / conjunto.length}</u>`
        resposta.innerHTML +=`<br><input type="button" value="Limpar" onclick="limpar()">`
    }
}

function limpar(){
    location.reload(true)
}