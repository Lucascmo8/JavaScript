// var agora = new Date()
// var mes = agora.getMonth()
var dia = window.document.getElementById("dia")
var mes = window.document.getElementById("mes")
var main = window.document.getElementById("main")
var corpo = window.document.body
function verificar(){
if ((dia.value >= 21 && mes.value == "Dezembro"
) || (dia.value >= 1 && mes.value == "Janeiro"
) || ((dia.value >= 1 && dia.value <= 28) && mes.value == "Fevereiro"
) || (dia.value <= 19 && mes.value == "Março")) {
    var estaçao = "Verão"
} else if ((dia.value >= 20 && mes.value == "Março"
) || ((dia.value >= 1 && dia.value <= 30) && mes.value == "Abril"
) || (dia.value >= 1 && mes.value == "Maio"
) || (dia.value <= 20 && mes.value == "Junho")) {
    var estaçao = "Outono"
} else if (((dia.value >= 21 && dia.value <= 30) && mes.value == "Junho"
) || (dia.value >= 1 && mes.value == "Julho"
) || (dia.value >= 1 && mes.value == "Agosto"
) || (dia.value <= 22 && mes.value == "Setembro")) {
    var estaçao = "Inverno"
} else if (((dia.value >= 23 && dia.value <= 30) && mes.value == "Setembro"
) || (dia.value >= 1 && mes.value == "Outubro"
) || ((dia.value >= 1 && dia.value <= 30) && mes.value == "Novembro"
) || (dia.value <= 20 && mes.value == "Dezembro")) {
    var estaçao = "Primavera"
} else {
    console.log("Data invalida")
}

switch (estaçao) {
    case "Verão":
        console.log(`Será verão`)
        alert(`verão é bom`)
        break
    case "Outono":
        console.log(`Será outono`)
        corpo.classList.add("outono")
        var img = document.createElement('img')
        img.setAttribute('src' , 'fotos/outono.jpg')
        main.appendChild(img)
        break
    case "Inverno":
    console.log(`Será inverno`)
    break
    case "Primavera":
    console.log(`Será primavera`)
    break
}
    
}
// var dia.value = 12
// var mes.value = "Novembro"
