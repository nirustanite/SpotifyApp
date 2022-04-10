import { combineReducers } from "redux";

import authToken from './AuthToken';

export default combineReducers({
    authToken: authToken.reducer
});