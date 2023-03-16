import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import React, { useState } from 'react';


function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    if (inputValue) {
      setMessages([...messages, { text: inputValue, sender: 'user',type:'question', submitted:true }]);
      setInputValue('');
    }
  };

  return (
    <div className="card">
      <div className="chat-header">Chat</div>
      <div className="chat-window">
        <ul className="message-list">
          {messages.map((message, index) => (
            <li key={index} className={`message ${message.sender}`}>
              {message.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-input">
        <input
          type="text"
          className="message-input"
          placeholder="Ask your question here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="send-button" onClick={handleSendClick}>
            Submit
        </button>
      </div>
      <div class="savedAnswers">
<div class="savedAnswers_content">What does CSS stand for?<></>
</div></div>
<div class="savedAnswers">
<div class="savedAnswers_content">What is Javascript?<></>
</div></div>
<div class="savedAnswers">
<div class="savedAnswers_content">Difference between Object and Array <></>
</div></div>
    </div>
 
  );
}

export default ChatBox;