import { get } from '../fetcher/fetcher';

import * as types from './actionTypes';

export default function getTasks(status, order, page, size) {
    let url = new URL('http://localhost:8080/tasks');
    url.searchParams.append('status', status);
    if (order !== undefined) url.searchParams.append('order', order);
    if (page !== undefined) url.searchParams.append('page', page);
    if (size !== undefined) url.searchParams.append('size', size);
    return (dispatch) => {
        return get(url)
            .then(response => {
                dispatch({
                    type: types.GET_TASKS_SUCCESS,
                    tasks: response.tasks
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_TASKS_ERROR,
                    error: error
                });
            })
    }
}