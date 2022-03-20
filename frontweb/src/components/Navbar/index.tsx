import { useEffect, useState } from 'react';
import history from 'util/history';
import { getTokenData, isAuthenticated, removeAuthData, TokenData } from 'util/requests';
import './styles.css';

type AuthData = {
  authenticated: boolean,
  tokenData?: TokenData
}


const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({authenticated: false});

    useEffect(() => {
      if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData()
      });
    }
    else {
      setAuthData({
        authenticated: false
      });
    }
    }, [])

    const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthData({
          authenticated: false
        });
        history.replace('/');
    }


  return (
    <nav className="bg-primary main-nav">
      <a className="nav-logo-text" href="/movies">
        <h4>MovieFlix</h4>
      </a>
      {authData.authenticated? (
        <button className="btn btn-primary btn-sair" onClick={handleLogoutClick}>SAIR</button>
      ) : (
        <button className="btn btn-primary btn-navbar-login">Login</button>
      )
    
    }
      
      
    </nav>
  );
};

export default Navbar;
