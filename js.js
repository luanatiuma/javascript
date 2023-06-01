console.log("Soma de dois números") // O comando console.log é como se fosse o "escreva" do portugol, porém só aparece a mensagem no console

var primeiroNumero = prompt("Digite o primeiro número") //O comando prompt é como se fosse o "leia" do portugol
var segundoNumero = prompt("Digite o segundo número") // O prompt aparece uma caixa para digitação na página

var soma = parseInt(primeiroNumero) + parseInt(segundoNumero) // A função parseInt transforma a string em inteiro, já que tudo que é digitado no prompt vira string

console.log("Soma: ", soma) //A concatenação pode ser feita tanto com "," quando com o "+"
console.log("Tipo da variável: ", typeof soma)

//Usar o let para declarar variável e não o var
//Como o Js é uma linguagem dinamicamente tipada, não é necessário declarar o tipo de variável, diferentemente do portugol

let contador = 0

// while(contador < 10) {
//     console.log(contador)
//     contador++
//     //é possível colocar o código console.log(contador++)
//     //se você quiser encrementar antes, ou seja, começar a contar do 1 e não do 0
//     //é só colocar console.log(++contador)
// }

do{
    console.log(contador++)
}
while(contador < 10)


function exemplo(){
    for(let i =0; i<10; i++){
        console.log(i)
    }
}
exemplo() //Esse comando "chama" a função para que ela possa ser executada
