let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const placar_div = document.querySelector(".placar");
const resultado_div = document.querySelector(".resultado > p");
const pedra_div = document.getElementById("pedra");
const papel_div = document.getElementById("papel");
const tesoura_div = document.getElementById("tesoura");

function getescolhaComputador() {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const numAleatorio = Math.floor(Math.random()*3);
    return escolhas[numAleatorio];
}

function converterPalavras(palavra) {
    if (palavra === "pedra") return "Pedra";
    if (palavra === "papel") return "Papel";
    if (palavra === "tesoura") return "Tesoura";
    
}

function vitoria (usuario, computador) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const palavraUsuario = "você".fontsize(3).sub();
    const palavraComp = "comp".fontsize(3).sub();
    resultado_div.innerHTML = converterPalavras(usuario) + palavraUsuario + " vence " + converterPalavras(computador) + palavraComp + ". Você venceu!";
    document.getElementById(usuario).classList.add('brilho-verde');
    setTimeout(function () { document.getElementById(usuario).classList.remove('brilho-verde')}, 700);
    /* outra forma de fazer
    resultado_div.innerHTML = `${converterPalavras(usuario)}  vence  ${converterPalavras(computador)}. Você venceu!`;
    */
}



function derrota (usuario, computador) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const palavraUsuario = "você".fontsize(3).sub();
    const palavraComp = "comp".fontsize(3).sub();
    resultado_div.innerHTML = converterPalavras(usuario) + palavraUsuario + " perde para " + converterPalavras(computador) + palavraComp + ". Você perdeu!";
    document.getElementById(usuario).classList.add('brilho-vermelho');
    setTimeout(function () { document.getElementById(usuario).classList.remove('brilho-vermelho')}, 700);
}

function empate (usuario, computador) {
    const palavraUsuario = "você".fontsize(3).sub();
    const palavraComp = "comp".fontsize(3).sub();
    resultado_div.innerHTML = converterPalavras(usuario) + palavraUsuario + " e " + converterPalavras(computador) + palavraComp + " são iguais. Empate!";
    document.getElementById(usuario).classList.add('brilho-cinza');
    setTimeout(function () { document.getElementById(usuario).classList.remove('brilho-cinza')}, 700);
}

function game(escolhaUsuario) {
    const escolhaComputador = getescolhaComputador();
    switch (escolhaUsuario + escolhaComputador) {
        case "pedratesoura":
        case "papelpedra":
        case "tesourapapel":
            vitoria(escolhaUsuario, escolhaComputador);
            break;
        case "pedrapapel":
        case "papeltesoura":
        case "tesourapedra":
            derrota(escolhaUsuario, escolhaComputador);
            break;
        case "pedrapedra":
        case "papelpapel":
        case "tesouratesoura":
            empate(escolhaUsuario, escolhaComputador);
            break;     
    }
}

function main () {
    pedra_div.addEventListener('click', function() {
        game("pedra");
    })

    papel_div.addEventListener('click', function() {
        game("papel");
    })

    tesoura_div.addEventListener('click', function() {
        game("tesoura");
    })
}

main();
