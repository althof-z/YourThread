import { ActionTypes } from './action';

function updateCommentVotes(comments, commentId, userId, voteType) {
  return comments.map((comment) => {
    if (comment.id === commentId) {
      let { upVotesBy, downVotesBy } = comment;
      const isUpVoted = upVotesBy.includes(userId);
      const isDownVoted = downVotesBy.includes(userId);

      switch (voteType) {
        case 'upVote':
          upVotesBy = isUpVoted
            ? upVotesBy.filter((id) => id !== userId)
            : upVotesBy.concat(userId);
          downVotesBy = isDownVoted
            ? downVotesBy.filter((id) => id !== userId)
            : downVotesBy;
          break;
        case 'downVote':
          downVotesBy = isDownVoted
            ? downVotesBy.filter((id) => id !== userId)
            : downVotesBy.concat(userId);
          upVotesBy = isUpVoted
            ? upVotesBy.filter((id) => id !== userId)
            : upVotesBy;
          break;
        case 'neutralVote':
          upVotesBy = isUpVoted
            ? upVotesBy.filter((id) => id !== userId)
            : upVotesBy;
          downVotesBy = isDownVoted
            ? downVotesBy.filter((id) => id !== userId)
            : downVotesBy;
          break;
        default:
          break;
      }

      return { ...comment, upVotesBy, downVotesBy };
    }
    return comment;
  });
}

function threadDetailReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionTypes.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionTypes.CREATE_COMMENT:
      return {
        ...detailThread,
        comments: [action.payload.comment, ...detailThread.comments],
      };
    case ActionTypes.CLEAR_THREAD_DETAIL:
      return null;
    case ActionTypes.UP_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: updateCommentVotes(
          detailThread.comments,
          action.payload.commentId,
          action.payload.userId,
          'upVote',
        ),
      };
    case ActionTypes.DOWN_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: updateCommentVotes(
          detailThread.comments,
          action.payload.commentId,
          action.payload.userId,
          'downVote',
        ),
      };
    case ActionTypes.NEUTRALIZE_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: updateCommentVotes(
          detailThread.comments,
          action.payload.commentId,
          action.payload.userId,
          'neutralVote',
        ),
      };
    default:
      return detailThread;
  }
}

export default threadDetailReducer;
