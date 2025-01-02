# Слайдер фотографий

Источник: видео "SLICK SLIDER - лучший слайдер для сайта за 1 час. Подробный гайд. Подключение и настройка слайдера" 
https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-125918837_456239145%2Fe27e4aca94946da8ff

1. создаем создаем файлы index.html, style.css (в папке css), script.js (в папке js) в папке проекта.
   Скачиваем готовые шаблоны изображений (в папку img) и файл js (положить в папку js) и вставляем в папку проекта:
   

2. в файле index.html готовим шаблон

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title></title>
    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Кодировка страницы -->
    <meta charset="utf-8">
    <!-- Адаптив -->
    <meta name="viewport" content="width=device-width">
</head>
<!-- Отображаемое тело страницы -->
<body>
<!-- Оболочка для демонстрации -->
<div class="wrapper">
    <!-- Контент -->

    <!-- Подключаем jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- Подключаем файл JS скриптов -->
    <script src="js/script.js"></script>
</div>
</body>
</html>
```

3. в файле style.css вставляем шаблон

```css
/* Обнуление */
*,*:before,*:after{
   padding: 0;
   margin: 0;
   border: 0;
   box-sizing: border-box;
}
/* Стили для демонстрации */
html,body{
   height: 100%;
   background-color: #333;
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
   color: #fff;
   font-size: 25px;
}
.wrapper{
   height: 100%;
   padding: 50px;
}
/* Основные стили */
```

4. в файл script.js вставляем шаблон

```js
$(document).ready(function () {

});
```

5. скачиваем файл slick.min.js по ссылке и закидываем его в папку js
(https://github.com/kenwheeler/slick/blob/master/slick/slick.min.js) - это файл самого слайдера

6. в файле index.html в разделе head пишем название и адаптив

```html
<title>Slick слайдер</title>
```

7. в файле index.html в разделе body подключаемся к слайдеру

```html
<!-- Подключаем слайдер Slick -->
<script src="js/slick.min.js"></script>
```

8. в файле index.html в разделе body в классе wrapper создаем оболочку slider,
   внутри которого создаем блоки с изображениями

```html
<div class="slider">
   <div class="slider_item">
      <img src="img/slides/1.jpg" alt="">
   </div>
   <div class="slider_item">
      <img src="img/slides/2.jpg" alt="">
   </div>
   <div class="slider_item">
      <img src="img/slides/3.jpg" alt="">
   </div>
   <div class="slider_item">
      <img src="img/slides/4.jpg" alt="">
   </div>
   <div class="slider_item">
      <img src="img/slides/5.jpg" alt="">
   </div>
</div>
```

9. в файле script.js

```js
$(document).ready(function () {
   $('.slider').slick(); // При добавления стиля картинки появятся
});
```

10. в файле style.css загружаем классы из slick.min.js

```css
/* Слайдер */
.slick-slider{}
/* Ограничивающая оболочка */
.slick-list{}
/* Лента слайдов */
.slick-track{}

/* Слайд */
.slick-slide{}
/* Слайд активный */
.slick-slide.slick-active{}
/* Слайд основной */
.slick-slide.slick-current{}
/* Слайд по центру */
.slick-slide.slick-center{}

/* Стрелка */
.slick-arrow{}
/* Стрелка влево */
.slick-arrow.slick-prev{}
/* Стрелка вправо */
.slick-arrow.slick-next{}
/* Стрелка не активная */
.slick-arrow.slick-disabled{}

/* Точки */
.slick-dots{}
.slick-dots li{}
.slick-dots button{}

/* Конкретный слайдер */
.slider {}
.slider .slick-arrow {}
.slider_item {}
```

11. в файле style.css, чтобы все слайды выстроились в ряд

```css
.slick-track{ /* Чтобы все слайды выстроились в ряд */
   display: flex;
}
```

12. в файле style.css ограничение размеров слайдера под картинки

```css
.slick-list{ /* Ограничение размеров слайдера под картинки */
   overflow: hidden;
}
```

13. скачиваем изображения стрелок "Вперед" и "Назад" в формате svg (https://www.svgrepo.com/vectors/arrow/glyph/)
    Загружаем их в папку img

14. в файле style.css стилизуем стрелочки слайдера

```css
.slider {
   position: relative;
   padding: 0 60px;
}
.slider .slick-arrow { /* Собираем стрелки слайдера вместе */
   position: absolute;
   top: 50%;
   margin: -30px 0 0 0;
   z-index: 10;
   font-size: 0; /* Убрать надписи на кнопках, вместо них сделаем изображения */
   width: 30px;
   height: 60px;
}
.slider .slick-arrow.slick-prev { /* Стрелка слайдера слева */
   left: 0;
   background: url('../img/arrow-circle-left-svgrepo-com.svg') 0 0 / 100% no-repeat; /* Стрелка влево */
}
.slider .slick-arrow.slick-next { /* Стрелка слайдера справа */
   right: 0;
   background: url('../img/arrow-circle-right-svgrepo-com.svg') 0 0 / 100% no-repeat; /* Стрелка вправо */
}
```

15. в файле style.css стилизуем точки поиска фотографий для нашего слайдера

```css
/* Точки */
.slider .slick-dots{
   display: flex;
   align-items: center; /* Поставим точки в центре по горизонтали */
   justify-content: center; /* Поставим точки в центре по вертикали */
}
.slider .slick-dots li{
   list-style: none; /* Точки упорядочиваем по порядку в строку */
   margin: 0 10px; /* Расстояние (отступы) между точками */
}
.slider .slick-dots button{
   font-size: 0; /* Прячем нумерацию */
   width: 10px;
   height: 10px;
   background-color: #fff; /* Появляется белая полоска вместо всех точек */
   border-radius: 50%; /* Белая полоска разделяется на точки */
}
```

16. в файле style.css чтобы точка с выбранным изображением выделилась цветом

```css
.slider .slick-dots li.slick-active button{ /* Активная точка с выбранным изображением */
   background-color: transparent; /* Выбранная точка прозрачная */
   border: 1px solid #fff;
}
```

17. адаптивный слайдер по высоте изображений 

в файле script.js
```js
adaptiveHeight: true, // Автоматическая адаптивная высота слайда, по умолчанию эта функция выключена - false
```
в файле style.css в .slick-track добавляем
```css
align-items: flex-start; /* Прижмет наш слайд кверху, тогда adaptiveHeight в script.js будет работать */
```

18. в файле script.js. Какое количество слайдов мы хотим отобразить за раз

```js
slidesToShow: 3, // Какое количество слайдов мы хотим отобразить за раз. По умолчанию 1.
// При изменении размера экрана автоматически изменяется расстояние между изображениями.
```

19. в файле script.js. Количество слайдов, которое будет пролистываться за 1 нажатие стрелки, либо кнопки.
Уменьшится количество точек внизу слайдера

```js
slidesToScroll: 1, // Количество слайдов, которое будет пролистываться за 1 нажатие стрелки, либо кнопки. 
// По умолчанию 1.
```

20. в файле script.js. Какая скорость пролистывая будет на слайдере

```js
speed: 1000, // Какая скорость пролистывая будет на слайдере. По умолчанию 500 миллисекунд.
```

21. в файле script.js. По шпаргалке на сайте выбираем тип анимации пролистывания в CSS 
(https://html5book.ru/css3-transition/)

```js
easing: 'ease', // Тип анимации пролистывания слайдов. По умолчанию 'linear'
```

22. в файле script.js. Будет ли слайдер бесконечным. По умолчанию true

```js
infinite: true, // Будет ли слайдер бесконечным. По умолчанию true
```

23. в файле script.js. С какого изображения начинать осмотр. По умолчанию - 0

```js
initialSlide: 0, // С какого изображения начинать осмотр. По умолчанию - 0
```

24. в файле script.js. Автоматически проигрывать слайды. По умолчанию false

```js
autoplay:false, // Автоматически проигрывать слайды. По умолчанию false
```

25. в файле script.js. Период, через который пролистывается слайд. По умолчанию 3000, т.е. 3 секунды

```js
autoplaySpeed: 1500, // Период, через который пролистывается слайд. По умолчанию 3000, т.е. 3 секунды
```

26. в файле script.js. Настройка паузы проигрывания слайдера

```js
// Ставим на паузу проигрывание слайдера, когда наводим мышкой на слайд. По умолчанию true
pauseOnFocus: true, // Focus - пауза, когда кликаем кнопки и нажимаем/дёргаем изображения на слайдере. 
pauseOnHover: true, // Hover - пауза при наведении на слайдер
pauseOnDotsHover: true, // DotsHover - пауза при наведении на точки
```

27. в файле script.js настраиваем свайпы (перетаскивание вправо-влево)

```js
// Свайп (перетаскивание) изображений
draggable: false, // На компьютере отвечает за свайп. По умолчанию true
swipe: true, // На мобильном устройстве отвечает за свайп. По умолчанию true
    
touchThreshold: 10, // Сколько изображений можно свайпить за 1 раз. По умолчанию 1
touchMove: true, 
// По умолчанию true - можно свайпать разрешенное в touchThreshold количество изображений, если false - то при свайпе сдвигается на 1 ряд
waitForAnimate: false, // По умолчанию true - при многократном нажатии кнопки прокрутки вперед и назад, будет срабатывать перемотка по количеству нажатий
centerMode: false, // По умолчанию true - слайд по центру главный
```

28. в файле style.css стилизуем centerMode из файла script.js

```css
/* centerMode из script.js */
.slider_item {
transition: all 0.3s ease 0s; /* Добавляем эффект перехода между слайдами */
opacity: 0.4; /* Для всех слайдов убрать непрозрачность */
text-align: center; /* Настраиваем по центру выбранное изображение в слайдере */
}
.slider_item.slick-center {
opacity: 1; /* Непрозрачность изображений вернуть для центрального слайда */
}
```

29. в файле script.js настраиваем ширину слайдов

```css
variableWidth: false, // Ширина слайдов согласно содержимому картинки. По умолчанию true
```

30. в файле script.js и style.css настраиваем столбцы и строки с изображениями

script.js
```js
vertical:false, // Вертикальное изображение слайдера + добавляем в css .slider_item (height: 225px), .slider .slick-track (display: block)
verticalSwiping: true, // Свайпить вверх-вниз
```
style.css
```css
.slider .slick-track{
    display: block;
}
```
style.css в .slider_item
```css
height: 225px;
```

31. в файле script.js можно настроить строк и столбцов в слайдере

```js
rows: 1, // Ряды - сколько изображений в высоту
slidesPerRow: 1, // Сколько столбцов с изображениями
```

32. настраиваем слайдер для больших фотографий (те же изображения, но больших размеров в папке big)

index.html
```html
<div class="sliderbig">
    <div class="sliderbig_item">
        <img src="img/slides/big/1.jpg" alt="">
    </div>
    <div class="sliderbig_item">
        <img src="img/slides/big/2.jpg" alt="">
    </div>
    <div class="sliderbig_item">
        <img src="img/slides/big/3.jpg" alt="">
    </div>
    <div class="sliderbig_item">
        <img src="img/slides/big/4.jpg" alt="">
    </div>
    <div class="sliderbig_item">
        <img src="img/slides/big/5.jpg" alt="">
    </div>
</div>
```
script.js
```js
$('.sliderbig').slick({
    arrows:false, // Убираем в большом слайдере стрелки вправо-влево
});
```
style.css убираем
```css
.slider .slick-track{ 
    display: block;
}

/* centerMode из script.js */
.slider_item {
transition: all 0.3s ease 0s; 
} /* Добавляем эффект перехода между слайдами */
opacity: 0.4; /* Для всех слайдов убрать непрозрачность */
text-align: center; /* Настраиваем по центру выбранное изображение в слайдере */
height: 225px; /* Высота max слайда в вертикальном расположении в столбце */
} 
.slider_item.slick-center {
    opacity: 1; /* Непрозрачность изображений вернуть для центрального слайда */
}
```
style.css добавляем
```css
/* Большой слайдер */
.sliderbig {}
.sliderbig_item {
    text-align: center;
}
```

33. в файле script.js можно объединить большой и обычный слайдер. Делаем обмен классами

```js
// В обычном слайдере указываем большой слайдер
asNavFor:".sliderbig", // Когда листаем обычный слайдер, меняется также большой слайдер

// В большом слайдере указываем обычный слайдер
asNavFor:".slider", // Когда листаем большой слайдер, меняется также обычный слайдер
```

34. в файле script.js адаптируем наш слайдер

```js
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
```

35. в файле index.html ленивая загрузка - повышаем скорость загрузки. Загружается в браузер только та фотография, которая выбрана для просмотра

```html
<div class="sliderbig">
    <div class="sliderbig_item">
        <img data-lazy="img/slides/big/1.jpg" alt="">
    </div>
    <div class="sliderbig_item">
        <img data-lazy="img/slides/big/2.jpg" alt="">
    </div>
    <div class="sliderbig_item">
        <img data-lazy="img/slides/big/3.jpg" alt="">
    </div>
    <div class="sliderbig_item">
        <img data-lazy="img/slides/big/4.jpg" alt="">
    </div>
    <div class="sliderbig_item">
        <img data-lazy="img/slides/big/5.jpg" alt="">
    </div>
</div>
```

36. чтобы переместить стрелки в другой div без стилей, т.к. стили привязаны к другим div

script.js в обычном слайдере
```js
appendArrows:$('.content'),
```
index.html добавляем новый div
```html
<div class="content"></div>
```

37. чтобы переместить точки в другой div без стилей, т.к. стили привязаны к другим div

script.js в обычном слайдере
```js
appendDots:$('.content'),
```

38. в файле script.js создаем Событие на выбор (видим в панели разработчика - "Console"). 
Это нужно, когда надо выйти за рамки одного слайда

следующий слайд
```js
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    console.log(nextSlide);
});
```
предыдущий слайд
```js
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    console.log(currentSlide);
});
```
текущий слайд
```js
$('.slider').on('afterChange', function(event, slick, currentSlide) {
    console.log(currentSlide);
});
```

39. в файле script.js создаем Метод на выбор

перезагрузить слайдер (встряхнет его при загрузке страницы)
```js
$('.slider').slick('setPosition');
```
позволяет пролистнуть до определенного слайда (если нужно управлять слайдером исходя из других событий - например ссылка - link)
```js
$('.link').click(function(event) {
    $('.slider').slick('goTo',3); // Номер слайда, например 3
})
```
позволяет пролистнуть до следующего слайда
```js
$('.slider').slick('slickPrev');
```
позволяет пролистнуть до предыдущего слайда
```js
$('.slider').slick('slickNext');
```
при клике на объект включается или останавливается прокрутка
```js
$('.slider').slick('slickPlay');
$('.slider').slick('slickPause');
```
можем управлять содержимым слайдера в js и html
```js
$('.link_add').click(function (event) {
    $('.slider').slick('slickAdd','<div class="newslide">123</div>');
    return false;
});
```
```html
<a href="" class="link_add">Добавить</a>
<a href="" class="link_add">Удалить</a>
```
слайд, который мы хотим удалить
```js
$('.link_add').click(function (event) {
    $('.slider').slick('slickRemove',0); // Номер удаляемого слайда
    return false;
});
```
```html
<a href="" class="link_add">Добавить</a>
<a href="" class="link_add">Удалить</a>
```
фильтр в слайдере. При нажатии ссылки "Фильтровать", например оставить 3 и 4 слайд (добавляем к названию класса слово filter)
```js
    var filtered = false; // Проверяет переменная, сработал уже фильтр, или нет
$('.link_filter').on('click', function (){
    if (filtered === false) {
        $('.slider').slick('slickFilter','.filter');
        $(this).next('Убрать фильтр');
        filtered = true;
    } else {
        $('.slider').slick('slickUnfilter');
        $(this).text('Фильтровать');
        filtered = false;
    }
    return false;
});
```
```html
<div class="slider_item filter">
    <img src="img/slides/3.jpg" alt="">
</div>
<div class="slider_item filter">
    <img src="img/slides/4.jpg" alt="">
</div>
```
Хотим узнать количество слайдов в слайдере
```js
var s=$('.slider').slick('slickGetOption','slidesToShow');
console.log(s);
```
переназначить наше значение количества изображений в слайдере
```js
var s=$('.slider').slick('slickSetOption','slidesToShow',2);
console.log(s);
```
отключить слайдер
```js
$('.slider').slick('unslick');
```

# Итог

1. файл index.html

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title>Slick слайдер</title>
    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Кодировка страницы -->
    <meta charset="utf-8">
    <!-- Адаптив -->
    <meta name="viewport" content="width=device-width">
</head>
<!-- Отображаемое тело страницы -->
<body>
<!-- Оболочка для демонстрации -->
<div class="wrapper">
    <!-- Контент -->

    <div class="sliderbig">
        <div class="sliderbig_item">
            <img data-lazy="img/slides/big/1.jpg" alt="">
        </div>
        <div class="sliderbig_item">
            <img data-lazy="img/slides/big/2.jpg" alt="">
        </div>
        <div class="sliderbig_item">
            <img data-lazy="img/slides/big/3.jpg" alt="">
        </div>
        <div class="sliderbig_item">
            <img data-lazy="img/slides/big/4.jpg" alt="">
        </div>
        <div class="sliderbig_item">
            <img data-lazy="img/slides/big/5.jpg" alt="">
        </div>
    </div>

    <div class="slider">
        <div class="slider_item">
            <img src="img/slides/1.jpg" alt="">
        </div>
        <div class="slider_item">
            <img src="img/slides/2.jpg" alt="">
        </div>
        <div class="slider_item">
            <img src="img/slides/3.jpg" alt="">
        </div>
        <div class="slider_item">
            <img src="img/slides/4.jpg" alt="">
        </div>
        <div class="slider_item">
            <img src="img/slides/5.jpg" alt="">
        </div>
    </div>

    <!-- <div class="content"></div> -->

    <!-- Подключаем jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- Подключаем слайдер Slick -->
    <script src="js/slick.min.js"></script>
    <!-- Подключаем файл JS скриптов -->
    <script src="js/script.js"></script>
</div>
</body>
</html>
```

2. файл style.css

```css
/* Обнуление */
*,*:before,*:after{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
/* Стили для демонстрации */
html,body{
    height: 100%;
    background-color: #333;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #fff;
    font-size: 25px;
}
.wrapper{
    height: 100%;
    padding: 50px;
}
/* Основные стили */

/* Слайдер */
.slick-slider{}
/* Ограничивающая оболочка */
.slick-list{ /* Ограничение размеров слайдера под картинки */
    overflow: hidden;
}
/* Лента слайдов */
.slick-track{ /* Чтобы все слайды выстроились в ряд */
    display: flex;
    align-items: flex-start; /* Прижмет наш слайд кверху, тогда adaptiveHeight в script.js будет работать */
}

/* Слайд */
.slick-slide{}
/* Слайд активный */
.slick-slide.slick-active{}
/* Слайд основной */
.slick-slide.slick-current{}
/* Слайд по центру */
.slick-slide.slick-center{}

/* Стрелка */
.slick-arrow{}
/* Стрелка влево */
.slick-arrow.slick-prev{}
/* Стрелка вправо */
.slick-arrow.slick-next{}
/* Стрелка не активная */
.slick-arrow.slick-disabled{}

/* Точки */
.slick-dots{}
.slick-dots li{}
.slick-dots button{}

/* Конкретный слайдер */
.slider {
    position: relative;
    padding: 0 60px;
}
/*.slider  .slick-track{ /* Убираем для большого слайдера */
/*    display: block;
}*/

.slider .slick-arrow { /* Собираем стрелки слайдера вместе */
    position: absolute;
    top: 50%;
    margin: -30px 0 0 0;
    z-index: 10;
    font-size: 0; /* Убрать надписи на кнопках, вместо них сделаем изображения */
    width: 30px;
    height: 60px;
}
.slider .slick-arrow.slick-prev { /* Стрелка слайдера слева */
    left: 0;
    background: url('../img/arrow-circle-left-svgrepo-com.svg') 0 0 / 100% no-repeat; /* Стрелка влево */
}
.slider .slick-arrow.slick-next { /* Стрелка слайдера справа */
    right: 0;
    background: url('../img/arrow-circle-right-svgrepo-com.svg') 0 0 / 100% no-repeat; /* Стрелка вправо */
}
.slider .slick-arrow.slick-disabled{
    opacity: 0.2; /* Отключение кнопки, если уже не куда листать (нет изображений) */
}

/* Точки */
.slider .slick-dots{
    display: flex;
    align-items: center; /* Поставим точки в центре по горизонтали */
    justify-content: center; /* Поставим точки в центре по вертикали */
}
.slider .slick-dots li{
    list-style: none; /* Точки упорядочиваем по порядку в строку */
    margin: 0 10px; /* Расстояние (отступы) между точками */
}
.slider .slick-dots button{
    font-size: 0; /* Прячем нумерацию */
    width: 10px;
    height: 10px;
    background-color: #fff; /* Появляется белая полоска вместо всех точек */
    border-radius: 50%; /* Белая полоска разделяется на точки */
}

.slider .slick-dots li.slick-active button{ /* Активная точка с выбранным изображением */
    background-color: transparent; /* Выбранная точка прозрачная */
    border: 1px solid #fff;
}

/* centerMode из script.js */
/* .slider_item {
    /* transition: all 0.3s ease 0s; */ /* Добавляем эффект перехода между слайдами */
    /* opacity: 0.4; */ /* Для всех слайдов убрать непрозрачность */
    /* text-align: center; */ /* Настраиваем по центру выбранное изображение в слайдере */
    /* height: 225px; */ /* Высота max слайда в вертикальном расположении в столбце */
/* } */
/* .slider_item.slick-center {
    /* opacity: 1; */ /* Непрозрачность изображений вернуть для центрального слайда */
/* } */

/* Большой слайдер */
.sliderbig {}
.sliderbig_item {
    text-align: center;
}
```

3. файл script.js

```js
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
```