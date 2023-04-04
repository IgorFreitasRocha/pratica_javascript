function calcular() {
    // Obter valores dos campos de entrada
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    // Obter operador selecionado
    var operador = document.getElementById("operador").value;
    
    // Calcular resultado com base no operador
    var resultado;
    if (operador === "+") {
      resultado = num1 + num2;
    } else if (operador === "-") {
      resultado = num1 - num2;
    } else if (operador === "*") {
      resultado = num1 * num2;
    } else if (operador === "/") {
      resultado = num1 / num2;
    }
    
    // Exibir resultado
    document.getElementById("resultado").innerHTML = resultado;
}