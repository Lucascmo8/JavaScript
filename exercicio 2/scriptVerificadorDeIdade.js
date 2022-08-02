var agora = new Date();
var ano = agora.getFullYear();

var masculino = window.document.getElementById("radio_masc")
var feminino = window.document.getElementById("radio_fem")
var resposta = window.document.getElementById("res")
var corpo = window.document.body
var main = window.document.getElementById("principal")
var imagem = window.document.getElementById("imagem")

function verificar() {
    var input_ano = window.document.getElementById("input_ano")
    var idade = ano - input_ano.value
    if (feminino.checked && (idade >= 0 && idade <= 12)) { /*criança menina*/
        resposta.innerText = `Você é uma menina de ${idade} anos`
        imagem.innerHTML = `<img src="imagens/criança_f.jpg" alt="menina">`
    } else if (feminino.checked && (idade >= 13 && idade < 18)) { /*adolescente menino*/
        resposta.innerText = `Você uma adolescente de ${idade} anos`
        imagem.innerHTML = `<img src="imagens/adolescente_f.jpg" alt="menina adolescente">`
    } else if (feminino.checked && (idade >= 18 && idade < 65)) { /*mulher*/ 
        resposta.innerText = `Você uma mulher adulta de ${idade} anos`
        imagem.innerHTML = `<img src="imagens/mulher.jpg" alt="mulher">`
    } else if (feminino.checked && (idade >= 65)) { /*mulher idosa*/
        resposta.innerText = `Você é uma mulher idosa de ${idade} anos`
        imagem.innerHTML = `<img src="imagens/idosa.jpg" alt="idosa">`
    } else if (masculino.checked && (idade >= 0 && idade <= 12)) { /*criança menino*/
        resposta.innerText = `Você é um menino de ${idade} anos`
        imagem.innerHTML = `<img src="imagens/criança_m.jpg" alt="menino">`
    } else if (masculino.checked && (idade >= 13 && idade < 18)) { /*adolescente menino*/
        resposta.innerText = `Você um adolescente de ${idade} anos`
        imagem.innerHTML = `<img src="imagens/adolescente_m.jpg" alt="menino adolescente">`
    } else if (masculino.checked && (idade >= 18 && idade < 65)) { /*homem*/
        resposta.innerText = `Você um homem adulto de ${idade} anos`
        imagem.innerHTML = `<img src="imagens/homem.jpg" alt="homem">`
    } else if (masculino.checked && (idade >= 65)) { /*homem idoso*/
        resposta.innerText = `Você é um homem idoso de ${idade} anos`
        imagem.innerHTML = `<img src="imagens/idoso.jpg" alt="menino">`
    } else if (input_ano.value > ano) {
        alert("Ano Inválido")
        resposta.innerText = `Por Favor preencha os campos acima`
        imagem.style.display = "none"
    }
}

/*efeito de cores se for masculino ou feminino*/
function homem() {
    corpo.style.backgroundColor = "#3A6EA5"
    main.style.backgroundColor = "#3B36B3"
    corpo.style.color = "#F2D43D"
    resposta.innerText = `Por Favor preencha os campos acima`
}

function mulher() {
    corpo.style.backgroundColor = "#FD96A9"
    main.style.backgroundColor = "#A63A4E"
    corpo.style.color = "#D4FCAE"
    resposta.innerText = `Por Favor preencha os campos acima`
}