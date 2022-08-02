var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var body = window.document.body
var main = window.document.getElementById("principal")
var resposta = window.document.getElementById("res")
var imagem = window.document.getElementById("imagem")

if (hora >= 0 && hora < 6) { //dawn ou madrugada
    resposta.innerText = `Boa madrugada, são ${hora}:${minuto} horas`
    main.innerHTML += `<img src="fotos/madrugada.jpg" alt="madrugada">`
    body.style.backgroundColor = "#2F1B25"
    body.style.color = "#D5ECD4"
    main.style.backgroundColor = "#929487"
} else if (hora >= 6 && hora < 12) { // morning ou manhã
    resposta.innerText = `Bom dia, são ${hora}:${minuto} horas`
    main.innerHTML += `<img src="fotos/dia.jpg" alt="dia">`
    body.style.backgroundColor = "#5BC0EB"
    body.style.color = "#404E4D"
    main.style.backgroundColor = "#F5E663" //#E55934
} else if (hora >= 12 && hora < 18) { //afternoon ou tarde
    resposta.innerText = `Boa tarde, são ${hora}:${minuto} horas`
    main.innerHTML += `<img src="fotos/tarde.jpg" alt="dia">`
    body.style.backgroundColor = "#FDE74C"
    body.style.color = "#272727"
    main.style.backgroundColor = "#E55934"
} else if (hora >18 && hora <24){ // night ou noite
    resposta.innerText = `Boa noite, são ${hora}:${minuto} horas`
    main.innerHTML += `<img src="fotos/noite.jpg" alt="dia">`
    body.style.backgroundColor = "#001427"
    body.style.color = "#F4D58D"
    main.style.backgroundColor = "#521945"
} else { // no time found ou não foi encontrado um horário
    resposta.innerText = `Horario não encontrado`
    main.innerHTML += `<img src="fotos/semHora.jpg" alt="dia">`
    body.style.backgroundColor = "white"
    body.style.color = "black"
    main.style.backgroundColor = "lightgray"
}