import * as types from "../actions/actionTypes"

const initialState = {
    todoTasks: [],
    todoTasksError: null,
    doneTasks: [],
    doneTasksError: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TODO_TASKS_SUCCESS: {
            return {
                ...state,
                todoTasks: action.tasks,
                todoTasksError: null
            }
        }
        case types.GET_DONE_TASKS_SUCCESS: {
            return {
                ...state,
                doneTasks: action.tasks,
                doneTasksError: null
            }
        }
        case types.GET_TODO_TASKS_ERROR: {
            return {
                ...state,
                todoTasks: [],
                todoTasksError: action.error
            }
        }
        case types.GET_DONE_TASKS_ERROR: {
            return {
                ...state,
                doneTasks: [],
                doneTasksError: action.error
            }
        }
        default: {
            return state;
        }
    }
}