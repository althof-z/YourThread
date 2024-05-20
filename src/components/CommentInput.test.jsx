/**
 * testing scenario
 *
 * - CommentInput component
 *   - should handle comment typing correctly
 *   - should call addComment function when Comment button is clicked
 */

import React from 'react';
import {
  describe, it, expect, vi, afterEach,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import CommentInput from './CommentInput';

expect.extend(matchers);

describe('CommentInput', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle comment typing correctly', async () => {
    // arrange
    render(<CommentInput addComment={() => {}} />);
    const commentInput = await screen.getByPlaceholderText('comment');

    // action
    await userEvent.type(commentInput, 'Comment Test');

    // assert
    expect(commentInput).toHaveValue('Comment Test');
  });

  it('should call addComment function when Comment button is clicked', async () => {
    // arrange
    const addCommentMock = vi.fn();
    render(<CommentInput addComment={addCommentMock} />);
    const commentInput = await screen.getByPlaceholderText('comment');
    const commentButton = await screen.getByRole('button', { name: 'Send' });

    // action
    await userEvent.type(commentInput, 'Comment Test');
    await userEvent.click(commentButton);

    // assert
    expect(addCommentMock).toHaveBeenCalled();
    expect(addCommentMock).toHaveBeenCalledWith('Comment Test');
  });
});
