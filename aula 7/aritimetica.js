var n1 = 34
var n2 = 73

var soma = n1 + n2

if (n1 >= n2) {
    var subtração = n1 - n2
} else {
    var subtração = n2 - n1
};

var multiplicação = n1 * n2

var divisão = n1 / n2
// if( n1 >= n2){ 
//     var divisão = n1 / n2
// } else{ var divisão = n2 / n1};

var restoDaDivisão = n1 % n2

var potência = n1 ** n2

console.log(`Os Números ${n1} e ${n2} dão os sequintes ressultados de maneira aritimética.
Na soma o resultado é ${soma}, 
Na subtração o resultado é ${subtração}, 
Na multiplicação o resultado é ${multiplicação}, 
Na divisão o resultado é ${divisão},
O resto da Divisão é ${restoDaDivisão},
Na potência o resultado é ${potência}
 `)

var n1 = ++n1
console.log(n1)