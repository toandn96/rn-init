import {AuthConstants} from '../constants/AuthConstants';

const initState = {
  info: {},
};

export const quoteReducer = (state = initState, action) => {
  switch (action.type) {
    case AuthConstants.QUOTE_SET_INFO:
      return {...state, info: action.payload.info};
    default:
      return state;
  }
};
