const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function() {
  const films = this.films;
  const result = films.map((film) => {
    return film.title;
  });
  return result;
};

Cinema.prototype.findFilmByTitle = function(filmTitle) {
  const films = this.films;
  const result = films.find((film) => {
    return film.title === filmTitle;
  });
  return result;
};

// Cinema.prototype.filterFilmsByGenre = function(filmGenre) {
//   const films = this.films;
//   const result = films.filter((film) => {
//     return film.genre === filmGenre;
//   });
//   return result;
// };

Cinema.prototype.filmsFromYear = function(year) {
  const films = this.films;
  const result = films.some((film) => {
    return film.year === year;
  });
  return result;
};

Cinema.prototype.filmsOverLength = function(length) {
  const films = this.films;
  const result = films.every((film) => {
    return film.length >= length;
  });
  return result;
};

Cinema.prototype.totalFilmLength = function() {
  const films = this.films;
  const result = films.reduce((acc, film) => {
    return acc + film.length;
  }, 0);
  return result;
};

Cinema.prototype.filmsByProperty = function(property, value) {
  const films = this.films;
  const result = films.filter((film) => {
    return film[property] === value;
  });
  return result;
};

module.exports = Cinema;
