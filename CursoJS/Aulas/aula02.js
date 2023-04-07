// Operadores Aritmétrico e de atribuição

let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite outro número: "))
let idade = Number(prompt("Digite a idade: "))
let idade2 = idade >= 18 ? 'Maior de Idade' :'Menor de Idade' // Operador ternário

document.writeln(`A adição entre os números <strong>${num1}</strong> e <strong>${num2}</strong> é: <strong>${num1+num2}</strong> <br/>`)
document.writeln(`A subtração entre os números <strong>${num1}</strong> e <strong>${num2}</strong> é: <strong>${num1-num2}</strong> <br/>`)
document.writeln(`A multiplicação entre os números <strong>${num1}</strong> e <strong>${num2}</strong> é: <strong>${num1*num2}</strong> <br/>`)
document.writeln(`A divisão entre os números <strong>${num1}</strong> e <strong>${num2}</strong> é: <strong>${num1/num2}</strong> <br/>`)
document.writeln(`O resto entre os números <strong>${num1}</strong> e <strong>${num2}</strong> é: <strong>${num1%num2}</strong> <br/>`)
document.writeln(`A potenciação entre os números <strong>${num1}</strong> e <strong>${num2}</strong> é: <strong>${num1**num2.toLocaleString('pt-BR')}</strong> <br/><br/>`)

// Operadores relacionais

document.writeln(`O número ${num1} é maior que o número ${num2}? <strong>${num1>num2}</strong><br/>`)
document.writeln(`O número ${num1} é maior ou igual que o número ${num2}? <strong>${num1>=num2}</strong><br/>`)
document.writeln(`O número ${num1} é menor que o número ${num2}? <strong>${num1<num2}</strong><br/>`)
document.writeln(`O número ${num1} é menor ou igual que o número ${num2}? <strong>${num1<=num2}</strong><br/>`)
document.writeln(`O número ${num1} é igual ao o número ${num2}? <strong>${num1==num2}</strong><br/>`)
document.writeln(`O número ${num1} é diferente do número ${num2}? <strong>${num1!=num2}</strong><br/><br/>`)

// Operadores lógicos

document.writeln(`O número ${num1} é maior que o número ${num2} <strong>E</strong> o resto do ${num2} é igual a 0: ${num1 > num2 && num2 % 2 == 0} <br/>`)
document.writeln(`O número ${num1} é menor que o número ${num2} <strong>OU</strong> o resto do ${num2} é igual a 0: ${num1 < num2 || num2 % 2 == 0} <br/>`)
document.writeln(`O número ${num1} é maior que o número ${num2} <strong>E</strong> o ${num2} <strong>NÃO É</strong> impar: ${num1 > num2 && num2 % 2 !== 1} <br/><br/>`)

// Operadores ternário
// Sintáxe → teste ? true : false

document.write(`${num1} é maior que ${num2}: ${num1>num2?'SIM':'NÃO'} <br/>`)
document.writeln(`A idade corresponde a <strong>${idade2}</strong>`)
