$(document).ready(function () {
    //Mobile menu
    $('.title__toggle').click(function () {
        $('.menu__list').css({'left': '0px'});
    });
    $('.menu__item').click(function () {
        $('.menu__list').css({'left': '-360px'});
    });

    //Красные слова в заголовках
    $('.videos__title').each(function(){
        var newText = $(this).text().split(' ').join('</span> <span>');
        newText = '<span>' + newText + '</span>';
        $(this).html(newText);
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

    //при перезагрузке страницы
    let sliderIsLive = true;
    console.log (screen.width);
    if (screen.width < 768) sliderIsLive = false;
    loadSlick();

    //при изменении размеров окна
    $(window).resize(function () {
        if (screen.width < 768) {
            $('.slider').slick('unslick');
            sliderIsLive = false;
            console.log("unslick")
            return;
        }
         else sliderIsLive = true;
        console.log(sliderIsLive);
        loadSlick();
    });

    function loadSlick() {
        console.log(sliderIsLive);
        if (!sliderIsLive) {return;}
        console.log("slick on");
        $('.slider').slick({
            infinite: false,
            аccessibility: true,
            arrows: true,
            cssEase: 'ease-out',
            easing: 'easeInOutSine',
            prevArrow: '<img class="slick-prev" src="img/left-arrow.svg">',
            nextArrow: '<img class="slick-next" src="img/right-arrow.svg">',
            //количество слайдов для показа
            slidesToShow: 3,
            //сколько слайдов за раз перелистнется
            slidesToScroll: 1,
            responsive: [
                {
                    //если экран меньше laptop
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    //если экран меньше tablet, то slick off
                    breakpoint: 767,
                    settings: 'unslick'
                }
            ]
        });
    }
});

