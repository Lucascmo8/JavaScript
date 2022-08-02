// var corDaCaneta1 = "cinza"
// var corDaCaneta2 = "vermelho"

// if (((corDaCaneta1 == "azul") || (corDaCaneta1 == "vermelha")) || ((corDaCaneta2 == "azul") || (corDaCaneta2 == "vermelha"))) {
//     console.log("obrigado")
// } else {
//     console.log("Eu gostaria de uma Azul ou Vermelha")
// }

// console.log(corDaCaneta2 == "vermelho" && corDaCaneta1 == "cinza")

// console.log(corDaCaneta1 == "cinza" ? "Tamo junto" : "Quero uma cinza")

// var n1 = 2

// console.log(n1 != 1)
let J1 = 0
let T3 = 4

5>=4 ?  J1 = 1 : J1 = 0

function completo6 (index){
    let res = 0;
    for (let joga = 0; joga <index.length ; joga +=1){
        res = res + index[joga]
    }
    return res
}

console.log(`oi ${completo6([J1, T3])}`)