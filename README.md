Web Clip Icons
<link rel="apple-touch-icon" ...
- для соответствующих устройств - даёт возможность сохранить закладку сайта на рабочем столе. Отсутствие чревато записями со статусом 404 в логах сервера при посещении сайта пользователями с соответствующих устройств.
favicon.ico 
favicon-16x16.png обычный фавикон для табов
favicon-32x32.png для Safari (Mac OS)
favicon-96x96.png для Google TV
android-chrome-36x36.png для Android Chrome M39+ with 0.75 screen density.
android-chrome-48x48.png
For Android Chrome M39+ with 1.0 screen density.
android-chrome-72x72.png
For Android Chrome M39+ with 1.5 screen density.
android-chrome-96x96.png
For Android Chrome M39+ with 2.0 screen density.
android-chrome-144x144.png
For Android Chrome M39+ with 3.0 screen density.
android-chrome-192x192.png
For Android Chrome M39+ with 4.0 screen density.
mstile-70x70.png
For Windows 8 / IE11.
mstile-144x144.png
For Windows 8 / IE10.
mstile-150x150.png
For Windows 8 / IE11.
mstile-310x310.png
For Windows 8 / IE11.
mstile-310x150.png
For Windows 8 / IE11.
apple-touch-icon-57x57.png
iPhone and iPad users can turn web pages into icons on their home screen. Such link appears as a regular iOS native application. When this happens, the device looks for a specific picture. The 57x57 resolution is convenient for non-retina iPhone with iOS6 or prior. Learn more in Apple docs.
apple-touch-icon-60x60.png
Same as apple-touch-icon-57x57.png, for non-retina iPhone with iOS7.
apple-touch-icon-72x72.png
Same as apple-touch-icon-57x57.png, for non-retina iPad with iOS6 or prior.
apple-touch-icon-76x76.png
Same as apple-touch-icon-57x57.png, for non-retina iPad with iOS7.
apple-touch-icon-114x114.png
Same as apple-touch-icon-57x57.png, for retina iPhone with iOS6 or prior.
apple-touch-icon-120x120.png
Same as apple-touch-icon-57x57.png, for retina iPhone with iOS7.
apple-touch-icon-144x144.png
Same as apple-touch-icon-57x57.png, for retina iPad with iOS6 or prior.
apple-touch-icon-152x152.png
Same as apple-touch-icon-57x57.png, for retina iPad with iOS7.
apple-touch-icon-180x180.png
Same as apple-touch-icon-57x57.png, for iPhone 6 Plus with iOS8.
apple-touch-icon.png
Same as apple-touch-icon-57x57.png, for "default" requests, as some devices may look for this specific file. This picture may save some 404 errors in your HTTP logs. See Apple docs
apple-touch-icon-precomposed.png
Same as apple-touch-icon.png, expect that is already have rounded corners (but neither drop shadow nor gloss effect).

Плотность пикселей (pixel density) — количество пикселей, которое помещается в один линейный дюйм.
Измеряется в ppi (pixels per inch), относится к дисплеям, матрицам, сканерам. Тогда как dpi (dots per inch) имеет отношение к печати и прямо не соотносится с ppi.


Плотность пикселей

100-110 ppi — десктоп
110–135 ppi — ноутбук
160 ppi — средний смартфон
216 ppi — планшет Nexus 7
220 ppi — MacBook с ретиной
239 ppi — Chromebook Pixel
326 ppi — iPhone 5 с ретиной


Физический пиксель (physical pixel) — это ячейка на матрице, единица разрешения дисплея устройства.
Виртуальный пиксель (device independent pixel, dip) — это независимый от устройства пиксель, может быть больше, меньше или равен физическому.
Изменённый пиксель — появляется тогда, когда браузер или пользователь масштабируют изображение на экране.


Пиксельное соотношение (pixel ratio) — отношение физического пикселя к виртуальному. Может меняться в зависимости от браузера.
Nexus One: разрешение 480 физических пикселей и 320 виртуальных, в итоге соотношение 1,5
MacBook с ретиной: разрешение 2880 физических пикселей и 1440 виртуальных, в итоге соотношение 2,0


Ретина
Маркетинговый термин Apple, описывающий устройства с высоким разрешением и пиксельным соотношением больше, чем 1. То есть виртуальный пиксель увеличивается по отношению к физическому.
Все устройства Apple имеют соотношение 1 или 2
Другие планшеты и смартфоны имеют соотношение от 1,5 до 2,25

В терминологии Android, такие устройства называются
LDPI 0,75 — старые смартфоны
MDPI 1,0 — большинство смартфонов
HDPI 1,5 — Nexus One
XHDPI 2,0 — Galaxy Nexus, Galaxy Note


Приведение к физическим пикселям
<meta name="viewport" content="
      width=device-width,
      target-densityDpi=device-dpi">
Пока только работает на Android и в Opera Mobile


Определение ретины

Решаем, с какого соотношения начинать
1,5 для более широкого диапазона устройств
2,0 для самых ретинистых
Ищем значение пиксельного соотношения устройства


Определение ретины
@media (-webkit-min-device-pixel-ratio:1.5),
       (min-resolution:144dpi) { … }
@media (-webkit-min-device-pixel-ratio:2),
       (min-resolution:192dpi) { … }
Откуда цифры: 96dpi = 1dppx

Определение ретины
@media (-webkit-min-device-pixel-ratio:1.5),
       (min--moz-device-pixel-ratio:1.5),
       (-o-min-device-pixel-ratio:3/2),
       (min-resolution:1.5dppx) {
       E { something }
       }


Определение ретины
function isRetina(){
    return ('devicePixelRatio' in window
             && devicePixelRatio > 1);
}



Картинки в содержимом
<picture>
    <source srcset="small.jpg 1x, large.jpg 2x">
    <source media="(min-width:18em)"
            srcset="medium.jpg 1x, large.jpg 2x">
    <img src="small.jpg">
</picture>


Картинки в стилях
E {
    background-image:url(picture.png);
    background-image:image-set(
        url(small.jpg) 1x,
        url(medium.jpg) 2x);
    }


Графика
E {
    background:url(100px.png) no-repeat;
    background-size:50px 50px;
    }
Кроссбраузерность bg-size хромает, хотя 80% по миру
Не все файлы удачно масштабируются


Графика
E {
    background:url(50px.png) no-repeat;
    }
@media (retina) {
    E { background:url(100px.png) no-repeat; }
    }


Фолбек для IE6-8
E {
    background:url(image.png) no-repeat;
    background:
        rgba(0, 0, 0, 0)
        url(image.svg) no-repeat;
    }


Фолбек для Firefox 3.6 и Android 2.x
E {
    background:url(image.png) no-repeat;
    }
.inlinesvg E {
    background:url(image.svg) no-repeat;
    }


Фотографии
Подготовить фотографию в 1,5–2 раза больше требуемого
Сохранить со сжатием гораздо более смелым, до 20-30%
Уменьшить её размеры до нужных при вставке
Файл получится либо слегка больше, либо даже меньше
Внешнее качество и детализация фотографии повысятся


Canvas
На OS X с ретиной Canvas рисуется правильно, не просто с удвоением
На iOS атрибуты width и height нужно умножить на пиксельное соотношение, но установить оригинальные CSS-размеры
Чтобы не учетверить количество пикселов на OS X с ретиной, не забыть проверить ctx.webkitBackingStoreRatio < 2


Тестирование
Девайсы с ретиной, понятное дело
Opera Mobile Emulator
Android Emulator из Android SDK
iOS-симуляторы из Xcode
Quartz Debug из Graphics Tools для Xcode


=================================================================================================

CSS

Глобальные правила
Импорт шрифтов и внешних CSS-файлов
Сброс умолчаний браузера, чтобы два раза не бегать
Базовые правила для документа, ссылок


http://meyerweb.com/eric/tools/css/reset/


Порядок свойств

1. Позиционирование
2. Свойства блока
3. Размеры блока
4. Цветовое оформление
5. Типы содержимого
6. Текст
7. Визуальные свойства
8. Раскладка
9. Документ
10. Специальные


SMACSS:

Base—These are defaults styles, usually for single element selectors.
body, form {
  margin: 0;
  padding: 0;
}
a {
  color: #039;
}
a:hover {
  color: #03F;    
}

Layout—Divides the page into sections, usually holding modules together.
#header, #article, #footer {
  width: 960px;
  margin: auto;
}
#article {
  border: solid #CCC;
  border-width: 1px 0 0;
}

Module—Reusable, modular parts of the design: callouts, sidebar sections, product lists, and so on.
.module > h2 {
  padding: 5px;
}
.module span {
  padding: 5px;
}

State—Describes how the module or layout looks in a particular state, also in different page views.
.tab {
  background-color: purple;
  color: white;
}
.is-tab-active {
  background-color: white;
  color: black;
}

Theme—Describes how modules or layouts might look.
// in module-name.css
.mod {
  border: 1px solid;
}
// in theme.css
.mod {
  border-color: blue;
}


article
aside
audio
dialog
canvas
command
datalist
details
figcaption
figure
footer
header
hgroup
keygen
main
mark
menu
meter
nav
output
progress
rp
rt
ruby
section
source
summary
time
video
wbr