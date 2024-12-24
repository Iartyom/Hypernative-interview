
import './video.css'
import { IVideo } from '../../utils/interfaces'


const Video: React.FC<{ video: IVideo }> = ({ video }) => {

  return <div className="video-card">
    <img src={video.image_url} alt={`${video.title} thumbnail`} className="video-card-image" />

    <p className="video-card-title">{video.title}</p>
    <p className="video-card-artist">{video.artist}</p>
    <p className="video-card-year">{video.release_year}</p>
  </div>
}
export default Video