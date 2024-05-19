/**
 * testing scenario
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should handle categroy typing correctly
 *   - should call addThread function when addThread button is clicked
 */

import React from 'react';
import {
  describe, it, expect, vi, afterEach,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from './ThreadInput';

expect.extend(matchers);

describe('ThreadInput', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // arrange
    render(<ThreadInput addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Title');

    // action
    await userEvent.type(titleInput, 'Title Test');

    // assert
    expect(titleInput).toHaveValue('Title Test');
  });

  it('should handle category typing correctly', async () => {
    // arrange
    render(<ThreadInput addThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('category');

    // action
    await userEvent.type(categoryInput, 'Category Test');

    // assert
    expect(categoryInput).toHaveValue('Category Test');
  });

  it('should call addThread function when addThread button is clicked', async () => {
    // arrange
    const addThreadMock = vi.fn();
    render(<ThreadInput addThread={addThreadMock} />);
    const titleInput = await screen.getByPlaceholderText('Title');
    const categoryInput = await screen.getByPlaceholderText('category');
    const bodyInput = await screen.getByPlaceholderText(
      'What are you thinking?',
    );
    const addThreadButton = await screen.getByRole('button', {
      name: 'Create Thread',
    });

    // action
    await userEvent.type(titleInput, 'Title Test');
    await userEvent.type(categoryInput, 'Category Test');
    await userEvent.type(bodyInput, 'Body Test');
    await userEvent.click(addThreadButton);

    // assert
    expect(addThreadMock).toHaveBeenCalledWith({
      title: 'Title Test',
      body: 'Body Test',
      category: 'Category Test',
    });
  });
});
