import { get } from '../fetcher/fetcher';

import * as types from './actionTypes';

export default function getTodoTasks() {
    return (dispatch) => {
        return get('mockapi/getTodoTasks.json')
            .then(response => {
                dispatch({
                    type: types.GET_TODO_TASKS_SUCCESS,
                    tasks: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_TODO_TASKS_ERROR,
                    error: error
                });
            })
    }
}