"use strict";

let lengthNameOfFilm = 0;
let numberOfFilms = 0;
let personalMovieDB = {
    "count": 0,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false,
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    start: function () {
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
    },
    rememberMyFilms: function () {
        for (let i = 0; i < numberOfFilms; i++) {
            let a = prompt("Один из последних просмотренных фильмов?");
            personalMovieDB.movies[a] = prompt(`На сколько оцените ${a}?`);
        }
    },
    detectPersonalLevel: function () {
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

    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            personalMovieDB.genres[i - 1] = null;
            while (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == '') {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        }
        personalMovieDB.genres.forEach(function (item, i, arr) {
            console.log(`Любимый жанр №${i + 1}: - это  ${item}`);
        });
    }
};






//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
