import { combineReducers } from "redux";

import tasksReducer from "./tasksReducer";
import usersReducer from "./usersReducer";

export default (state = {}, action) => {
    console.log(action)
    return combineReducers({
        tasksReducer,
        usersReducer
    })(state, action);
}