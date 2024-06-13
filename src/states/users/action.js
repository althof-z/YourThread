import { toast } from 'react-toastify';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.register({ name, email, password });
      toast.success('User registered successfully!');
      return true; // Indicate success
    } catch (error) {
      // Show error message
      toast.error(error.message);
      return false; // Indicate failure
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
