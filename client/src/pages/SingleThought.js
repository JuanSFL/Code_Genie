import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { Helmet } from "react-helmet";

import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="single-question">
      <Helmet>
          <title>Code Genie | Viewing Post</title>
      </Helmet>
    <div className="my-3">
      <h3 className="created-by right">
        Posted by {thought.thoughtAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          On {thought.createdAt}
        </span>
      </h3>
      <div className="question-container">
        <blockquote
          className="question-block"
        >
          {thought.thoughtText}
        </blockquote>
      </div>

      <div className="comment-list">
        <CommentList comments={thought.comments} />
      </div>
      <div className="m-3 p-4">
        <CommentForm thoughtId={thought._id} />
      </div>
    </div>
    <div className="cont-space"></div>
    </div>
  );
};

export default SingleThought;
