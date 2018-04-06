/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds 1000 es un seguno
    offset: 75, // Integer. How far to offset the scrolling anchor location in pixels 60 pixeles para que se separe de la cabecera es como un margin top 60px el encabezado mide como 69px

});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();//si hace scroll que muestre el boton
        } else {
            $(".ir-arriba").fadeOut();//si no que lo oculte
        }
    });

});

/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.encabezado');//el header tiene clase encabezado
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("fondo-menu");//si se hace scroll se le asigna la clase entonces seria encabezado fondo-menu
    } else {
        nav.removeClass("fondo-menu");//si es menor que se le quite
    }
});