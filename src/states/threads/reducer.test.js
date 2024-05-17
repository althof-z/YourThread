/**
 * test scenario for threadsReducer
 *
 * - threadReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by ADD_THREAD action
 *  - should return the threads with the updated votes when given by UP_VOTE_THREAD action
 *  - should return the threads with the updated votes when given by DOWN_VOTE_THREAD action
 *  - should return the threads with the updated votes when given by NEUTRALIZE_VOTE_THREAD action
 *
 */

import { describe, it, expect } from 'vitest';
import threadReducer from './reducer';
import { ActionTypes } from './action';

describe('threadReducers', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionTypes.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: '1',
            title: 'Thread 1',
            body: 'the First Thread',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: '1',
        title: 'Thread 1',
        body: 'the First Thread',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionTypes.CREATE_THREAD,
      payload: {
        thread: {
          id: '2',
          title: 'Thread 2',
          body: 'the Second Thread',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the updated votes when given by UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: '1',
        title: 'Thread 1',
        body: 'the First Thread',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionTypes.UP_VOTE_THREAD,
      payload: {
        threadId: '1',
        userId: 'users-2',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState[0].upVotesBy).toEqual([action.payload.userId]);
  });

  it('should return the threads with the updated votes when given by DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: '1',
        title: 'Thread 1',
        body: 'the First Thread',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionTypes.DOWN_VOTE_THREAD,
      payload: {
        threadId: '1',
        userId: 'users-2',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState[0].downVotesBy).toEqual([action.payload.userId]);
  });

  it('should return the threads with the updated votes when given by NEUTRALIZE_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: '1',
        title: 'Thread 1',
        body: 'the First Thread',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionTypes.NEUTRALIZE_VOTE_THREAD,
      payload: {
        threadId: '1',
        userId: 'users-2',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState[0].upVotesBy).toEqual([]);
    expect(nextState[0].downVotesBy).toEqual([]);
  });
});
