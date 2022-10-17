import { Link } from 'react-router-dom';
import { Movie } from 'types/Movie';

import './styles.css';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <Link to={`/movies/${movie.id}`}>
       <div className="base-card movie-card">
      <div className="card-top-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="card-bottom-container">
        <h4>{movie.title}</h4>
        <h5>{movie.year}</h5>
        <h6>{movie.subTitle}</h6>
      </div>
    </div>
    </Link> 
  );
};

export default MovieCard;
