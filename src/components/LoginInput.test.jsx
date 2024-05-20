/**
 * testing scenario
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import {
  describe, it, expect, vi,
  afterEach,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from './LoginInput';

expect.extend(matchers);

describe('LoginInput', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle username typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => { }} />);
    const emailInput = await screen.getByPlaceholderText('email');

    // action
    await userEvent.type(emailInput, 'john.doe@email.com');

    // assert
    expect(emailInput).toHaveValue('john.doe@email.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => { }} />);
    const passwordInput = await screen.getByPlaceholderText('password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const loginMock = vi.fn();
    render(<LoginInput login={loginMock} />);
    const emailInput = await screen.getByPlaceholderText('email');
    const passwordInput = await screen.getByPlaceholderText('password');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // Action
    await userEvent.type(emailInput, 'jhon.doe@email.com');
    await userEvent.type(passwordInput, 'passwordtest');
    await userEvent.click(loginButton);

    // Assert
    expect(loginMock).toHaveBeenCalledWith({
      email: 'jhon.doe@email.com',
      password: 'passwordtest',
    });
  });
});
