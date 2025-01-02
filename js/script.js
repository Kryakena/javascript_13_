$(document).ready(function () {
    $('.slider').slick({ // При добавления стиля картинки появятся
        arrows:true, // True - по умолчанию показывает, false - по умолчанию не показывает стрелки
        dots:true, // Буллеты или доты. False - по умолчанию выключены, true - по умолчанию включены
        adaptiveHeight: true, // Автоматическая адаптивная высота слайда, по умолчанию эта функция выключена - false
        slidesToShow: 3, // Какое количество слайдов мы хотим отобразить за раз. По умолчанию 1.
        // При изменении размера экрана автоматически изменяется расстояние между изображениями.
        slidesToScroll: 1, // Количество слайдов, которое будет пролистываться за 1 нажатие стрелки, либо кнопки.
        // По умолчанию 1.
        speed: 1000, // Какая скорость пролистывая будет на слайдере. По умолчанию 500 миллисекунд.
        easing: 'ease', // Тип анимации пролистывания слайдов. По умолчанию 'linear'
        infinite: true, // Будет ли слайдер бесконечным. По умолчанию true
        initialSlide: 3, // С какого изображения начинать осмотр. По умолчанию - 0
        autoplay:true, // Автоматически проигрывать слайды. По умолчанию false
        autoplaySpeed: 1500, // Период, через который пролистывается слайд. По умолчанию 3000, т.е. 3 секунды

        // Ставим на паузу проигрывание слайдера, когда наводим мышкой на слайд.
        pauseOnFocus: true, // Focus - пауза, когда кликаем кнопки и нажимаем/дёргаем изображения на слайдере. По умолчанию true
        pauseOnHover: true, // Hover - пауза при наведении на слайдер
        pauseOnDotsHover: true, // DotsHover - пауза при наведении на точки

        // Свайп (перетаскивание) изображений
        draggable: true, // На компьютере отвечает за свайп. По умолчанию true
        swipe: true, // На мобильном устройстве отвечает за свайп. По умолчанию true

        touchThreshold: 10, // Сколько изображений можно свайпить за 1 раз. По умолчанию 1
        touchMove: true,
        // По умолчанию true - можно свайпать разрешенное в touchThreshold количество изображений, если false - то при свайпе сдвигается на 1 ряд
        waitForAnimate: false, // По умолчанию true - при многократном нажатии кнопки прокрутки вперед и назад, будет срабатывать перемотка по количеству нажатий
        centerMode: false, // По умолчанию true - слайд по центру главный

        variableWidth: false, // Ширина слайдов согласно содержимому картинки. По умолчанию true

        rows: 1, // Ряды - сколько изображений в высоту
        slidesPerRow: 1, // Сколько столбцов с изображениями

        vertical:false, // Вертикальное изображение слайдера + добавляем в css .slider_item (height: 225px), .slider .slick-track (display: block)
        verticalSwiping: true, // Свайпить вверх-вниз

        // Объединяем большой и обычный слайдер
        asNavFor:".sliderbig",

        // Адаптивность слайдера
        responsive:[
            {
                breakpoint: 768, // При определенном количестве breakpoint (числовое значение ширины окна), меняется внешний вид слайдера
                settings: {
                    slidesToShow: 2 // Было 3
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        mobileFirst: false,

        // appendArrows:$('.content'), // Чтобы переместить стрелки в другой div без стилей, т.к. стили привязаны к другим div + в html создаем для него div
        // appendDots:$('.content'), // Чтобы переместить точки в другой div
    });
    $('.sliderbig').slick({
        arrows:false, // Убираем в большом слайдере стрелки вправо-влево
        fade: true, // Используют, когда отображается 1 картинка в slidesToShow: 1

        // Объединяем большой и обычный слайдер
        asNavFor:".slider",
    });

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
       console.log(nextSlide);
    });

    $('.slider').slick('setPosition');
});