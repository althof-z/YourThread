/**
 * test scenario for isPreloadAction
 *
 * - function asyncPreloadProcess
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import {
  describe, beforeEach, afterEach, it, expect, vi,
} from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setIsPreloadActionCreator, asyncPreloadProcess } from './action';
import { setAuthUserActionCreator } from '../authUser/action';

const fakePreloadResponse = {
  isPreload: true,
};

describe('asyncPreloadProcess', () => {
  beforeEach(() => {
    api.backupgetOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api.backupgetOwnProfile;
    delete api.backupgetOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakePreloadResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserActionCreator(fakePreloadResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
