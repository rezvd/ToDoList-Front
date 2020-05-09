import { update } from '../../fetcher/fetcher';

import * as types from '../actionTypes';
import getTasks from "./getTasks";

export default function updateTask(id, newStatus, statusToView) {
    let url = new URL(id, process.env.REACT_APP_URL_TASKS + '/');
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