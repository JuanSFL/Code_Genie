import React from 'react';
import { Link } from 'react-router-dom';

const CommunityQuestions = ({
  thoughts,
  title,
  thoughtTitle = true,
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
            <div className="community-post">
            <div className="individual-post">
            <h4>
                <Link
                  className="post-title"
                  to={`/thoughts/${thought._id}`}
                >
                  {thought.thoughtTitle} <br />
                </Link>
            </h4>
            <div className="full-post">
            <div className="card-body p-2">
              <p>{thought.thoughtText}</p>
            </div>
            <Link to={`/thoughts/${thought._id}`}><button className="view-post">View Post and Replys</button></Link>
            </div>
            </div>
            </div>
            </div>
        ))}
    </div>
  );
};

export default CommunityQuestions;
