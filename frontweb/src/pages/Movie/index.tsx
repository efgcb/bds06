import { Link } from 'react-router-dom';
import { hasAnyRoles } from 'util/requests';
import './styles.css';

const Movie = () => {
  return (
    <div className="assentment-container">     

    <h1> Resultado = {hasAnyRoles(['ROLE_MEMBER']) ? 'SIM' : 'NAO'}</h1>


      <h1>Tela listagem de filmes</h1>
      <Link to="/movies/1">
        <p>Acessar /movies/1</p>
      </Link>
      <Link to="/movies/2">
        <p>Acessar /movies/2</p>
      </Link>
    </div>
  );
};

export default Movie;
