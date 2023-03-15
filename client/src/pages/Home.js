import { Link } from 'react-router-dom';
import genieDemo from "../images/genie-demo.png"
import Auth from '../utils/auth';

function Home() {


  return (
    <div className="appear">
      <div>
      <div className="hero">
        <div className="welcome-info">
        <p className="description low-opacity">CODE GENIE</p>
      <h1 className="bold-intro">For Developers, By Developers... And A.I.</h1>
      <p className="description">The Worlds first coding forum to integrate an A.I. chatbot to get developers answers immediately.</p>

    {Auth.loggedIn() ? (
            <>
      <div className="btn-options">
      <Link to ="/search"><button className="flashy-btn left">Search</button></Link>
      </div>
            </>
          ) : (
            <>
      <div className="btn-options">
      <Link to ="/login"><button className="flashy-btn left">Login</button></Link>
      <p className="or">Or</p>
      <Link to ="/signup"><button className="flashy-btn left">Signup</button></Link>
      </div>
            </>
          )}
      </div>
      <img src={genieDemo} className="card"></img>
      </div>
      </div>
    </div>
  );
}

export default Home;
