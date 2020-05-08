import { post } from '../fetcher/fetcher';

import * as types from './actionTypes';

export default function createTask(text) {
    let url = new URL('http://localhost:8080/tasks');
    let body = {"text": text};
    return (dispatch) => {
        return post(url, JSON.stringify(body))
            .then(() => {
                dispatch({
                    type: types.CREATE_TASK_SUCCESS,
                });
            })
            .catch(error => {
                dispatch({
                    type: types.CREATE_TASK_ERROR,
                    error: error
                });
            })
    }
}