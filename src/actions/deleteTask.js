import { remove } from '../fetcher/fetcher';

import * as types from './actionTypes';

export default function deleteTask(id) {
    let url = new URL(id, 'http://localhost:8080/tasks/');
    return (dispatch) => {
        return remove(url)
            .then(() => {
                dispatch({
                    type: types.DELETE_TASK_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: types.DELETE_TASK_ERROR,
                    error: error
                });
            })
    }
}