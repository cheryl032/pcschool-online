// Nav
$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready

    // breakpoint and up  
    $(window).resize(function () {
        if ($(window).width() >= 980) {

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $(".navbar .dropdown-menu").mouseleave(function () {
                $(this).removeClass("show");
            });

            // do something here
        }
    });
    // document ready  
});

//document.addEventListener("DOMContentLoaded", function () {
//    window.addEventListener('scroll', function () {
//        if (window.scrollY > 50) {
//            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
//            navbar_height = document.querySelector('.navbar').offsetHeight;
//            document.body.style.paddingTop = navbar_height + 'px';
//        } else {
//            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
//            document.body.style.paddingTop = '0';
//        }
//    });
//});

// Tools Panel
$(document).ready(function () {
    $(".searchBtn").click(function () {
        $(".searchPanel").slideToggle();
        $(this).toggleClass("bg-active")
    });
});


// Footer
function footerResize() {
    if ($(window).width() < 1000) {
        $('.footer-pcschool .footer-list-box ul').hide();
        $(".footer-list-box h2 i").removeClass('fas fa-angle-up');
        $(".footer-list-box h2 i").addClass('fas fa-angle-down');
        $(".footer-list-box h2").click(function () {
            $(this).siblings().toggle();
            if ($(this).find('i').hasClass('fa-angle-down')) {
                $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
            } else if ($(this).find('i').hasClass('fa-angle-up')) {
                $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        });
    } else {
        $(".footer-list-box h2 i").removeClass('fas fa-angle-up');
        $(".footer-list-box h2 i").removeClass('fas fa-angle-down');
        $(".footer-list-box h2").unbind('click');
        $('.footer-pcschool .footer-list-box ul').show();
    }
};
footerResize();
$(window).resize(function () {
    footerResize();
});


// Scroll to Top
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('.goTop').fadeIn(200); // Fade in the arrow
    } else {
        $('.goTop').fadeOut(200); // Else fade out the arrow
    }
});
$('.goTop').click(function () { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});
