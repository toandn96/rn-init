import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { quoteReducer } from './quoteReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	quote: quoteReducer,
});

export default rootReducer;
