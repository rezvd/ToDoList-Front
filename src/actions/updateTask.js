import { update } from '../fetcher/fetcher';

import * as types from './actionTypes';

export default function updateTask(id, status) {
    let url = new URL(id, 'http://localhost:8080/tasks/');
    let body = {"status": status};
    return (dispatch) => {
        return update(url, JSON.stringify(body))
            .then(response => {
                dispatch({
                    type: types.UPDATE_TASK_SUCCESS,
                    tasks: response.tasks
                });
            })
            .catch(error => {
                dispatch({
                    type: types.UPDATE_TASK_ERROR,
                    error: error
                });
            })
    }
}