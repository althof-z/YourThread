import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionTypes = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  CREATE_COMMENT: 'CREATE_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRALIZE_VOTE_COMMENT: 'NEUTRALIZE_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionTypes.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionTypes.CLEAR_THREAD_DETAIL,
  };
}

function createCommentActionCreator(comment) {
  return {
    type: ActionTypes.CREATE_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionTypes.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionTypes.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionTypes.NEUTRALIZE_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncCreateComment({ content, id }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComments({ content, id });
      dispatch(createCommentActionCreator(comment));
    } catch (error) {
      // show error message
    }
    dispatch(hideLoading());
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getThreadsDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      // show error message
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment(threadId, commentId, userId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.upVoteComment(threadId, commentId);
      dispatch(upVoteCommentActionCreator(commentId, userId));
    } catch (error) {
      // show error message
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteComment(threadId, commentId, userId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.downVoteComment(threadId, commentId);
      dispatch(downVoteCommentActionCreator(commentId, userId));
    } catch (error) {
      // show error message
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteComment(threadId, commentId, userId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.neutralizeVoteComment(threadId, commentId);
      dispatch(neutralizeVoteCommentActionCreator(commentId, userId));
    } catch (error) {
      // show error message
    }
    dispatch(hideLoading());
  };
}

export {
  ActionTypes,
  receiveThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
};
