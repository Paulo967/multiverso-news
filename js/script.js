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