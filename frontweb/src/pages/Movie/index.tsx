import PrivateRoute from 'components/PrivateRoute';
import { Link } from 'react-router-dom';
import './styles.css';

const Movie = () => {
  return (
    <div className="assentment-container">     

      <h1>Tela listagem de filmes</h1>
      <PrivateRoute path="/movies/1">
        <p>Acessar /movies/1</p>
      </PrivateRoute>
      <PrivateRoute path="/movies/2">
        <p>Acessar /movies/2</p>
      </PrivateRoute>
    </div>
  );
};

export default Movie;
