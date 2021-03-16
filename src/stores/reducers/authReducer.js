import { AuthConstants } from '../constants/AuthConstants';

const initState = {
	userInfo: {},
};

export const authReducer = (state = initState, action) => {
	switch (action.type) {
		case AuthConstants.UPDATE_USER_INFO:
			return { ...state, userInfo: action.payload.userInfo };
		default:
			return state;
	}
};
