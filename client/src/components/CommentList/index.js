import React from 'react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3 className="type-white">No Comments Yet</h3>;
  }

  return (
    <>
      <h3
        className="text-white right"
      >
        Comments:
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {comment.commentAuthor} -
                  <span style={{ fontSize: '0.825rem' }}>
                     {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
