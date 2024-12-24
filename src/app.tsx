import { useEffect, useState } from 'react'
import { IVideo, IMovieData, selectOption } from './utils/interfaces'
import { fetchAllData } from './services/movies'
import { createGenreOptionsArr, createYearOptionsArr } from './utils/help-functions'

import Header from './components/header/header'
import VideoList from './components/video-list/video-list'

import './App.css'


function App () {
  const [videos, setVideos] = useState<IVideo[]>([])
  const [genres, setGenres] = useState<Map<number, string>>()
  const [releaseYearsOptions, setReleaseYearsOptions] = useState<selectOption[]>([]);
  const [genreOptions, setGenreOptions] = useState<selectOption[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [searchVideoValue, setSearchVideoValue] = useState("");
  const [selectedYear, setSelectedYear] = useState<selectOption[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<selectOption[]>([]);

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        const parsedData: IMovieData = await fetchAllData()

        setVideos(parsedData.movies)
        setGenres(parsedData.genres)

        setGenreOptions(createGenreOptionsArr(parsedData.genres));
        setReleaseYearsOptions(createYearOptionsArr(parsedData.movies))
      }
      catch (err) {
        setError("Failed to load data. Please try again later." + err);
      }
    }
    fetchMovies()
  }, [])

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className='app-wrapper'>
      <Header
        searchVideo={searchVideoValue}
        onSearchVideoChange={setSearchVideoValue}
        releaseYearsOptions={releaseYearsOptions}
        genreOptions={genreOptions}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        selectedGenres={selectedGenres}
        onGenreChange={setSelectedGenres}
      />

      <VideoList
        videosList={videos}
        textFilter={searchVideoValue}
        yearFilter={selectedYear}
        genreFilter={selectedGenres}
        genresMap={genres}
      />
    </div>
  )
}

export default App

