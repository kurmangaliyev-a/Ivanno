"use strict";

/* Задания на урок:
//1) Удалить все рекламные блоки со страницы(правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту
5) Добавить нумерацию выведенных фильмов */
'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1) Удалить все рекламные блоки со страницы(правая часть сайта)
const elems = {
    "adv": document.querySelector('.promo__adv'),
    "genre": document.querySelector('.promo__genre'),
    "bg": document.querySelector('.promo__bg'),
    "films": document.querySelectorAll('.promo__interactive-item')
}
elems.adv.remove();


//2) Изменить жанр фильма, поменять "комедия" на "драма"
elems.genre.textContent = "Драмма"; //innerHtml чтобы вставлять хтмл


//3) Изменить задний фон постера с фильмом на изображение "bg.jpg".Оно лежит в папке img. Реализовать только при помощи JS
elems.bg.style.background = "url('../img/bg.jpg') no-repeat";
//elems.bg.style.height="2500px"
//4)Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту
let filmsName = [];
elems.films.forEach(function (item, i) {
    filmsName[i] = elems.films[i].textContent;
});
filmsName.sort();
console.log(elems.films)
elems.films[0].textContent = '123';
elems.films.forEach(function (item, i) {
    elems.films[i].textContent = filmsName[i];
});
filmsName = [];
//Добавить нумерацию выведенных фильмов
elems.films.forEach(function (item, i) {
    elems.films[i].textContent = (i + 1) + ') ' + elems.films[i].outerText;
});
