/**
 * test scenario for leadearboardAction
 *
 * - function asyncReceiveLeaderboard
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import {
  describe, beforeEach, afterEach, it, expect, vi,
} from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveLeaderboardActionCenter, asyncReceiveLeaderboard } from './action';

const fakeLeaderboardResponse = {
  id: '1',
  name: 'John Doe',
  score: 100,
};

describe('asyncReceiveLeaderboard', () => {
  const fakeErrorResponse = new Error('Ups, something went wrong');
  beforeEach(() => {
    api.backupgetLeaderboard = api.getLeaderboard;
  });

  afterEach(() => {
    api.getLeaderboard = api.backupgetLeaderboard;

    delete api.backupgetLeaderboard;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getLeaderboard = () => Promise.resolve(fakeLeaderboardResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardActionCenter(fakeLeaderboardResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
