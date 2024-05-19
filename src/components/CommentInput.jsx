import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CommentInput({ addComment }) {
  const [content, onContentChange] = useInput('');

  return (
    <form className="form">
      <div className="form-group">
        <h3 className="text-info">Give A Comment</h3>
        <br />

        <div className="mb-3 row">
          <div className="col-10">
            <input type="text" placeholder="comment" value={content} onChange={onContentChange} className="form-control" />
          </div>
          <div className="col-2">
            <button
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                addComment(content);
              }}
              className="btn btn-primary"
              value="Comment"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
