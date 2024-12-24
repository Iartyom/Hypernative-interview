
import { useMemo } from 'react'
import Video from "../video/video"
import { IVideo, IVideosList } from "../../utils/interfaces"
import { applyFilters } from '../../utils/help-functions'
import './video-list.css'

const VideoList: React.FC<IVideosList> = ({ videosList = [], textFilter, yearFilter, genreFilter, genresMap }) => {

  const videosAfterFilter = useMemo(() => applyFilters(videosList, textFilter, yearFilter, genreFilter, genresMap), [videosList, textFilter, yearFilter, genreFilter, genresMap])


  return <div className="video-list-container">
    {videosAfterFilter.length > 0 ? (
      videosAfterFilter.map((video: IVideo) => (
        <div key={video.id} className="video-item">
          <Video video={video} />
        </div>
      ))
    ) : (
      <img src="https://cdn2.hubspot.net/hub/2037604/hubfs/Broadcasting/no%20video-1.jpg?width=300&name=no%20video-1.jpg" alt="no-video" />
    )}
  </div>
}

export default VideoList
