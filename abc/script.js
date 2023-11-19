//FUNÇÃO PARA FECHAR QUANDO ESTIVER NO MODO CELULAR



$(document).ready(function () {

    $('#navbarToggle').on('click', function () {

        $('#navbarNav').toggleClass('show');

    });



    $('.navbar-nav a').on('click', function () {

        $('#navbarNav').removeClass('show');

    });

});





//FUNÇÃO PARA FAZER UMA ROLAGEM DA PAGINA MAIS SUAVE

$(document).ready(function () {
    $(".navbar-nav a, #scrollCategorias, #scrollSobre, #scrollIntegrantes").on("click", function (e) {
        e.preventDefault();
        var targetId = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(targetId).offset().top
        }, 1000);
    });
});





//FUÇÃO DAS FOTOS DA EQUIPE 



// JavaScript para controlar a navegação da equipe
document.addEventListener('DOMContentLoaded', function () {
    const membrosEquipe = document.querySelectorAll('.equipe-item');

    function exibirMembros() {
        for (let i = 0; i < membrosEquipe.length; i++) {
            membrosEquipe[i].style.display = 'block';
        }
    }

    exibirMembros();
});



$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 400,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});