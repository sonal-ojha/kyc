import { TYPES } from '../Constants/Types';

export const instamojoReducer = (state = {
    request : "",
    success : "",
    error : ""
}, action) => {
    switch (action.type) {
        case TYPES.instamojo_request:
            return Object.assign({}, state,{ request : false });
        case TYPES.instamojo_success:
            return Object.assign({}, state,{ success : action.response , request :true});
        case TYPES.instamojo_failure:
            return Object.assign({}, state,{ error :  action.error , request : true});
        default:
            return state;
    }
}