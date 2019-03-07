import { LOGIN, LOGIN_SUCCESS, LOGIN_SUCCESS, REGISTER, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_ERROR } from '../../constants/actionTypes';

const INIT_STATE = {
    user: '',
    loading: false,
    error: null
}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case LOGIN:
            return { ...state, loading: true};
        case LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload};
        case LOGIN_ERROR:
            return { ...state, loading: false, error: action.payload};
        default:
            return { ...state };
    }
}