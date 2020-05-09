
import { get } from '../../fetcher/fetcher';
import * as types from '../actionTypes';

export default function whoami() {
    let url = new URL(process.env.REACT_APP_URL_WHOAMI);
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