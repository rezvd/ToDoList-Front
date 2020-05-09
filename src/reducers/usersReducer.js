import * as types from '../actions/actionTypes'

const initialState = {
    authorized: !!localStorage.getItem('jwt'),
    username: null,
    error: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN_SUCCESS: {
            return {
                ...state,
                authorized: true,
                error: null
            };
        }
        case types.SIGN_IN_ERROR: {
            return {
                ...state,
                authorized: false,
                username: null,
                error: action.error
            }
        }
        case types.AUTHENTICATE_SUCCESS: {
            return {
                ...state,
                authorized: true,
                username: action.username,
                error: null
            };
        }
        case types.AUTHENTICATE_ERROR: {
            return {
                ...state,
                authorized: false,
                username: null,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}