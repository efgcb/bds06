import { ReactComponent as StarImage } from 'assets/images/star.svg';
import { Review } from 'types/review';
import './styles.css';

type Props = {
    review: Review
}

const ReviewCard = ({ review } : Props) => {
  return (
    <div className="assentment-card-container">
      <div className="assentment-top-container">
        <StarImage />
        <h6>{review.user.name}</h6>
      </div>
      <div className="assentment-content-container">
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
