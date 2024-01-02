

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 550) {
        $('.socialBtn').fadeIn();
    } else {
        $('.socialBtn').fadeOut();
    }
};

window.addEventListener("scroll", myScrollFunc);

// Slick Setting
$('.slick-indexAD .slick-wrapper').slick({
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: true,
            arrows: false,
        }
    },]
});

$('.slick-hotClass .slick-wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 768,
        settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slick-hotClass .slick-wrapper').slick('setPosition');
})

$('.slick-it360Class .slick-wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 992,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            arrows: false,
			infinite: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
});

$('.slick-videoLearnClass .slick-wrapper').slick({
    dots: true,
    infinite: false,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
});

$('.slick-latestNewsClass .slick-wrapper').slick({
    dots: true,
    infinite: false,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
});

$('.slick-seminarClass .slick-wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 8000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 992,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            arrows: false,
            dots: false,
			infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
});

$('.slick-pcschoolTeachersClass .slick-wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 8000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 992,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            arrows: false,
            dots: false,
			infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
});

$('.slick-teachingChannel .slick-wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 8000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 992,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            arrows: false,
            dots: false,
			infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
});

$('.slick-schoolPhoto .slick-wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 768,
        settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
});

$('.slick-pageAD .slick-wrapper').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false,
        }
    },]
});

$('.slick-teachList .slick-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 768,
        settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
});

$('.slick-moreTeachers .slick-wrapper').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [{
        breakpoint: 1366,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 992,
        settings: {
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 768,
        settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
});

$('.storyClassBox01 .slick-wrapper').slick({
    slidesToShow: 6,
    settings: 'unslick',
    responsive: [{
        breakpoint: 1024,
        settings: {
			/*arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 8000,
            dots: true*/
        }
    },
    {
        breakpoint: 992,
        settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 8000,
            slidesToShow: 2,
            slidesToScroll: 2,
			dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 8000,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            arrows: false,
            dots: false,
			infinite: false,
            autoplay: true,
            autoplaySpeed: 8000,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
});
