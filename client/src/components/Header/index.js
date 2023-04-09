import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import logo from '../../images/logo.png';

function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/" className="navbar-brand">
      <img src={logo} id="logo" className="d-lg-none" alt="" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      onClick={toggleNavbar}
      aria-controls="navbarNav"
      aria-expanded={!collapsed}
      aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`navbar-collapse ${collapsed ? 'collapse' : ''}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/community" className="nav-link active" onClick={toggleNavbar}>
              Community
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ask" className="nav-link active" onClick={toggleNavbar}>
              Ask a Question
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/genie-mode" className="nav-link" onClick={toggleNavbar}>
              Genie Mode
            </Link>
          </li>
        </ul>

        <Link to="/"><img src={logo} id="logo" className="navbar-brand d-none d-lg-block"></img></Link>

        {Auth.loggedIn() ? (
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/me" className="nav-link active" onClick={toggleNavbar}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={toggleNavbar}>
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Header;
