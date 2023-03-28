const [films] = charaster.filter(item => item.name === name);
const listSelectedFilms = filmsData.filter(({url}) =>
  films.films.includes(url),
);
