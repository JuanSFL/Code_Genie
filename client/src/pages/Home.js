import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [loginCardOpen, setLoginCardOpen] = useState(false);
  const [searchCardOpen, setSearchCardOpen] = useState(false);

  const toggleLoginCard = () => {
    setLoginCardOpen(!loginCardOpen);
  }

  const toggleSearchCard = () => {
    setSearchCardOpen(!searchCardOpen);
  }

  return (
    <div>
      {/* <h1 className="intro">GET ANSWERS FAST.</h1> */}
        <div className="welcome-info">
        <div className="card-display">
        <div className={`card1 ${loginCardOpen ? 'card-open' : ''}`}>
          <div className="details">
          <h4>Code Genie</h4>
          <span>The worlds first forum to integrate an AI chatbot to help developers get answers instantly.</span>
          <Link to ="/login"><button className="flashy-btn" >Login</button></Link>
          </div>
        </div>
        <div className={`card2 ${searchCardOpen ? 'card-open' : ''}`}>
        <div className="details">
          <h4>Solutions</h4>
          <span>Search previously asked community questions for a solution</span>
          <Link to="/search"><input placeholder="Search" className="input" name="text" type="text"></input></Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
