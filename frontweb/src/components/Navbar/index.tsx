import './styles.css';

const Navbar = () => {
  return (
    <nav className="bg-primary main-nav">
      <a className="nav-logo-text" href="/movies">
        <h4>MovieFlix</h4>
      </a>
      <button className="btn btn-primary btn-sair">SAIR</button>
    </nav>
  );
};

export default Navbar;
