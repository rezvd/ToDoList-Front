import { post } from '../../fetcher/fetcher';

import * as types from '../actionTypes';
import getTasks from "./getTasks";

export default function createTask(text) {
    let url = new URL(process.env.REACT_APP_URL_TASKS);
    let body = {"text": text};
    return (dispatch) => {
        return post(url, JSON.stringify(body))
            .then(() => {
                dispatch({
                    type: types.CREATE_TASK_SUCCESS,
                });
            })
            .then(() => dispatch(getTasks('inbox')))
            .catch(error => {
                dispatch({
                    type: types.CREATE_TASK_ERROR,
                    error: error
                });
            })
    }
}

//window.location.href
