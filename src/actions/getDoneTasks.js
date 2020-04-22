import { get } from '../fetcher/fetcher';

import * as types from './actionTypes';

export default function getDoneTasks() {
    return (dispatch) => {
        return get('mockapi/getDoneTasks.json')
            .then(response => {
                dispatch({
                    type: types.GET_DONE_TASKS_SUCCESS,
                    tasks: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_DONE_TASKS_ERROR,
                    error: error
                });
            })
    }
}