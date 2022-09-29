function navChange(destinationNav, destinationDesc) {
    $(destinationNav).animate({ opacity: 1 }, 50);
    $(destinationNav).addClass('current-nav');
    $(destinationDesc).delay(250).fadeIn();
    $(destinationDesc).addClass('current-desc');
}

$(document).ready(function () {

    $('.splash').delay(2000).fadeOut(500);
    $('#biography').fadeIn(500);

    $('nav').click(function (event) {

        var nav = $('a');
        var desc = $('.desc');

        nav.each(function () {
            if ($(this).hasClass('current-nav')) {
                $(this).animate({ opacity: 0.4 }, 50);
                $(this).removeClass('current-nav');
            }
        });

        desc.each(function () {
            if ($(this).hasClass('current-desc')) {
                $(this).fadeOut();
                $(this).removeClass('current-desc');
            }
        })

        if ($(event.target).is('#biography-nav')) {
            navChange('#biography-nav', '#biography');
        }
        else if ($(event.target).is('#singles-nav')) {
            navChange('#singles-nav', '#singles');
        }
        else if ($(event.target).is('#albums-nav')) {
            navChange('#albums-nav', '#albums');
        }
        else if ($(event.target).is('#gallery-nav')) {
            navChange('#gallery-nav', '#gallery');
        }
    });
});