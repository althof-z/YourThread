import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncGetCategories } from '../category/action';

const ActionTypes = {
  CREATE_THREAD: 'CREATE_THREAD',
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_VOTE_THREAD: 'NETURALIZE_VOTE_THREAD',
};

function createThreadActionCreator(thread) {
  return {
    type: ActionTypes.CREATE_THREAD,
    payload: {
      thread,
    },
  };
}

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionTypes.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionTypes.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionTypes.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neturalizeVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionTypes.NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncCreateThread({ title, body, category = 'general' }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThreads({ title, body, category });
      dispatch(createThreadActionCreator(thread));
      dispatch(asyncGetCategories());
    } catch (error) {
      // show error message
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThread(threadId, userId) {
  return async (dispatch) => {
    try {
      await api.upVoteThread(threadId);
      dispatch(upVoteThreadActionCreator({ threadId, userId }));
    } catch (error) {
      console.log(error);
    }
  };
}

function asyncDownVoteThread(threadId, userId) {
  return async (dispatch) => {
    try {
      await api.downVoteThread(threadId);
      dispatch(downVoteThreadActionCreator({ threadId, userId }));
    } catch (error) {
      // show error message
      console.log(error);
    }
  };
}

function asyncNeutralizeVoteThread(threadId, userId) {
  return async (dispatch) => {
    try {
      await api.neutralizeThreadVote(threadId);
      dispatch(neturalizeVoteThreadActionCreator({ threadId, userId }));
    } catch (error) {
      // show error message
      console.log(error);
    }
  };
}

export {
  ActionTypes,
  asyncCreateThread,
  receiveThreadsActionCreator,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
};
