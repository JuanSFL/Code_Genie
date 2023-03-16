import React from "react";
import tokens from "../images/tokens.png";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { useParams } from 'react-router-dom';



function GenieMode() {

  const { username: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { genieTokens: userParam },
  });

  const user = data?.me || data?.user || {};
=======
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
>>>>>>> 2e26f428423ec5a1179440f1208e767435e3c13f

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
<<<<<<< HEAD
            <img src={tokens} className="token-icon" alt="token-icon"></img>{user.genieTokens}
            
            <button className="flashy-btn">Rub the Lamp</button>
=======
            <img src={tokens} className="token-icon" alt="token-icon"></img>
            <button className="flashy-btn" type="submit">Rub the Lamp</button> {/* add a type="submit" attribute to the button */}
>>>>>>> 2e26f428423ec5a1179440f1208e767435e3c13f
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