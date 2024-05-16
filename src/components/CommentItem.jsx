import React from 'react';
import PropTypes from 'prop-types';
import postedAt from '../utils';
import VoteButton from './VoteButton';

function CommentItem({
  id,
  content,
  owner,
  createdAt,
  upVote,
  downVote,
  neutralizeVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  return (

    <div className="card mb-3 bottom-border-card">
      <div className="card-body">
        <div className="d-flex flex-start">
          <img className="rounded-circle shadow-1-strong me-3" src={owner.avatar} alt="avatar" width="40" height="40" />
          <div className="w-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-primary fw-bold mb-0">{owner.name}</h6>
              <p className="mb-0 detail_footer">{postedAt(createdAt)}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-body">{content}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <VoteButton
                id={id}
                authUser={authUser}
                upVote={upVote}
                downVote={downVote}
                neutralizeVote={neutralizeVote}
                upVotesBy={upVotesBy}
                downVotesBy={downVotesBy}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  content: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default CommentItem;
