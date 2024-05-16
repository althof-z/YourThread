import React from 'react';
import {
  BiUpvote, BiSolidUpvote, BiDownvote, BiSolidDownvote,
} from 'react-icons/bi';
import PropTypes from 'prop-types';

function VoteButton({
  id,
  upVote,
  downVote,
  neutralizeVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser.id);
  const isDownVoted = downVotesBy.includes(authUser.id);

  const onUpVote = () => {
    if (isUpVoted) {
      neutralizeVote(id);
    } else {
      upVote(id);
    }
  };

  const onDownVote = () => {
    if (isDownVoted) {
      neutralizeVote(id);
    } else {
      downVote(id);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <button
        type="button"
        onClick={onUpVote}
        className="btn btn-outline-dark p-1 m-0 btn-lg  border border-0"
      >
        {isUpVoted ? <BiSolidUpvote className="custom-icon" /> : <BiUpvote className="custom-icon" />}
      </button>
      <button
        type="button"
        onClick={onDownVote}
        className="btn btn-outline-dark btn-lg p-1 m-1 border border-0"
      >
        {isDownVoted ? <BiSolidDownvote className="custom-icon" /> : <BiDownvote className="custom-icon" />}
      </button>

      <p className="align-self-center m-0">
        <b>{upVotesBy.length - downVotesBy.length}</b>
        {' '}
        votes
      </p>

    </div>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default VoteButton;
