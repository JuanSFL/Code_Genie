import React from "react";
import tokens from "../images/tokens.png";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function GenieMode() {
  return (
    <div>
      <div className="genie-ask">
        <h2>
          Get Your Answers. <span className="glowing">Instantly.</span>
        </h2>
        {Auth.loggedIn() ? (
          <>
            <input
              className="ask-q"
              placeholder="Ask the Genie"
              type="text"
              title="Search"
            ></input>
            <img src={tokens} className="token-icon" alt="token-icon"></img>
            <button className="flashy-btn">Rub the Lamp</button>
            <p className="small-text">
              * This Question Will Cost 1 Genie Token *
            </p>
          </>
        ) : (
          <>
            <p className="not-logged">
              You need to be logged in to access Genie Mode. Please:
              <div className="log-btns">
                <Link to="/login">
                  <button className="flashy-btn">Login</button>
                </Link>
                <p className="or">Or</p>
                <Link to="/signup">
                  <button className="flashy-btn">Signup</button>
                </Link>
              </div>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default GenieMode;
