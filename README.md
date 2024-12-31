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
      <img src="img/1.jpg" alt="">
   </div>
   <div class="slider_item">
      <img src="img/2.jpg" alt="">
   </div>
   <div class="slider_item">
      <img src="img/3.jpg" alt="">
   </div>
   <div class="slider_item">
      <img src="img/4.jpg" alt="">
   </div>
   <div class="slider_item">
      <img src="img/5.jpg" alt="">
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

13. в файле style.css 

```css

```