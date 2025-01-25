let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clickConsole() {
    console.log('O botão "Console" foi clicado');
}

function clickAlert() {
    alert('Eu amo JS');
}

function clickPrompt() {
    console.log('O botão "Prompt" foi clicado');
    let cidade = prompt('Qual cidade você admira?');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function clickSoma() {
    console.log('O botão "Soma" foi clicado');
    let numero1 = parseInt(prompt('Informe o primeiro número'));
    let numero2 = parseInt(prompt('Informe o segundo número'));
    let soma = numero1 + numero2;

    alert('O resultado é: '+ soma);
}