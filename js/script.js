// Aqui eu guardo o nome do meu portal em uma variável
// Se eu quiser mudar o nome usado no JavaScript, é aqui
const nomePortal = "Clarim Diário";


// Aqui eu guardo uma quantidade de notícias
// Como é let, eu poderia mudar esse valor depois
let totalNoticias = 5;


// Esses console.log servem para eu conferir valores no Console do navegador
console.log(nomePortal);
console.log(totalNoticias);



// Aqui eu criei uma função simples
// Tudo que estiver dentro dela acontece quando eu chamar mostrarMensagem()
function mostrarMensagem() {

    // Essa mensagem só aparece no Console
    console.log("Bem-vindo ao Clarim Diário!");

}


// Aqui eu estou chamando a função para ela realmente acontecer
mostrarMensagem();



// Aqui eu criei uma lista usando um array
// Se eu quiser adicionar mais itens nessa lista, coloco outra frase dentro dela
const noticias = [

    "Homem-Aranha é visto em Nova York",

    "Jameson culpa Homem-Aranha pelo preço da pizza",

    "Professor é apontado como novo Duende Verde"

];


// Aqui eu mostro o array no Console
console.log(noticias);



// Aqui eu criei uma variável para testar uma condição
let quantidadeNoticias = 5;


// Esse if verifica se a quantidade de notícias é maior que 2
if (quantidadeNoticias > 2) {

    console.log("O portal tem várias notícias.");

} else {

    // Se não for maior que 2, aparece essa outra mensagem
    console.log("O portal ainda tem poucas notícias.");

}



// Aqui eu pego o elemento que tem a classe .logo-site no HTML
const logo = document.querySelector(".logo-site");


// Esse if evita que dê erro caso o logo não exista na página
if (logo) {

    // Aqui eu mudo o texto do logo usando JavaScript
    // Se eu quiser mudar "CLARIM DIÁRIO ONLINE", é aqui
    logo.textContent = "CLARIM DIÁRIO ONLINE";


    // Aqui eu digo o que acontece quando eu clico no logo
    logo.addEventListener("click", function () {

        // toggle coloca a classe se ela não existir
        // e tira a classe se ela já existir
        // O visual dessa classe fica no CSS
        logo.classList.toggle("logo-destaque");

    });

}



// Aqui eu pego o botão da mensagem secreta
const botaoSecreto = document.querySelector("#botao-secreto");


// Aqui eu pego o texto que começa escondido
const textoSecreto = document.querySelector("#texto-secreto");


// Só continua se os dois elementos existirem
if (botaoSecreto && textoSecreto) {

    // Quando eu clicar no botão...
    botaoSecreto.addEventListener("click", function () {

        // Aqui eu coloco ou tiro a classe "escondido"
        // Essa classe no CSS usa display: none
        textoSecreto.classList.toggle("escondido");


        // Aqui eu verifico se o texto está escondido
        if (textoSecreto.classList.contains("escondido")) {

            // Se estiver escondido, o botão mostra essa frase
            // Se eu quiser mudar o texto do botão fechado, é aqui
            botaoSecreto.textContent = "Revelar mensagem";

        } else {

            // Se estiver aparecendo, o botão muda para essa frase
            botaoSecreto.textContent = "Esconder mensagem";

        }

    });

}



// Aqui ficam todas as notícias usadas pelo carrossel
// Cada bloco entre { } representa uma notícia
const noticiasCarrossel = [

    {
        // Aqui eu mudo o título que aparece no carrossel
        titulo: "Homem-Aranha é multado por estacionar teia em local proibido",

        // Aqui eu mudo o resumo
        resumo: "A prefeitura afirma que o herói deixou teias presas em postes, placas e até em um carrinho de cachorro-quente.",

        // Aqui eu escolho a imagem
        imagem: "img/homem-aranha.jpg",

        // Aqui eu escolho qual página abre quando clico
        link: "noticia1.html",

        // Aqui eu coloco a descrição da imagem para acessibilidade
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



// Esse número diz qual notícia do array está aparecendo no momento
// Começa em 0 porque arrays começam contando do zero
let indiceAtual = 0;



// Aqui eu pego a imagem do carrossel no HTML
const imagemCarrossel =
    document.querySelector("#carrossel-imagem");


// Aqui eu pego o título
const tituloCarrossel =
    document.querySelector("#carrossel-titulo");


// Aqui eu pego o resumo
const resumoCarrossel =
    document.querySelector("#carrossel-resumo");


// Aqui eu pego o link
const linkCarrossel =
    document.querySelector("#carrossel-link");


// Aqui eu pego o botão da seta para voltar
const botaoAnterior =
    document.querySelector("#botao-anterior");


// Aqui eu pego o botão da seta para avançar
const botaoProximo =
    document.querySelector("#botao-proximo");



// Aqui eu faço o carrossel mudar sozinho
setInterval(function () {

    // Soma 1 ao índice para ir para a próxima notícia
    indiceAtual++;


    // Se passar da última notícia...
    if (indiceAtual >= noticiasCarrossel.length) {

        // Volta para a primeira
        indiceAtual = 0;

    }


    // Aqui eu atualizo o conteúdo do carrossel
    atualizarCarrossel();


// 5000 significa 5 segundos
// Se eu quiser trocar mais rápido, diminuo esse número
// Exemplo: 3000 = 3 segundos
}, 5000);



// Essa função é responsável por trocar tudo que aparece no carrossel
function atualizarCarrossel() {

    // Aqui eu pego a notícia correspondente ao índice atual
    const noticia = noticiasCarrossel[indiceAtual];


    // Aqui eu pego o bloco inteiro do carrossel
    const carrosselNoticia =
        document.querySelector("#carrossel-noticia");


    // Essa classe inicia o efeito de saída
    // O efeito visual está no CSS
    carrosselNoticia.classList.add("saindo");


    // Aqui eu espero um pouco antes de trocar o conteúdo
    setTimeout(function () {

        // Troca a imagem
        imagemCarrossel.src = noticia.imagem;

        // Troca o texto alternativo da imagem
        imagemCarrossel.alt = noticia.alt;

        // Troca o título
        tituloCarrossel.textContent = noticia.titulo;

        // Troca o resumo
        resumoCarrossel.textContent = noticia.resumo;

        // Troca o link
        linkCarrossel.href = noticia.link;


        // Aqui eu tiro a classe de saída para a notícia aparecer novamente
        carrosselNoticia.classList.remove("saindo");


// 400 significa 0,4 segundos
// Se eu mudar esse valor, também é bom combinar com o tempo da animação no CSS
    }, 400);

}



// Só adiciona o evento se o botão Próximo existir
if (botaoProximo) {

    botaoProximo.addEventListener("click", function () {

        // Vai para a próxima notícia
        indiceAtual++;


        // Se chegar depois da última, volta para a primeira
        if (indiceAtual >= noticiasCarrossel.length) {

            indiceAtual = 0;

        }


        atualizarCarrossel();

    });

}



// Só adiciona o evento se o botão Anterior existir
if (botaoAnterior) {

    botaoAnterior.addEventListener("click", function () {

        // Diminui o índice para voltar uma notícia
        indiceAtual--;


        // Se tentar voltar antes da primeira notícia...
        if (indiceAtual < 0) {

            // Vai para a última notícia
            indiceAtual = noticiasCarrossel.length - 1;

        }


        atualizarCarrossel();

    });

}



// Aqui eu pego o botão ☰ Menu
const botaoMenu =
    document.querySelector("#botao-menu");


// Aqui eu pego a barra do menu
const menuPrincipal =
    document.querySelector("#menu-principal");



// Só continua se os dois existirem
if (botaoMenu && menuPrincipal) {

    // Quando eu clicar no botão...
    botaoMenu.addEventListener("click", function () {

        // Aqui eu abro ou fecho o menu
        // A classe menu-aberto é estilizada no CSS
        menuPrincipal.classList.toggle("menu-aberto");


        // Aqui eu verifico se o menu está aberto
        const menuEstaAberto =
            menuPrincipal.classList.contains("menu-aberto");


        // Isso informa para acessibilidade se o menu está aberto ou fechado
        botaoMenu.setAttribute(
            "aria-expanded",
            menuEstaAberto
        );


        // Se o menu estiver aberto...
        if (menuEstaAberto) {

            // Aqui eu mudo o texto do botão
            botaoMenu.textContent = "✕ Fechar";

        } else {

            // Quando fechar, volta para esse texto
            botaoMenu.textContent = "☰ Menu";

        }

    });

}



// Aqui começa o Easter Egg de clicar várias vezes no logo
let cliquesLogo = 0;


if (logo) {

    logo.addEventListener("click", function () {

        // Cada clique soma 1
        cliquesLogo++;


        // Aqui eu escolho quantos cliques são necessários
        // Se eu quiser 3 cliques, troco 5 por 3
        if (cliquesLogo === 5) {

            // Aqui eu mudo a mensagem que aparece
            alert("JAVA CLARAMENTE É MELHOR QUE PYTHON");


            // Depois de aparecer, a contagem volta para zero
            cliquesLogo = 0;

        }

    });

}



// Aqui eu guardo as teclas que a pessoa digita
let codigoDigitado = "";



document.addEventListener("keydown", function (evento) {

    // Aqui eu adiciono cada tecla digitada
    // toUpperCase faz funcionar mesmo se a pessoa digitar minúsculo
    codigoDigitado += evento.key.toUpperCase();


    // Aqui eu escolho a palavra secreta
    // Se eu quiser mudar PETRIT para outra palavra, é aqui
    if (codigoDigitado.includes("PETRIT")) {

        // Aqui eu mudo a mensagem que aparece quando descobrem o código
        alert(
            "Parabéns! Você foi contratado pelo Clarim Diário.\n\nSalário: exposição e cobrança do Jameson."
        );


        // Depois de encontrar a palavra, limpa o que foi digitado
        codigoDigitado = "";

    }


    // Aqui eu evito que o código guarde letras para sempre
    // Quando passa de 20 caracteres, ele limpa
    if (codigoDigitado.length > 20) {

        codigoDigitado = "";

    }

});



// Aqui eu pego a caixa do Plantão do Clarim
const plantaoClarim =
    document.querySelector("#plantao-clarim");



if (plantaoClarim) {

    // Aqui eu espero antes de mostrar o Plantão
    setTimeout(function () {

        // Aqui eu mudo a frase que aparece no Plantão
        plantaoClarim.textContent =
            '"O site do PETRIT é 100% mais verdadeiro que os outros sites" - Gabriel Careca';


        // Aqui eu tiro a classe que deixa o Plantão escondido
        plantaoClarim.classList.remove("plantao-escondido");


        // Aqui eu adiciono a classe que faz ele aparecer
        plantaoClarim.classList.add("plantao-visivel");


        // Depois de aparecer, começo outra contagem para esconder
        setTimeout(function () {

            plantaoClarim.classList.remove("plantao-visivel");

            plantaoClarim.classList.add("plantao-escondido");


// 5000 = o Plantão fica visível durante 5 segundos
        }, 5000);


// 10000 = o Plantão espera 10 segundos para aparecer
// Se eu quiser que apareça depois de 3 segundos, uso 3000
    }, 10000);

}



// Aqui eu pego todos os links que ficam dentro do menu
const linksMenu =
    document.querySelectorAll("#menu-principal a");



// Aqui eu passo por cada link do menu
linksMenu.forEach(function (link) {

    // Quando eu clicar em qualquer opção...
    link.addEventListener("click", function () {

        // Verifico se o menu está aberto
        if (menuPrincipal.classList.contains("menu-aberto")) {

            // Fecho o menu
            menuPrincipal.classList.remove("menu-aberto");


            // Atualizo a informação de acessibilidade
            botaoMenu.setAttribute("aria-expanded", "false");


            // Volto o texto do botão
            botaoMenu.textContent = "☰ Menu";

        }

    });

});



// Aqui eu pego a aranha secreta que fica no canto
const aranhaSecreta =
    document.querySelector("#aranha-secreta");


// Aqui eu pego a tela inteira do Easter Egg
const easterCorrida =
    document.querySelector("#easter-corrida");



if (aranhaSecreta && easterCorrida) {

    // Quando alguém clicar na aranha...
    aranhaSecreta.addEventListener("click", function () {

        // Aqui eu tiro a classe que deixa o Easter Egg escondido
        easterCorrida.classList.remove(
            "easter-escondido"
        );


        // Aqui eu ativo a classe que começa as animações no CSS
        easterCorrida.classList.add(
            "easter-ativo"
        );


        // Aqui eu espero a perseguição terminar
        setTimeout(function () {

            // Tiro a classe que mantém a animação ativa
            easterCorrida.classList.remove(
                "easter-ativo"
            );


            // E escondo tudo novamente
            easterCorrida.classList.add(
                "easter-escondido"
            );


// 6000 = o Easter Egg fica na tela por 6 segundos
// Se eu mudar a duração da animação no CSS, posso precisar mudar esse valor também
        }, 6000);

    });

}