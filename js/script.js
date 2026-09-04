const nomePortal = "Clarim Diário";

let totalNoticias = 3;

console.log(nomePortal);
console.log(totalNoticias);
function mostrarMensagem() {
    console.log("Bem-vindo ao Clarim Diário!");
}

mostrarMensagem();

const noticias = [
    "Homem-Aranha é visto em Nova York",
    "Jameson culpa Homem-Aranha pelo preço da pizza",
    "Professor é apontado como novo Duende Verde"
];

console.log(noticias);

let quantidadeNoticias = 3;

if (quantidadeNoticias > 2) {
    console.log("O portal tem várias notícias.");
} else {
    console.log("O portal ainda tem poucas notícias.");
}

const tituloPrincipal = document.querySelector("header h1");

console.log(tituloPrincipal);

const logo = document.querySelector(".logo-site");

if (logo) {
    logo.textContent = "CLARIM DIÁRIO ONLINE";
}

//interruptor 
if (logo) {
    logo.addEventListener("click", function () {
        logo.classList.toggle("logo-destaque");
    });
}

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
const imagemCarrossel = document.querySelector("#carrossel-imagem");
const tituloCarrossel = document.querySelector("#carrossel-titulo");
const resumoCarrossel = document.querySelector("#carrossel-resumo");
const linkCarrossel = document.querySelector("#carrossel-link");

const botaoAnterior = document.querySelector("#botao-anterior");
const botaoProximo = document.querySelector("#botao-proximo");

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