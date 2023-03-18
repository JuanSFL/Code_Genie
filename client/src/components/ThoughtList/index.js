import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
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
                  className="text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span>
                    Posted this on {thought.createdAt}
                  </span>
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
              className="view-post"
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
