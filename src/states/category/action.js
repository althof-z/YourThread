import api from '../../utils/api';

const ActionTypes = {
  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
};

function receiveCategoriesActionCreator(categories) {
  return {
    type: ActionTypes.RECEIVE_CATEGORIES,
    payload: {
      categories,
    },
  };
}

function asyncGetCategories() {
  return async (dispatch) => {
    try {
      const categories = await api.getAllUniqueCategories();
      dispatch(receiveCategoriesActionCreator(categories));
    } catch (error) {
      // show error message
      alert(error.message);
    }
  };
}

export { ActionTypes, receiveCategoriesActionCreator, asyncGetCategories };
