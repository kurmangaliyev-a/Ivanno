"use strict";
/*
//HOME WORK1
 Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
let numberOfFilms;
numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
let personalMovieDB = {
    "count": 0,
    "movies": {},
    "actors":{},
    "genres":[],
    "privat": false
};
personalMovieDB.count = numberOfFilms;
//console.log(personalMovieDB.count, typeof (personalMovieDB.count), typeof (personalMovieDB.movies), typeof (personalMovieDB.actors), typeof (personalMovieDB.genres), typeof (personalMovieDB.privat));
let a = [];
a[0] = prompt("Один из последних просмотренных фильмов?");
a[1] = prompt("Один из последних просмотренных фильмов?");
personalMovieDB.movies[a[0]] = prompt(`На сколько оцените ${a[0]}?`);
personalMovieDB.movies[a[1]] = prompt(`На сколько оцените ${a[1]}?`);
console.log(personalMovieDB.movies);
