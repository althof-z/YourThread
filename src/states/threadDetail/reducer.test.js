/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducers function
 *  - should return the initial state when given by unknown action
 * - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 * - should return the thread detail with the new comment when given by CREATE_COMMENT action
 * - should return the thread detail with the updated comment when given by UP_VOTE_COMMENT action
 * - should return the thread detail with the updated comment when given by DOWN_VOTE_COMMENT action
 * - should return the thread detail with the updated comment when given by
 *   NEUTRALIZE_VOTE_COMMENT action
 * - should return null when given by CLEAR_THREAD_DETAIL action
 */

import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';
import { ActionTypes } from './action';

describe('threadDetailReducers', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionTypes.RECEIVE_THREAD_DETAIL,
      payload: {
        detailThread: {
          id: '1',
          title: 'Thread 1',
          body: 'the First Thread',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          comments: [],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.detailThread);
  });

  it('should return the thread detail with the new comment when given by CREATE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: '1',
      title: 'Thread 1',
      body: 'the First Thread',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: ActionTypes.CREATE_COMMENT,
      payload: {
        comment: {
          id: '1',
          body: 'the First Comment',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments).toEqual([action.payload.comment]);
  });

  it('should return the thread detail with the updated comment when given by UP_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: '1',
      title: 'Thread 1',
      body: 'the First Thread',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: '1',
          body: 'the First Comment',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionTypes.UP_VOTE_COMMENT,
      payload: {
        commentId: '1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments[0].upVotesBy).toEqual([action.payload.userId]);
  });

  it('should return the thread detail with the updated comment when given by DOWN_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: '1',
      title: 'Thread 1',
      body: 'the First Thread',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: '1',
          body: 'the First Comment',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionTypes.DOWN_VOTE_COMMENT,
      payload: {
        commentId: '1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments[0].downVotesBy).toEqual([action.payload.userId]);
  });

  it('should return the thread detail with the updated comment when given by NEUTRALIZE_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: '1',
      title: 'Thread 1',
      body: 'the First Thread',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: '1',
          body: 'the First Comment',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionTypes.NEUTRALIZE_VOTE_COMMENT,
      payload: {
        commentId: '1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments[0].upVotesBy).toEqual([]);
    expect(nextState.comments[0].downVotesBy).toEqual([]);
  });

  it('should return null when given by CLEAR_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: '1',
      title: 'Thread 1',
      body: 'the First Thread',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: ActionTypes.CLEAR_THREAD_DETAIL,
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toBeNull();
  });
});
