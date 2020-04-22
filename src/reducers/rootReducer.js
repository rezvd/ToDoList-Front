import { combineReducers } from "redux";

import tasksReducer from "./tasksReducer";

export default (state = {}, action) => {
    return combineReducers({
        tasksReducer
    })(state, action);
}