
import { get } from '../../fetcher/fetcher';
import * as types from '../actionTypes';
import * as paths from "../paths";

export default function whoami() {
    let url = new URL(process.env.REACT_APP_URL + paths.WHOAMI);
    return (dispatch) => {
        return get(url)
            .then(response => {
                dispatch({
                    type: types.AUTHENTICATE_SUCCESS,
                    username: response.username
                });
            })
            .catch(error => {
                dispatch({
                    type: types.AUTHENTICATE_ERROR,
                    error: error
                });
            })
    }
}