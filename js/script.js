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
        titulo: "Homem-Aranha é visto novamente nos céus de Nova York",
        resumo: "Testemunhas afirmam ter visto o herói mascarado circulando pelos prédios de Manhattan.",
        imagem: "img/homem-aranha.jpg",
        link: "noticia1.html",
        alt: "Homem-Aranha balançando entre prédios de Nova York"
    },

    {
        titulo: "J. Jonah Jameson culpa Homem-Aranha pelo preço da pizza",
        resumo: "O editor do Clarim Diário voltou a fazer uma acusação absurda contra o herói mascarado.",
        imagem: "img/jameson.jpg",
        link: "noticia2.html",
        alt: "J. Jonah Jameson no escritório do Clarim Diário"
    },

    {
        titulo: "Professor misterioso é apontado como novo Duende Verde",
        resumo: "Moradores relatam uma aparição surreal de um novo vilão causando caos acadêmico por Manhattan.",
        imagem: "img/vilao.jpg",
        link: "noticia3.html",
        alt: "Vilão sobrevoando os prédios de Manhattan"
    },

    {
        titulo: "Heróis são vistos reunidos secretamente em Manhattan",
        resumo: "Uma reunião misteriosa entre heróis aumenta as suspeitas de uma nova ameaça.",
        imagem: "img/herois.jpg",
        link: "noticia4.html",
        alt: "Heróis reunidos em Manhattan"
    },

    {
        titulo: "Portal dimensional surge sobre Nova York",
        resumo: "Objetos estranhos começam a cair do céu após o aparecimento de uma anomalia dimensional.",
        imagem: "img/multiverso.jpg",
        link: "noticia5.html",
        alt: "Portal dimensional surgindo sobre Nova York"
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