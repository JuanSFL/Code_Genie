import React from "react";
import tokens from "../images/tokens.png";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";


const GET_OPENAI_ANSWER = gql`
  query Openai($openaiInput2: String!) {
    openai(input: $openaiInput2) {
      answer
    }
  }
`;

function GenieMode() {
  const [question, setQuestion] = useState(""); // add a state variable to store the question

  const handleChange = (event) => {
    setQuestion(event.target.value); // update the state variable with the user input
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswer({ variables: { openaiInput2: question } });
  };

  const [setAnswer, { error, data, loading }] = useQuery(GET_OPENAI_ANSWER);

  return (
    <div>
      <div className="genie-ask">
        <h2>
          Get Your Answers. <span className="glowing">Instantly.</span>
        </h2>
        {Auth.loggedIn() ? (
          <form onSubmit={handleSubmit}> {/* wrap the input and button in a form */}
            <input
              className="ask-q"
              placeholder="Ask the Genie"
              type="text"
              title="Search"
              value={question} 
              onChange={handleChange} 
            ></input>
            <img src={tokens} className="token-icon" alt="token-icon"></img>
            <button className="flashy-btn" type="submit">Rub the Lamp</button> {/* add a type="submit" attribute to the button */}
            <p className="small-text">
              * This Question Will Cost 1 Genie Token *
            </p>
          </form>
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