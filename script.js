

// jQuery(function($) {
//     //function ganti jadi kalau mentok ke atas gimana
//     $(nav).on('scroll', function() { //mentok ke atas background navbar ilangin
//         if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
//             $(this).removeClass('bottom-fade', 2000);
//         }
//     });


//     //function scroll bawah & atas
//     var prevScroll = $(nav).scrollTop();

//     $(nav).scroll(function() {
//         var newScroll = $(nav).scrollTop();
//         if(newScroll < prevScroll) { //scrolled up
//             $(this).addClass('bottom-fade', 2000); //bikin navbar muncul + ada background blur
//         } else { //scrolled down
//             $(this).addClass('top-fade', 2000); //bikin ilang
//         }
//         prevScroll = newScroll;
//     });
// });


// $(function() {
//     var prevScroll = $('#biography-desc').scrollTop();

//     $('#biography-desc').scroll(function() {
//         var newScroll = $('#biography-desc').scrollTop();
//         if(newScroll < prevScroll) { //scrolled up
//             $(this).addClass('bottom-fade', 2000);
//         } else { //scrolled down
//             $(this).addClass('top-fade', 2000);
//         }
//         prevScroll = newScroll;
//     });
// });

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