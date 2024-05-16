import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadReducer from './threads/reducer';
import userReducer from './users/reducer';
import threadDetailReducer from './threadDetail/reducer';
import categoryReducer from './category/reducer';
import leaderboardReducer from './leaderboard/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threads: threadReducer,
    threadDetail: threadDetailReducer,
    users: userReducer,
    categories: categoryReducer,
    leaderboard: leaderboardReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
