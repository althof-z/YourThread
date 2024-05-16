import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadsList({
  threads,
  category,
  upVote,
  downVote,
  neutralizeVote,
  authUser,
}) {
  const filteredThreads = threads.filter((thread) => category === 'all' || thread.category === category);

  return (
    <div className="threads-list">
      {filteredThreads.map((thread) => (
        <ThreadItem
          key={thread.id}
          id={thread.id}
          title={thread.title}
          body={thread.body}
          category={thread.category}
          owner={thread.owner}
          totalComments={thread.totalComments}
          createdAt={thread.createdAt}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neutralizeVote}
          upVotesBy={thread.upVotesBy}
          downVotesBy={thread.downVotesBy}
          authUser={authUser}
        />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  category: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

ThreadsList.propTypes = {};

export default ThreadsList;
