var idade = 64
if (idade >= 18 && idade < 70) {
    console.log("Seu voto é obrigatório")
} else if (idade >= 16 || idade >= 70) {
    console.log("Você pode votar, mas seu voto não é obrigatório")
} else {
    console.log("Você não tem idade para votar")
}

// var hora = 8
// if (hora >=0&& hora <6){
//     console.log("Boa Madrugada")
// }else if(hora >=6 && hora < 12){
//     console.log("Bom Dia")
// }else if(hora >=12 && hora < 18){
//     console.log("Boa tarde")
// }else{
//     console.log("Boa Noite")
// }

var horaReal = new Date()
var hora = horaReal.getHours()
if(hora >= 0 && hora <6){
    console.log("Boa Madrugada")
}else if (hora >=6 && hora < 12){
    console.log("Bom Dia")
}else if (hora >=12 && hora <18){
    console.log("Boa Tarde")
}else{
    console.log("Boa Noite")
}