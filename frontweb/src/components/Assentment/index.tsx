import { ReactComponent as StarImage } from 'assets/images/star.svg';
import './styles.css';

const Assentment = () => {
  return (
    <div className="assentment-card-container">
      <div className="assentment-top-container">
        <StarImage />
        <h6>Maria Silva</h6>
      </div>
      <div className="assentment-content-container">
        <p>
          Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
        </p>
      </div>
    </div>
  );
};

export default Assentment;
