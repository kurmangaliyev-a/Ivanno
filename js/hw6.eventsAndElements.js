/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const elems = {
        "adv": document.querySelector('.promo__adv'),
        "genre": document.querySelector('.promo__genre'),
        "bg": document.querySelector('.promo__bg'),
        "movieBlock": document.querySelector('.promo__interactive-list'),
        "addForm": document.querySelector('form.add'),
        "input": document.querySelector('.adding__input'),
        "checkbox": document.querySelector('[type="checkbox"]'),
    };
    //1) Удалить все рекламные блоки со страницы(правая часть сайта)
    const deleteAdv = (block) => {
        block.remove();
    }
    //2) Изменить жанр фильма, поменять "комедия" на "драма"
    //3) Изменить задний фон постера с фильмом на изображение "bg.jpg".Оно лежит в папке img. Реализовать только при помощи JS
    const makeChanges = () => {
        elems.genre.textContent = "Драмма"; //innerHtml чтобы вставлять хтмл
        elems.bg.style.background = "url('../img/bg.jpg') no-repeat";

    }
    elems.addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let str = elems.input.value.toLowerCase();
        const favorite = elems.checkbox.checked;
        if (str) {
            if (str.length > 21) {
                str = str.substr(0, 21);
                str += '...';
            }
            movieDB.movies.push(str);
            if (favorite) {
                console.log(str);
            }
            movieRender(movieDB.movies, elems.movieBlock);
            event.target.reset();
        }

    })
    const sortArr = (arr) => {
        arr.sort();
    }

    //4)Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту
    let movieRender = function (films, parent) {
        sortArr(movieDB.movies);
        parent.innerHTML = "";
        films.forEach(function (item, i) {
            parent.innerHTML += '<li class="promo__interactive-item">' + (i + 1) + ') ' + item + ' <div class="delete"></div></li>';
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                movieRender(movieDB.movies, elems.movieBlock);
            })
        })
    }
    /*
    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.*/



    let deleteMovie = document.querySelectorAll('.delete');
    let deleteMov = function (event) {
        console.log(event.target.parentElement.textContent); ёё
    }
    deleteMovie.forEach(item => {
        console.log(item);
        item.addEventListener('click', deleteMov);
    })
    deleteAdv(elems.adv);
    makeChanges();
    movieRender(movieDB.movies, elems.movieBlock);

})
