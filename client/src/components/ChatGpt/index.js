import React, { useState } from "react";
import axios from 'axios';

function CodeGenie(props) {
  console.log(props);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get('http://localhost:3001/openai')
      .then(response => {
        setAnswer(response.data.answer);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question:
        <input type="text" value={question} onChange={handleQuestionChange} />
      </label>
      <button type="submit">Submit</button>
      <div>Answer: {answer}</div>
    </form>
  );
}

export default CodeGenie;