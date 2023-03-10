import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

function Header() {
    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<img src={logo} id="logo" className="navbar-brand d-lg-none" alt=""></img>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">About <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Ask a Question</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="genieMode" href="#">Genie Mode</a>
      </li>
    </ul>
    
    <img src={logo} id="logo" className="navbar-brand d-none d-lg-block"></img>
    
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Header;