import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3 className="type-white center">No Posts Available</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="post-header">
            <div className="post-preview">
            <h4>
              {showUsername ? (
                <Link
                  className="post-title"
                  to={`/thoughts/${thought._id}`}
                >
                  {thought.thoughtTitle} <br />
                </Link>
              ) : (
                <>
                  <span>
                    Posted this on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            {/* <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div> */}
            <Link
              className="view"
              to={`/thoughts/${thought._id}`}
            >
              View Post and Replys
            </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
