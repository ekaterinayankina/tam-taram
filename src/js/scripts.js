$(document).ready(function () {
    //Mobile menu
    $('.title__toggle').click(function() {
        $('.menu__list').css({"left":"0px"});
    });
    $('.menu__item').click(function() {
        $('.menu__list').css({"left":"-360px"});
    });

    //LoadMore
    $('.videos__more').click(function() {
        //найти родителя кнопки
        let $buttonParent = $(this).parent();
        //найти ребенка с классом videos__wrap
        let $slider = $buttonParent.children(".videos__wrap");
        //найти его детей с классом videos__mobile-invisble
        let $invisibleVideos = $slider.children(".videos__mobile-invisble");
        //поменять у них видимость
        $invisibleVideos.toggleClass("videos__mobile-invisble");
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
            //количество слайдов для показа
            slidesToShow: 4,
            //сколько слайдов за раз перелистнется
            slidesToScroll: 2,
            responsive: [
                {
                    //при какой ширине экрана нужно включать настройки
                    breakpoint: 800,
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
