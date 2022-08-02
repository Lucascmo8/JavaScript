/*chamada simples de função com parametro*/
function parOuImpar(n) {
    if (n % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}

let resposta = parOuImpar(12)
console.log(parOuImpar(223))

/*pré-definição de variaveis*/
function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(7, 8))

/*Fazendo a função ser chamada pelo nome da var*/
let v = function (x) {
    return x * 2
}

console.log(v(7))

/*funçao com Looping*/
function fatorial(nF) {
    let fat = 1
    for (let c = nF; c > 1; c--){
        fat *= c       
    }
    return fat
}

console.log(fatorial(8))

/*funçaõ sendo chamada de dentro da função*/
function fatorial_(nF2){
    if(nF2 == 1){
        return 1
    }else{
        return nF2 * fatorial_(nF2-1)
    }
}

console.log(fatorial_(6))