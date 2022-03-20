import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import history from 'util/history';
import { getTokenData, isAuthenticated, removeAuthData } from 'util/requests';
import './styles.css';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="bg-primary main-nav">
      <a className="nav-logo-text" href="/movies">
        <h4>MovieFlix</h4>
      </a>
      {authContextData.authenticated ? (
        <button
          className="btn btn-primary btn-sair"
          onClick={handleLogoutClick}
        >
          SAIR
        </button>
      ) : null}
    </nav>
  );
};

export default Navbar;
