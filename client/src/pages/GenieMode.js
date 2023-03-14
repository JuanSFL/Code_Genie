import React from "react";
import tokens from "../images/tokens.png"
// import React, { useState, useEffect } from 'react';

// const [genieAnswer, setGenieAnswer] = useState('')

function GenieMode() {
  return (
    <div>
    <div className="genie-ask">
    <h2>Get Your Answers. <span className="glowing">Instantly.</span></h2>
    <input className="ask-q" placeholder="Ask the Genie" type="text" title="Search"></input>
    <img src={tokens} className="token-icon"></img>
    <button className="flashy-btn">Rub the Lamp</button>
    <p className="small-text">* This Question Will Cost 1 Genie Token *</p>
    </div>
    </div>
  )
}

export default GenieMode