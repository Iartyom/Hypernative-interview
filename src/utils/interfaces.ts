export interface IVideo {
  id: number;
  image_url: string;
  title: string;
  artist: string;
  release_year: number;
  genre_id: number;
}

export interface IVideosList {
  videosList: IVideo[];
  textFilter: string;
  yearFilter: selectOption[];
  genreFilter: selectOption[];
  genresMap: Map<number, string> | undefined;
}

export interface IGenres {
  id: number;
  name: string;
}

export interface IMovieData {
  movies: IVideo[];
  genres: Map<number, string>;
}

export interface IHeaderProps {
  searchVideo: string;
  onSearchVideoChange: (value: string) => void;
  releaseYearsOptions: selectOption[];
  selectedYear: selectOption[];
  onYearChange: (value: selectOption[]) => void;
  genreOptions: selectOption[];
  selectedGenres: selectOption[];
  onGenreChange: (value: selectOption[]) => void;
}

export type selectOption = { value: string; label: string };
