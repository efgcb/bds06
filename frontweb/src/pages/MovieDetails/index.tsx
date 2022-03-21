import{ AxiosRequestConfig } from 'axios';
import AvalCard from 'components/Aval';
import ReviewCard from 'components/ReviewCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { hasAnyRoles, requestBackend} from 'util/requests';

import './styles.css';

type UrlParams = {
  movieId: string;
};
const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [review, setReview] = useState<Review[]>();

  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true
    };

    requestBackend(params).then((response) => {
      setReview(response.data);
    });
  },[movieId]);


  return (
    <div className="assentmentDetails-container">
      <div className="assentmentDetails-content-container">
        <h1>Tela detalhes do filme id: {movieId}</h1>

        {hasAnyRoles(['ROLE_MEMBER']) && (
          <AvalCard />  
        )}

         {review?.map((item) => (
           <div className="content-reviews" key={item.id}>
            <ReviewCard review={item}/>       
        </div>
         ))}
      </div>
    </div>
  );
};
export default MovieDetails;
