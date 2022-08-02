let num = [5 , 6 ,8]
num[3] = 9
num.push(4)
num[0] = 2

console.log(`As idades dos alunos são ${num}`)
console.log(`Temos ${num.length} alunos que informaram a idade`)
console.log(`Essa é a ordem do mais novo para o mais velho: ${num.sort()}`)
console.log(`O aluno mais novo tem ${num.sort()[0]} anos`)
console.log(`O aluno mais velho tem ${num.sort()[num.length - 1]} anos`)

// for(var indice = 0;indice <= (num.length - 1); indice++){
//     console.log(`Esse é o raking das notas ${num.sort()[indice]}`)
// }

for( let indice in num){
    console.log(`Esse é o raking das notas ${num.sort()[indice]}`)
}

let nota_8 = num.indexOf(4)

if(nota_8 < 0){
    console.log(`Nenhum aluno tem 8 anos`)
}else{
    console.log(`O aluno com 8 anos é o ${nota_8}`)
}