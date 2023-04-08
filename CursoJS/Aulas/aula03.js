// Estudos com o DOM

//arvore dom - document object model

/*
window.document.write('Olá mundo! <br/>') // escreve na tela
window.document.write(window.document.charset + '<br/>') // escreve a versão do navegador
window.document.write(window.navigator.appName + '<br/>') // escreve o nome do navegador
window.document.write(window.navigator.URL + '<br/>') // escreve a versão do navegador


let p1 = window.document.getElementsByTagName('p')[0] // seleciona o primeiro paragrafo
window.document.write('O primeiro paragrafo está escrito: <br/>' + p1.innerText) // escreve o texto do paragrafo)
p1.style.color = 'red' // muda a cor do texto do paragrafo

// Selecinar um elemento com a opção querySelector a mais moderna e recomendada.
let d = window.document.querySelector('div#teste')
d.style.background = 'blue'
d.style.color = 'white'
*/


// Como usar eventos

function clicar(){
    let area = window.document.getElementById('teste')
    area.innerText = 'Clicou na área'
    area.style.background = 'orange'

}

function entrou(){
    let entrar = window.document.getElementById('teste')
    entrar.innerText = 'Entrou na área'
    entrar.style.background = 'green'
}

function saiu(){
    let sair = window.document.getElementById('teste')
    sair.innerText = 'Saiu da área'
    sair.style.background = 'red'
}