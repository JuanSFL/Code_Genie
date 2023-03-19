import React, { useState } from "react";
import tokens from "../images/tokens.png";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import NotAuthorized from "../components/NotAuthorized";
import { Helmet } from "react-helmet";
// import GenieTokens from "../components/GeniePoints";
import NoMoreTokens from "../components/NoMoreTokens";
const GET_OPENAI_ANSWER = gql`
  query Openai($openaiInput2: String!) {
    openai(input: $openaiInput2) {
      answer
    }
  }
`;

function GenieMode() {
  const [question, setQuestion] = useState(""); // add a state variable to store the question
  const [setAnswer, { loading, data }] = useLazyQuery(GET_OPENAI_ANSWER);
  const [history, setHistory] = useState([]); // add a state variable to store the history of questions and answers
  const [genieTokens, setGenieTokens]=useState(3)

  const handleClick = (event)=>{
    setGenieTokens(genieTokens-1)
  }

  if(genieTokens<0){
    return(<div>
      <Helmet>
          <title>Code Genie | GenieMode</title>
      </Helmet>
      <NoMoreTokens/>
      </div>)
  }

  const handleChange = (event) => {
    setQuestion(event.target.value); // update the state variable with the user input
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswer({ variables: { openaiInput2: question } });
    // add the current question and its response to the history array
    setHistory([...history, { question, answer: data?.openai.answer }]);
    // clear the question input field
    setQuestion("");
  };

  console.log("Genie Mode Page", data);
  return (
    <div>
      <Helmet>
          <title>Code Genie | GenieMode</title>
      </Helmet>
      <div className="genie-ask">
        <h2>
          Get Your Answers. <span className="glowing">Instantly.</span>
        </h2>
        {Auth.loggedIn() ? (
          <form onSubmit={handleSubmit} >
            <input
              className="ask-q"
              placeholder="Ask the Genie"
              type="text"
              title="Search"
              value={question}
              onChange={handleChange}
            ></input>
            <img src={tokens} className="token-icon" alt="token-icon"></img><p>{genieTokens}</p>
            {loading ? (
              <div class="spinner">
                <div class="spinner1"></div>
              </div>
            ) : (
              <div>
                <button className="lamp-btn" type="submit" onClick={handleClick}>
                  Rub the Lamp
                </button>
                <p className="small-text">
                  * This Question Will Cost 1 Genie Token *
                </p>
                <div className={`genie-response ${data?.openai.answer ? "loaded" : ""}`}>
                  <p className="response">{question}</p>
                  <p className="response">{data?.openai.answer}</p>
                </div>
                {/* <div className="genie-history">
                  {history.slice(-3).map((entry, index) => (
                    <div key={index} className="history-entry">
                      <p className="question">{entry.question}</p>
                      <p className="answer">{entry.answer}</p>
                    </div>
                  ))}
                </div> */}
              </div>
            )}
          </form>
        ) : (
          <>
            <NotAuthorized />
          </>
        )}
      </div>
    </div>
  );
}

export default GenieMode;
