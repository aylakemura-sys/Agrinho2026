
const botoes = document.querySelectorAll(".btn-proximo");



botoes.forEach(botao => {

    botao.addEventListener("click", function(){

        
        document.querySelectorAll(".passo").forEach(passo => {
            passo.style.display = "none";
        });


    
        const proximo = botao.getAttribute("data-proximo");


        
        document.getElementById("passo-" + proximo).style.display = "block";

    });

});