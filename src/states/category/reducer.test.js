/**
 * test scenario for categoryReducer
 *
 * - categoryReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the categories when given by RECEIVE_CATEGORIES action
 */

import { describe, it, expect } from 'vitest';
import categoryReducer from './reducer';
import { ActionTypes } from './action';

describe('categoryReducer', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = categoryReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the categories when given by RECEIVE_CATEGORIES action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionTypes.RECEIVE_CATEGORIES,
      payload: {
        categories: [
          {
            id: '1',
            name: 'General',
          },
        ],
      },
    };

    // action
    const nextState = categoryReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.categories);
  });
});
