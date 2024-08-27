const botoesCarrosel = (document.querySelectorAll(".botao"));
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");


botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desativarBotaoSelecionado();
        botao.classList.add("selecionado");

        esconderImagemAtiva();

        mostrarImagemAtiva(indice);

        esconderInformacoesAtiva();

        mostrarInformacoesAtivas(indice);

    });

});


function mostrarInformacoesAtivas(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemAtiva(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderInformacoesAtiva() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");

    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");

    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}

