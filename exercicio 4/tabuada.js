function contar(){
let numero = document.getElementById("num_input")
let tabela = document.getElementById("select")
if (numero.value.length == 0){
    alert(`Por favor ,digite um número!`)
}else{
    let num = Number(numero.value)
    tabela.innerHTML = ""
    for(let c = 1; c<=10; c++){
        let item = document.createElement('option')
        item.text = `${num} * ${c} = ${num*c}`
        item.value = `tab${c}`
        tabela.appendChild(item)
    }
}
}