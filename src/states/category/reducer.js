import { ActionTypes } from './action';

function categoryReducer(categories = [], action = {}) {
  switch (action.type) {
    case ActionTypes.RECEIVE_CATEGORIES:
      return action.payload.categories;
    default:
      return categories;
  }
}

export default categoryReducer;
