import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [body, onTextChange] = useInput('');
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');

  return (
    <div className="thread-input">
      <input type="text" placeholder="Title" value={title} onChange={onTitleChange} className="form-control" />
      <input type="text" placeholder="category" value={category} onChange={onCategoryChange} className="form-control" />
      <textarea type="text" placeholder="What are you thinking?" value={body} onChange={onTextChange} className="form-control" />
      <p className="thread-input__char-left" />
      <button type="submit" onClick={() => addThread({ title, body, category })} className="btn btn-primary" value="addThread">
        Create Thread
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
