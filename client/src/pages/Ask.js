import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import NotAuthorized from '../components/NotAuthorized';
import { Helmet } from "react-helmet";

const Ask = () => {
  const [thoughtText, setThoughtText] = useState('');
  const [thoughtTitle, setThoughtTitle] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }


    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          thoughtTitle,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    } 
    if (name === 'thoughtTitle' && value.length <= 80) {
      setThoughtTitle(value);
    }
  };
  

  return (
    <div className="top-pad">
      <Helmet>
          <title>Code Genie | Ask</title>
      </Helmet>
      <h3 className="type-white large">Ask the Community</h3>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="question-title">
              <textarea
                name="thoughtTitle"
                placeholder="Post Title"
                value={thoughtTitle}
                className="title-input"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="question-ask">
              <textarea
                name="thoughtText"
                placeholder="Ask your question here"
                value={thoughtText}
                className="ask-input"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <p
            className={`type-white ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>

          
              <button className="flashy-btn" type="submit">
                Create Post !
              </button>
        
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
   <NotAuthorized/>
      )}
    </div>
  );
};

export default Ask;
