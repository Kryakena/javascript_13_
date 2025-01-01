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
slidesToScroll: 3, // Количество слайдов, которое будет пролистываться за 1 нажатие стрелки, либо кнопки. 
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

22. в файле script.js 

```js

```