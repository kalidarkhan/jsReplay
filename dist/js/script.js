const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i<2; i++) {
    lastViewFilms = prompt('Один из последних промотренных фильмов?', "");
    evaluateThisFilms = prompt('На сколько оцените его?', "");
    personalMovieDB.movie[lastViewFilms] = evaluateThisFilms;
}

console.log(personalMovieDB);

