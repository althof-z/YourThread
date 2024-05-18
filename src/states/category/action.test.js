/**
 * test scenario for categoryAction
 *
 * - function asyncGetCategories
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import {
  describe, beforeEach, afterEach, it, expect, vi,
} from 'vitest';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { receiveCategoriesActionCreator, asyncGetCategories } from './action';

const fakeCategoriesResponse = [
  'category1',
  'category2',
  'category3',
];

describe('asyncGetCategories', () => {
  const fakeErrorResponse = new Error('Ups, something went wrong');
  beforeEach(() => {
    api.backupgetAllUniqueCategories = api.getAllUniqueCategories;
  });

  afterEach(() => {
    api.getAllUniqueCategories = api.backupgetAllUniqueCategories;
    delete api.backupgetAllUniqueCategories;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUniqueCategories = () => Promise.resolve(fakeCategoriesResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncGetCategories()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(receiveCategoriesActionCreator(fakeCategoriesResponse));
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUniqueCategories = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // mock alert
    toast.error = vi.fn();

    // action
    await asyncGetCategories()(dispatch);

    // assert
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
