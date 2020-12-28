
import { post } from '../../fetcher/fetcher';
import * as types from '../actionTypes';
import * as paths from "../paths";

export default function signUp(username, password) {
    let url = new URL(process.env.REACT_APP_URL + paths.SIGNUP);
    let data = {
        username: username,
        password: password
    };
    return (dispatch) => {
        return post(url, JSON.stringify(data))
            .then(response => {
                localStorage.setItem('jwt', response.token)
                dispatch({
                    type: types.SIGN_UP_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: types.SIGN_UP_ERROR,
                    error: error
                });
            })
    }
}