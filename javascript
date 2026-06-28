// Função que mostra a segunda página

function mostrarPagina(){

    // Esconde a primeira tela
    document.getElementById("home").style.display = "none";

    // Mostra a segunda tela
    document.getElementById("segundaPagina").classList.remove("escondida");

    // Leva o usuário para o início da página
    window.scrollTo(0,0);

}