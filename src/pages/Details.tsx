import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MediaContext } from '../context';

const Details: React.FC = () => {

  const navigate = useNavigate();

  const mediaLibrary: MediaItem[] = useContext(MediaContext);

  const itemID: number = Number(useParams().id);
  const item: MediaItem | undefined
    = mediaLibrary.find(el => el.id === itemID);

  const handleClick = () => {
    console.log('CLICK', item);
    navigate('/player/0000');
  }

  const posterUrl = (item: MediaItem): string =>
    (item) ? `https://image.tmdb.org/t/p/original${item.poster}` : '';

  return (
    <div className="details">

      <div className="details-poster">
        <img src={ item && posterUrl(item) } alt="Poster" />
      </div>

      <div className="details-description">
        <p className="year">{ item && item.releaseDate?.slice(0, 4) }</p>
        <p className="title">{ item && item.title }</p>
        <p className="short">{ item && item.overview }</p>
        <div className="btn-watch"
          onClick={ handleClick } 
          >Watch Trailer
        </div>
      </div>

    </div>
  )
}

export default Details;