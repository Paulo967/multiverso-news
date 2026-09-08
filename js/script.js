// VARIÁVEIS BÁSICAS
const nomePortal = "Clarim Diário";

let totalNoticias = 5;

console.log(nomePortal);
console.log(totalNoticias);


// FUNÇÃO
function mostrarMensagem() {
    console.log("Bem-vindo ao Clarim Diário!");
}

mostrarMensagem();


// ARRAY
const noticias = [
    "Homem-Aranha é visto em Nova York",
    "Jameson culpa Homem-Aranha pelo preço da pizza",
    "Professor é apontado como novo Duende Verde"
];

console.log(noticias);


// CONDICIONAL
let quantidadeNoticias = 5;

if (quantidadeNoticias > 2) {
    console.log("O portal tem várias notícias.");
} else {
    console.log("O portal ainda tem poucas notícias.");
}


// LOGO
const logo = document.querySelector(".logo-site");

if (logo) {

    logo.textContent = "CLARIM DIÁRIO ONLINE";

    logo.addEventListener("click", function () {
        logo.classList.toggle("logo-destaque");
    });

}


// MENSAGEM SECRETA
const botaoSecreto = document.querySelector("#botao-secreto");
const textoSecreto = document.querySelector("#texto-secreto");

if (botaoSecreto && textoSecreto) {

    botaoSecreto.addEventListener("click", function () {

        textoSecreto.classList.toggle("escondido");

        if (textoSecreto.classList.contains("escondido")) {
            botaoSecreto.textContent = "Revelar mensagem";
        } else {
            botaoSecreto.textContent = "Esconder mensagem";
        }

    });

}


// CARROSSEL
const noticiasCarrossel = [

    {
        titulo: "Homem-Aranha é multado por estacionar teia em local proibido",
        resumo: "A prefeitura afirma que o herói deixou teias presas em postes, placas e até em um carrinho de cachorro-quente.",
        imagem: "img/homem-aranha.jpg",
        link: "noticia1.html",
        alt: "Homem-Aranha em Nova York"
    },

    {
        titulo: "J. Jonah Jameson culpa Homem-Aranha pelo aumento do preço da pizza",
        resumo: "O editor afirma possuir provas irrefutáveis após encontrar teia perto de uma pizzaria.",
        imagem: "img/jameson.jpg",
        link: "noticia2.html",
        alt: "J. Jonah Jameson no Clarim Diário"
    },

    {
        titulo: "Professor é apontado como novo Duende Verde após anunciar prova surpresa",
        resumo: "Alunos relatam ameaças de recuperação, apagadores voadores e comportamento altamente suspeito.",
        imagem: "img/vilao.jpg",
        link: "noticia3.html",
        alt: "Professor caracterizado como vilão"
    },

    {
        titulo: "Vingadores marcam reunião e esquecem de enviar o link do Teams",
        resumo: "Heróis passam quarenta minutos perguntando se todos conseguem ouvir enquanto Nick Fury tenta compartilhar a tela.",
        imagem: "img/herois.jpg",
        link: "noticia4.html",
        alt: "Grupo de heróis reunidos"
    },

    {
        titulo: "Portal revela universo onde pizza com abacaxi é patrimônio cultural",
        resumo: "Doutor Estranho classifica a dimensão como uma ameaça extremamente preocupante.",
        imagem: "img/multiverso.jpg",
        link: "noticia5.html",
        alt: "Portal dimensional surgindo em Nova York"
    },

    {
        titulo: "Doutor Estranho abre portal errado e manda 37 passageiros para Osasco",
        resumo: "Passageiros perceberam o erro quando o próprio mago perguntou onde estava.",
        imagem: "img/doutor-estranho.jpg",
        link: "noticia6.html",
        alt: "Doutor Estranho abrindo um portal"
    },

    {
        titulo: "Homem-Aranha é flagrado usando Wi-Fi do vizinho durante patrulha",
        resumo: "Morador mudou a senha após descobrir um dispositivo misterioso conectado todas as madrugadas.",
        imagem: "img/homem-aranha-wifi.jpg",
        link: "noticia7.html",
        alt: "Homem-Aranha usando um celular"
    },

    {
        titulo: "Thor perde Mjölnir e oferece recompensa de dois combos",
        resumo: "O Deus do Trovão acredita que pode ter deixado o martelo entre Manhattan, Asgard ou debaixo do sofá.",
        imagem: "img/thor.jpg",
        link: "noticia8.html",
        alt: "Thor procurando seu martelo"
    },

    {
        titulo: "Demolidor é acusado de furar fila e responde: não vi ninguém esperando",
        resumo: "Advogados afirmam que a declaração tecnicamente não ajudou muito na defesa.",
        imagem: "img/demolidor.jpg",
        link: "noticia9.html",
        alt: "Demolidor em uma rua de Nova York"
    },

    {
        titulo: "Venom é expulso de rodízio após restaurante registrar prejuízo impossível",
        resumo: "Funcionários afirmam que o simbionte interpretou a expressão rodízio ilimitado de maneira literal.",
        imagem: "img/venom.jpg",
        link: "noticia10.html",
        alt: "Venom em um restaurante"
    }

];


let indiceAtual = 0;


const imagemCarrossel =
    document.querySelector("#carrossel-imagem");

const tituloCarrossel =
    document.querySelector("#carrossel-titulo");

const resumoCarrossel =
    document.querySelector("#carrossel-resumo");

const linkCarrossel =
    document.querySelector("#carrossel-link");

const botaoAnterior =
    document.querySelector("#botao-anterior");

const botaoProximo =
    document.querySelector("#botao-proximo");


function atualizarCarrossel() {

    const noticia = noticiasCarrossel[indiceAtual];

    imagemCarrossel.src = noticia.imagem;
    imagemCarrossel.alt = noticia.alt;

    tituloCarrossel.textContent = noticia.titulo;

    resumoCarrossel.textContent = noticia.resumo;

    linkCarrossel.href = noticia.link;

}


if (botaoProximo) {

    botaoProximo.addEventListener("click", function () {

        indiceAtual++;

        if (indiceAtual >= noticiasCarrossel.length) {
            indiceAtual = 0;
        }

        atualizarCarrossel();

    });

}


if (botaoAnterior) {

    botaoAnterior.addEventListener("click", function () {

        indiceAtual--;

        if (indiceAtual < 0) {
            indiceAtual = noticiasCarrossel.length - 1;
        }

        atualizarCarrossel();

    });

}


// MENU MOBILE
const botaoMenu =
    document.querySelector("#botao-menu");

const menuPrincipal =
    document.querySelector("#menu-principal");


if (botaoMenu && menuPrincipal) {

    botaoMenu.addEventListener("click", function () {

        menuPrincipal.classList.toggle("menu-aberto");

        const menuEstaAberto =
            menuPrincipal.classList.contains("menu-aberto");

        botaoMenu.setAttribute(
            "aria-expanded",
            menuEstaAberto
        );

    });

}