/**
 * testing scenario
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import {
  describe, it, expect, vi, afterEach,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('name');

    // action
    await userEvent.type(nameInput, 'john doe');

    // assert
    expect(nameInput).toHaveValue('john doe');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('email');

    // action
    await userEvent.type(emailInput, 'jhon.doe@email.com');

    // assert
    expect(emailInput).toHaveValue('jhon.doe@email.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('password');

    // action
    await userEvent.type(passwordInput, 'passwordtest');

    // assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // arrange
    const registerMock = vi.fn();
    render(<RegisterInput register={registerMock} />);
    const nameInput = await screen.getByPlaceholderText('name');
    const emailInput = await screen.getByPlaceholderText('email');
    const passwordInput = await screen.getByPlaceholderText('password');
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });

    // action
    await userEvent.type(nameInput, 'john doe');
    await userEvent.type(emailInput, 'jhon.doe@email.com');
    await userEvent.type(passwordInput, 'passwordtest');
    await userEvent.click(registerButton);

    // assert
    expect(registerMock).toHaveBeenCalledTimes(1);
    expect(registerMock).toHaveBeenCalledWith({
      name: 'john doe',
      email: 'jhon.doe@email.com',
      password: 'passwordtest',
    });
  });
});
