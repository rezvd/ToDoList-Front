
import { get } from '../../fetcher/fetcher';
import * as types from '../actionTypes';
import * as fields from '../fieldNames';
import * as paths from "../paths";



export default function getTasks(status, order, page, size) {
    let url = new URL(process.env.REACT_APP_URL + paths.TASKS);
    url.searchParams.append(fields.STATUS, status);
    if (order !== undefined) url.searchParams.append(fields.ORDER, order);
    if (page !== undefined) url.searchParams.append(fields.PAGE, page);
    if (size !== undefined) url.searchParams.append(fields.PAGE_SIZE, size);
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