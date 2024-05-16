import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem from './LeaderboardItem';

function LeaderboardList({ leaderboard }) {
  return (
    <div className="container">
      {leaderboard.map((item, index) => (
        <LeaderboardItem key={item.user.id} index={index} user={item.user} score={item.score} />
      ))}
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboard: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
      score: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default LeaderboardList;
