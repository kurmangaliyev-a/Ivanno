"use strict";

let lengthNameOfFilm = 0;
let numberOfFilms = 0;
let personalMovieDB = {
    "count": 0,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": true
};
function start() {
    let x = false;
    while (!x) {
        x = true;
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
        if (numberOfFilms == "") {
            x = false;
        } else if (numberOfFilms.length > 50) {
            x = false;
        } else if (isNaN(numberOfFilms)) {
            x = false;
        } else {
            numberOfFilms = +(numberOfFilms);
        }
    }
}

function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        let a = prompt("Один из последних просмотренных фильмов?");
        personalMovieDB.movies[a] = prompt(`На сколько оцените ${a[0]}?`);
    }
}
function detectPersonalLevel() {
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

}
function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}
function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }

}
//start();
//rememberMyFilms();
//detectPersonalLevel();
//showMyDB();
writeYourGenres();
console.log(genres);
