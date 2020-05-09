
import { post } from '../../fetcher/fetcher';
import * as types from '../actionTypes';

export default function signIn(username, password) {
    let url = new URL(process.env.REACT_APP_URL_SIGN_IN);
    let data = {
        username: username,
        password: password
    };
    return (dispatch) => {
        return post(url, JSON.stringify(data))
            .then(response => {
                localStorage.setItem('jwt', response.token)
                dispatch({
                    type: types.SIGN_IN_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: types.SIGN_IN_ERROR,
                    error: error
                });
            })
    }
}