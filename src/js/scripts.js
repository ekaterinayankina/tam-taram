$(document).ready(function () {
    //Mobile menu
    $('.title__toggle').click(function () {
        $('.menu__list').css({'left': '0px'});
    });
    $('.menu__item').click(function () {
        $('.menu__list').css({'left': '-360px'});
    });

    //LoadMore
    $('.videos__more').click(function () {
        //найти родителя кнопки
        const $buttonParent = $(this).parent();
        //найти ребенка с классом videos__wrap
        const $slider = $buttonParent.children('.videos__wrap');
        //найти его детей с классом videos__mobile-invisble
        const $invisibleVideos = $slider.children('.videos__mobile-invisble');
        //поменять у них видимость
        $invisibleVideos.toggleClass('videos__mobile-invisble');
        //исчезновение кнопки
        $(this).hide();

    });

    //Slider
    let slickLoaded = false;
    $(window).resize(function () {
        if (screen.width < 768) {
            slickLoaded = false;
            return;
        }
        if (slickLoaded) {
            return;
        }
        slickLoaded = true;

        $('.slider').slick({
            infinite: false,
            аccessibility: true,
            arrows: true,
            cssEase: 'ease-out',
            easing:  'easeInOutSine',
            prevArrow: '<img class="slick-prev" src="img/left-arrow.svg">',
            nextArrow: '<img class="slick-next" src="img/right-arrow.svg">',
            //количество слайдов для показа
            slidesToShow: 3,
            //сколько слайдов за раз перелистнется
            slidesToScroll: 1,
            responsive: [
                {
                    //при какой ширине экрана нужно включать настройки
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    //при какой ширине экрана нужно включать настройки
                    breakpoint: 320,
                    settings: 'unslick'
                }
            ]
        });
    });
});

