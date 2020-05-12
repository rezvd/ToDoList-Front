import { combineReducers } from "redux";
import {
    i18nReducer
} from 'react-redux-i18n';

import tasksReducer from "./tasksReducer";
import usersReducer from "./usersReducer";

export default (state = {}, action) => {
    return combineReducers({
        tasksReducer,
        usersReducer,
        i18n: i18nReducer
    })(state, action);
}