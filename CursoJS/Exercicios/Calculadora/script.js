// Somar
function somar(){
    let v1 = window.document.getElementById('campo1')
    let v2 = window.document.getElementById('campo2')
    let resul = window.document.getElementById('resultadoSoma')

    let valor1 = Number(v1.value)
    let valor2 = Number(v2.value)

    let soma = valor1 + valor2

    resul.innerHTML = `O Resultado é:<strong> ${soma} </strong>`
}

// Subtrair
function subtrair(){

    let v1 = window.document.querySelector('input#campo3')
    let v2 = window.document.querySelector('input#campo4')
    let resul = window.document.querySelector('div#resultadoSub')

    let valor1 = Number(v1.value)
    let valor2 = Number(v2.value)

    let sub = valor1 - valor2

    resul.innerHTML = `O resultado é: <strong> ${sub} </strong>`

}

// Multiplicar
function multiplicar(){
    let v1 = window.document.querySelector('input#campo5')
    let v2 = window.document.querySelector('input#campo6')
    let resul = window.document.querySelector('div#resultadoMult')

    let valor1 = Number(v1.value)
    let valor2 = Number(v2.value)

    let mult = valor1 * valor2

    resul.innerHTML = `O resultado é: <strong> ${mult} </strong>`
}

// Dividir
function dividir(){
    let v1 = window.document.querySelector('input#campo7')
    let v2 = window.document.querySelector('input#campo8')
    let resul = window.document.querySelector('div#resultadoDiv')

    let valor1 = Number(v1.value)
    let valor2 = Number(v2.value)

    let div = valor1 / valor2

    resul.innerHTML = `O resultado é: <strong> ${div} </strong>`
}
