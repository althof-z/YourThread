/**
 * test scenario for leadearboardsReducer
 *
 * - leadearboardsReducer function
 * - should return the initial state when given by unknown action
 * - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
 */

import { describe, it, expect } from 'vitest';
import leaderboardReducer from './reducer';
import { ActionTypes } from './action';

describe('leadearboardsReducer', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderboardReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards when given by RECEIVE_LEADERBOARDS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionTypes.RECEIVE_LEADERBOARD,
      payload: {
        leaderboard: [
          {
            id: '1',
            userId: 'users-1',
            point: 100,
          },
        ],
      },
    };

    // action
    const nextState = leaderboardReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboard);
  });
});
