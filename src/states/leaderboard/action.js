import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionTypes = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};
function receiveLeaderboardActionCenter(leaderboard) {
  return {
    type: ActionTypes.RECEIVE_LEADERBOARD,
    payload: {
      leaderboard,
    },
  };
}

function asyncReceiveLeaderboard() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboard = await api.getLeaderboard();
      dispatch(receiveLeaderboardActionCenter(leaderboard));
    } catch (error) {
      // show error message
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionTypes, asyncReceiveLeaderboard, receiveLeaderboardActionCenter };
