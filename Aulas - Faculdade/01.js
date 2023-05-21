/*

Escreva um script JS simples, inserido em uma página HTML, que solicite o nome, o salário atual e o cargo de um funcionário (pode ser gerente, vendedor ou outros).
O script deve reajustar o salário atual conforme os critérios a seguir:
- Se o cargo for gerente, aumentar o salário atual em 15%
- Se o cargo for vendedor, aumentar o salário atual em 8%
- Se for qualquer outro cargo, aumentar o salário em 3%.
Exibir o salário reajustado na saída com o nome do funcionário.

*/


let nome = prompt("Digite o seu nome: ")
let cargo = prompt("Qual o seu cargo atual: ")
let salario = Number(prompt("Qual o seu salário atual: "))
let reajuste = ''

if (cargo.toLowerCase() === 'gerente') {
    reajuste = (salario * 0.15) + salario
} else if (cargo.toLowerCase() === 'vendedor') {
    reajuste = (salario * 0.08) + salario
} else {
    reajuste = (salario * 0.03) + salario
}

alert(`Olá ${nome}, com o reajuste para cargo de ${cargo}, o seu novo salário é ${reajuste.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}`)

