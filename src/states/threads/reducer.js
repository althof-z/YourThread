import { ActionTypes } from './action';

function updateThreadVotes(threads, threadId, userId, voteType) {
  return threads.map((thread) => {
    if (thread.id === threadId) {
      let { upVotesBy, downVotesBy } = thread;
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

      return { ...thread, upVotesBy, downVotesBy };
    }
    return thread;
  });
}

function threadReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionTypes.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionTypes.CREATE_THREAD:
      return [action.payload.thread, ...threads];
    case ActionTypes.UP_VOTE_THREAD:
      return updateThreadVotes(threads, action.payload.threadId, action.payload.userId, 'upVote');
    case ActionTypes.DOWN_VOTE_THREAD:
      return updateThreadVotes(threads, action.payload.threadId, action.payload.userId, 'downVote');
    case ActionTypes.NEUTRALIZE_VOTE_THREAD:
      return updateThreadVotes(threads, action.payload.threadId, action.payload.userId, 'neutralVote');
    default:
      return threads;
  }
}

export default threadReducer;
