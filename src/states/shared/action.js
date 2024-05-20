import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import 'react-toastify/dist/ReactToastify.css';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersandTalks() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      // show error message
      toast.error(error.message);
      // alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export default asyncPopulateUsersandTalks;
