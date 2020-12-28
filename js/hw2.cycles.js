"use strict";
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms = '';
let lengthNameOfFilm = 0;
while (numberOfFilms == '' || lengthNameOfFilm > 50) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
    lengthNameOfFilm = numberOfFilms.length;
}

let personalMovieDB = {
    "count": 0,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false
};
personalMovieDB.count = numberOfFilms;
if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else if (personalMovieDB.count >= 10) {
    alert("Вы классический зритель")
}
else if (personalMovieDB.count >= 0) {
    alert("Просмотрено довольно мало фильмов")
}
else {
    alert("Произошла ошибка");
}

let movies = {};
for (let i = 0; i < numberOfFilms; i++) {
    let a = prompt("Один из последних просмотренных фильмов?");
    movies[a] = prompt(`На сколько оцените ${a[0]}?`);
}
console.log(movies);
