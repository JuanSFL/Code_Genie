import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<Link to="/"><img src={logo} id="logo" className="navbar-brand d-lg-none" alt=""></img></Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">

    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/community" className="nav-link active">Community<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link to="/ask" className="nav-link" >Ask a Question</Link>
      </li>
      <li className="nav-item">
        <Link to="/genie-mode"  className="nav-link" id="genieMode">Genie Mode</Link>
      </li>
    </ul>
    
    <Link to="/"><img src={logo} id="logo" className="navbar-brand d-none d-lg-block"></img></Link>
    

    {Auth.loggedIn() ? (
            <>
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to="/me"><a className="nav-link" href="/login">Profile</a></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={logout}>Logout</a>
      </li>
    </ul>
            </>
          ) : (
            <>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/login"><a className="nav-link" href="/login">Login</a></Link>
      </li>
    </ul>
            </>
          )}


  </div>
</nav>
    )
}

export default Header;