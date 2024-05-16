import React from 'react';
import PropTypes from 'prop-types';
import postedAt from '../utils';

function ThreadDetail({
  title, body, category, owner, createdAt,
}) {
  if (owner === undefined) {
    return null;
  }
  return (
    <div className=" thread-detail">
      <header className="thread-detail__header">
        <h1 className="thread-detail__title">{title}</h1>
        {/*  <p className="thread-detail__category">#{category}</p> */}
      </header>
      <div className="thread-detail__body">{body}</div>
      <footer className="detail_footer">
        <p>{postedAt(createdAt)}</p>
        <p className="thread-detail__category">
          #
          {category}
        </p>
        <p className="thread-detail__owner">
          Posted by
          {' '}
          <img src={owner.avatar} alt={owner.name} height="20" />
          {' '}
          <b>
            {owner.name}
            {' '}
          </b>
        </p>
      </footer>
    </div>
  );
}

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ThreadDetail;
