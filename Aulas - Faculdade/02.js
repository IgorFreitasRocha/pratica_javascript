/*

Escreva um um script JS simples, usando if else, dentro de uma página html, para calcular o valor total de compra de um determinado lote de um mesmo produto. Conforme a quantidade comprada, o valor unitário de cada produto varia da seguinte forma:
Para as primeiras 50 unidades: 5,00/unidad
Para as próximas 100 unidades 4,00/unidade
Para as próximas 100 unidades 3,00/unidade
Para unidades acima de 250 2,00/unidade
O script deve solicitar que o usuário entre com a quantidade comprada. Exibir o valor total da compra.

*/


let quantidade = parseFloat(prompt("Qual é a quantidade: "))
let valor = ''

if (quantidade <= 50) {
    valor = quantidade * 5
} else if (quantidade > 100) {
    valor = 50 * 5 + (quantidade - 50) * 4
}



alert(`Você comprou ${quantidade}, a soma do valor é ${valor}`)


