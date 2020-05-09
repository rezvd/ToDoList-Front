import { remove } from '../fetcher/fetcher';

import * as types from './actionTypes';
import getTasks from "./getTasks";

export default function deleteTask(id, status) {
    let url = new URL(id, process.env.REACT_APP_URL + '/');
    return (dispatch) => {
        return remove(url)
            .then(() => {
                dispatch({
                    type: types.DELETE_TASK_SUCCESS
                });
            })
            .then(() => dispatch(getTasks(status)))
            .catch(error => {
                dispatch({
                    type: types.DELETE_TASK_ERROR,
                    error: error
                });
            })
    }
}