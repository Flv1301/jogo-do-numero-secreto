/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(seletor, texto){
    let tag = document.querySelector(seletor);
    tag.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.6});
}

exibirTextoNaTela('h1','Hora do Desafio');

function mensagemClique(){
    console.log('O botão foi clicado!');
}

function mensagemAlerta(){
    console.log('Eu amo JS');
}

function mensagemPrompt(){
    let cidade = prompt('Diga o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somar(){
    let num1 = prompt('Informe o 1º número');
    let num2 = prompt('Informe o 2º número');
    alert(`${num1} + ${num2} = `+(parseInt(num1)+parseInt(num2)));
}

function gerarNumeroSecreto(){
    let numMinimo = parseInt(prompt("Informe o valor mínimo do intervalo:"));
    let numMaximo = parseInt(prompt("Informe o valor máximo do intervalo:"));
    let mensagemChute = `Escolha um número entre ${numMinimo} e ${numMaximo}`;
    let numeroSecreto = parseInt(Math.random() * numMaximo + numMinimo);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    exibirTextoNaTela('p', mensagemChute);
    
    if(quantidadeDeElementosNaLista == (numMaximo - numMinimo + 1)){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroSecreto)){
        gerarNumeroSecreto();
    }else{
        listaDeNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(chute == numeroSecreto)
    //console.log(numeroSecreto);
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
    limparCampo();
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1','Hora do Desafio');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}








