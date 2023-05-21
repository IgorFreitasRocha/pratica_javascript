// Função de soma

function adicao(){

    // Primeiro passo é pegar os elementos no HTML e guardar em uma variável
    let cx1 = window.document.getElementById('caixa1')
    let cx2 = window.document.getElementById('caixa2')
    let resul = window.document.querySelector('div#resultado')

    // Segundo passo é transformar o elemento em Number e guardar em uma outra variavel (Originalmente é uma String)
    let num1 = Number(cx1.value)
    let num2 = Number(cx2.value)

    // Criar uma variavel com a operação, neste caso é a SOMA
    let soma = num1 + num2

    // O último passo é adicionar o resultado da operação na span 'resultado'
    resul.innerHTML = `A soma de ${num1} e ${num2} é igual a: <strong>${soma}</strong>`



}