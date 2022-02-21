import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from 'components/Login';

import './styles.css';

const Auth = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <h1>Avalie Filmes</h1>
          <h2>Diga o que você achou do seu filme favorito</h2>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
      <div className="home-login">
        <Login />
      </div>
    </div>
  );
};

export default Auth;
