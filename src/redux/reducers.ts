import { combineReducers } from "redux";

import authToken from './AuthToken';
import searchData from "./SearchData";

export default combineReducers({
    authToken: authToken.reducer,
    searchData: searchData.reducer
});