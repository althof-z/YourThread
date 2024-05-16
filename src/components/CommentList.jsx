import React from 'react';
import PropTypes from 'prop-types';
import Commentitem from './CommentItem';

function CommentList({
  comments,
  upVote,
  downVote,
  neutralizeVote,
  authUser,
}) {
  if (comments === undefined) {
    return null;
  }

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Commentitem
          key={comment.id}
          id={comment.id}
          authUser={authUser}
          owner={comment.owner}
          content={comment.content}
          createdAt={comment.createdAt}
          upVotesBy={comment.upVotesBy}
          downVotesBy={comment.downVotesBy}
          upVote={upVote}
          downVote={downVote}
          neutralizeVote={neutralizeVote}
        />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      owner: PropTypes.shape({
        name: PropTypes.string,
        avatar: PropTypes.string,
      }),
      content: PropTypes.string,
      createdAt: PropTypes.string,
      upVotesBy: PropTypes.arrayOf(PropTypes.string),
      downVotesBy: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default CommentList;
