import { TYPES } from '../Constants/Types';

export const updateFileKYCReducer = (state = {
    request : "",
    success : "",
    error : ""
}, action) => {
    switch (action.type) {
        case TYPES.fileKYC_request:
            return Object.assign({}, state,{ request : false });
        case TYPES.fileKYC_success:
            return Object.assign({}, state,{ success : action.response , request :true});
        case TYPES.fileKYC_failure:
            return Object.assign({}, state,{ error :  action.error , request : true});
        default:
            return state;
    }
}