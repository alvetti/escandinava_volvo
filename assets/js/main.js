$(document).ready(function(){
    $('.main-cta__button a').click(function(){
        $('html, body').animate({
            scrollTop: $('header').offset().top
        }, 1000);
    });
});