import {AuthConstants} from '../constants/AuthConstants';

export const updateUserInfo = userInfo => {
  return {
    type: AuthConstants.UPDATE_USER_INFO,
    payload: {
      userInfo,
    },
  };
};
