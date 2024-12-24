import { selectOption, IVideo } from "./interfaces";

export const createGenreOptionsArr = (
  genres: Map<number, string>
): selectOption[] => {
  const genreOptionsArray: selectOption[] = [];
  genres.forEach((value) => {
    genreOptionsArray.push({ value: value, label: value });
  });
  return genreOptionsArray;
};

export const createYearOptionsArr = (movies: IVideo[]): selectOption[] => {
  const yearOptions = new Set<string>();
  console.log(movies.length);

  movies
    .sort((aMovie, bMovie) => bMovie.release_year - aMovie.release_year)
    .forEach((movie) => {
      if (movie?.release_year) yearOptions.add(movie.release_year.toString());
    });

  const yearsOptionsArray: selectOption[] = [];
  yearOptions.forEach((value) => {
    yearsOptionsArray.push({ value: value, label: value });
  });
  return yearsOptionsArray;
};

export const applyFilters = (
  videos: IVideo[],
  textFilter: string,
  yearFilter: selectOption[],
  genreFilter: selectOption[],
  genresMap: Map<number, string> | undefined
): IVideo[] => {
  return videos
    .filter((video) => {
      const filterVal = textFilter.toLowerCase();
      const strTitle = video.title.toString();
      const strArtist = video.artist.toString();
      if (textFilter !== "")
        return (
          strTitle.toLowerCase().includes(filterVal) ||
          strArtist.toLowerCase().includes(filterVal)
        );
      return true;
    })
    .filter((video) => {
      if (yearFilter?.[0]?.value !== undefined)
        return video.release_year === Number(yearFilter[0].value);
      return true;
    })
    .filter((video) => {
      if (genreFilter.length > 0)
        return genreFilter.some((genre) => {
          if (video?.genre_id)
            return genre.value === genresMap?.get(video?.genre_id);
        });
      return true;
    });
};
