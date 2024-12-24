import axios from "axios";

import { API_URL } from "../utils/consts";
import { IVideo, IMovieData, IGenres } from "../utils/interfaces";

export const fetchAllData = async () => {
  try {
    const response = await axios.get(API_URL);
    const parsedDate: IMovieData = {
      movies: [],
      genres: new Map<number, string>(),
    };

    // parse movies
    response?.data?.videos.forEach((video: IVideo) => {
      if (!video?.image_url || !video?.title || !video?.id) return;
      const newVideo: IVideo = {
        id: video?.id,
        image_url: video?.image_url,
        title: video?.title,
        artist: video?.artist,
        release_year: video?.release_year,
        genre_id: video?.genre_id,
      };

      parsedDate.movies.push(newVideo);
    });

    // parse genres
    response?.data?.genres.forEach((genre: IGenres) => {
      if (!genre?.id || !genre?.name) return;

      parsedDate.genres.set(genre.id, genre.name);
    });

    return parsedDate;
  } catch (error) {
    throw Error("Error fetching movies: " + error);
    throw error;
  }
};
