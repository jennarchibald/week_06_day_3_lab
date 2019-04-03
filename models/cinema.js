const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmsTitles = function () {

  return this.films.map( (film) => {
    return film.title
  });

};

Cinema.prototype.findFilmByTitle = function (title) {

  return  this.films.find( (film) => {
    return film.title === title;
  });

};

Cinema.prototype.filterByGenre = function (genre) {

  return this.films.filter( (film) => {
    return  film.genre === genre;
  });

};

Cinema.prototype.filmsFromYear = function (year) {

  return this.films.some( (film) => {
    return film.year === year;
  });

};

Cinema.prototype.allFilmsOverLength = function (length) {

  return this.films.every( (film) => {
    return film.length >= length;
  });

};

Cinema.prototype.filmTotalRunTime = function () {

  return this.films.reduce( (sum, film) => {
    return sum + film.length;
  }, 0);
};


Cinema.prototype.filmsByProperty = function (callback, value) {

  return this.films.filter( (film) => {

    return callback(film) === value

  });



  // return this.films.filter( (film) => {
  //   if (property === 'year'){
  //     return film.year === value
  //   } else if (property === 'genre')
  //   return film.genre === value
  // });

};



module.exports = Cinema;
