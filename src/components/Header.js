import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="bg-dark text-white p-3">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <Link className="navbar-brand" to="/">My Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
