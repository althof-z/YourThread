import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import postedAt from '../utils';
import VoteButton from './VoteButton';

function ThreadItem({
  id,
  title,
  body,
  category,
  owner,
  totalComments,
  createdAt,
  authUser,
  upVote,
  downVote,
  neturalizeVote,
  upVotesBy,
  downVotesBy,
}) {
  const navigate = useNavigate();

  const onTalkClick = () => {
    navigate(`/threads/${id}`);
  };

  return (
    <div className="card mb-3 thread-item">
      <div className="card-body">
        <div className="d-flex flex-start">
          <div className="w-100">
            <div aria-hidden role="button" onClick={onTalkClick}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-primary fw-bold mb-0">{title}</h6>
                <p className="mb-0 detail_footer">
                  #
                  {category}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-body">{body}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="small mb-0">
                  <p href="#!" className="detail_footer">
                    {totalComments}
                    {' '}
                    comments
                    {' '}
                    •
                    {' '}
                    {postedAt(createdAt)}
                    {' '}
                    • author
                    {' '}
                    <strong>{owner.name}</strong>
                  </p>

                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <VoteButton
                authUser={authUser}
                id={id}
                upVote={upVote}
                downVote={downVote}
                neutralizeVote={neturalizeVote}
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

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  totalComments: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default ThreadItem;
