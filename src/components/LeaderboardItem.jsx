import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score, index }) {
  return (
    <div className=" row mb-2">
      <div className="col-1  d-flex flex-row-reverse">
        <h3 className="">{index + 1}</h3>
      </div>
      <div className="col-9">
        <img className="rounded-circle shadow-1-strong me-3" src={user.avatar} alt={user.name} width="40" height="40" />
        {user.name}
      </div>
      <div className="col-2 d-flex justify-content-center"><b>{score}</b></div>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default LeaderboardItem;
