import { update } from '../fetcher/fetcher';

import * as types from './actionTypes';
import getTasks from "./getTasks";

export default function updateTask(id, newStatus, statusToView) {
    console.log(process.env.REACT_APP_URL)
    console.log(process.env.NODE_ENV)
    let url = new URL(id, process.env.REACT_APP_URL + '/');
    let body = {"status": newStatus};
    return (dispatch) => {
        return update(url, JSON.stringify(body))
            .then(() => {
                dispatch({
                    type: types.UPDATE_TASK_SUCCESS
                });
            })
            .then(() => dispatch(getTasks(statusToView)))
            .catch(error => {
                dispatch({
                    type: types.UPDATE_TASK_ERROR,
                    error: error
                });
            })
    }
}