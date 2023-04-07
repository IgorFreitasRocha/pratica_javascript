// Coletar o nome do usuário ou número.

let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));
let valor = parseFloat(prompt("Digite um valor: "));


//Formatação de Strings
document.writeln(`Olá <strong>${nome}</strong>, você tem ${idade} anos. <br/>`);
document.writeln(`O seu nome é ${nome} e ele tem ${nome.length} letras. <br/>`);
document.writeln(`Transformando o nome ${nome} em maiúsculo fica <strong>${nome.toUpperCase()}</strong><br/>`)
document.writeln(`E transformando seu nome ${nome} para minúsculo fica <strong>${nome.toLowerCase()}</strong><br/>`)

//Formatação de Números
document.writeln(`O valor ${valor} com duas casas decimais fica ${valor.toFixed(2)}<br/>`)
document.writeln(`O valor ${valor} com quatro casas decimais fica ${valor.toFixed(4)}<br/>`)
document.writeln(`Converter o valor ${valor} para a moeda brasileira fica ${valor.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}`)

// to.LocateString -> Adiciona o ponto para dividir dezenas.
// style: 'currency', currency: 'BRL' -> Adicionar o R$ ou U$D na frente do número.


