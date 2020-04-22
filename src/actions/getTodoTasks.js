import { get } from '../fetcher/fetcher';

import * as types from './actionTypes';

export default function getTodoTasks() {
    return (dispatch) => {
        return get('mockapi/getTasks.json')
            .then(response => {
                const tasks = response.data.filter((i) => {
                    return i.status === 'todo';
                });
                dispatch({
                    type: types.GET_TASKS_SUCCESS,
                    tasks: tasks
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