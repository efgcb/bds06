import { AxiosRequestConfig } from 'axios';
import AvalCard from 'components/Aval';
import ReviewCard from 'components/ReviewCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetailsById } from 'types/MovieDetailsById';
import { Review } from 'types/review';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [movieDetailsById, setMovieDetailsById] = useState<MovieDetailsById>();
  const [reviews, setReviews] = useState<Review[]>([]);

  //BUSCA FILME POR ID
  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovieDetailsById(response.data);
    });
  }, [movieId]);

  //BUSCA REVISOES
  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="movieDetails-container">
      <div className="movie-container">
        <div className="movie-image-container">
          <img src={movieDetailsById?.imgUrl} alt={movieDetailsById?.title} />
        </div>
        <div className="card-movie-details">
          <h4>{movieDetailsById?.title}</h4>
          <h5>{movieDetailsById?.year}</h5>
          <h6>{movieDetailsById?.subTitle}</h6>
          <div className="card-bottom-container">
            <h6>{movieDetailsById?.synopsis}</h6>
          </div>
        </div>
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <AvalCard movieId={movieId} onInsertReview={handleInsertReview} />
      )}

      {reviews?.map((item) => (
        <div className="content-reviews" key={item.id}>
          <ReviewCard review={item} />
        </div>
      ))}
    </div>
  );
};
export default MovieDetails;
