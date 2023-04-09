import { Link } from "react-router-dom";
import genieDemo from "../images/iphone-demo.png";
import icons from "../images/icons.png";
import Auth from "../utils/auth";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const hero2 = document.querySelector(".hero-2");
    window.addEventListener("scroll", () => {
      const heroTop = hero.getBoundingClientRect().top;
      const hero2Top = hero2.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (heroTop < windowHeight && heroTop > -hero.offsetHeight) {
        hero.classList.remove("hidden");
      } else {
        hero.classList.add("hidden");
      }
      if (hero2Top < windowHeight && hero2Top > -hero2.offsetHeight) {
        hero2.classList.remove("hidden");
      } else {
        hero2.classList.add("hidden");
      }
    });
  }, []);

  return (
    <div className="appear">
      <div>
        <div className="hero">
          <div className="welcome-info">
            <p className="description low-opacity">CODE GENIE</p>
            <h1 className="bold-intro">
              For Developers, By Developers... And A.I.
            </h1>
            <p className="description">
              The Worlds first coding forum to integrate an A.I. chatbot to get
              developers answers immediately.
            </p>

            {Auth.loggedIn() ? (
              <>
                <div className="btn-options">
                  <Link to="/genie">
                    <button className="flashy-btn left">Genie Mode</button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="btn-options">
                  <Link to="/login">
                    <button className="flashy-btn left">Login</button>
                  </Link>
                  <p className="or">Or</p>
                  <Link to="/signup">
                    <button className="flashy-btn left">Signup</button>
                  </Link>
                </div>
              </>
            )}
          </div>
          <div className="demo">
            <Link to="/genie-mode">
              <img src={genieDemo} className="card"></img>
            </Link>
            <div className="banner">GENIE MODE</div>
          </div>
        </div>

        <div className="excess"></div>

        <div className="hero-2">
            <Link to="/genie-mode">
              <img src={icons} className="card-2"></img>
            </Link>
          <div className="welcome-info-2">
            <p className="description low-opacity">QUESTION AND ANSWER</p>
            <h1 className="bold-intro">
              EVERYONE WINS
            </h1>
            <p className="description">
              Interact with the community or answer other members questions to earn GenieTokens.
            </p>

                <div className="btn-options">
                  <Link to="/ask">
                    <button className="flashy-btn left">Ask</button>
                  </Link>
                  <p className="or">Or</p>
                  <Link to="/community">
                    <button className="flashy-btn left">Answer</button>
                  </Link>
                </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
