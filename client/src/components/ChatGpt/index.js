import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_OPENAI_ANSWER = gql`
  query Openai($openaiInput2: String!) {
    openai(input: $openaiInput2) {
      answer
    }
  }
`;


const ChatGpt = (props) => {
  console.log("chat gpt props",props)

  const [setAnswer, {error,data,loading}]= useQuery(GET_OPENAI_ANSWER)

  
  return (
    <div>
      <p>ChatGpt Component</p>
    </div>
  )
}

export default ChatGpt
