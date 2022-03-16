import axios, { AxiosRequestConfig } from 'axios';
import AvalCard from 'components/Aval';
import ReviewCard from 'components/ReviewCard';
import { stringify } from 'qs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { BASE_URL, requestBackend } from 'util/requests';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {

  /*
const review : Review = {
  "id": 1,
  "text": "Meh, filme OK",
  "movieId": 1,
  "user": {
      "id": 1,
      "name": "Bob",
      "email": "bob@gmail.com"
  }
}
*/

const [review, setReview] = useState<Review>();

useEffect(() => {
  axios.get(BASE_URL + "/movies/1/review")
  .then(response => {
    setReview(response.data); 
  });
},[]);



  return (
    <div className="assentmentDetails-container">
      <div className="assentmentDetails-content-container">
        <h1>Tela detalhes do filme id: 1</h1>
        <AvalCard />
        <div className="content-reviews">
          {review && <ReviewCard review={review}/>}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
