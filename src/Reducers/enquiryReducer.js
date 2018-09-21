import { TYPES } from '../Constants/Types';

export const updateEnquiryReducer = (state = {
    request : "",
    success : "",
    error : ""
}, action) => {
    switch (action.type) {
        case TYPES.enquiry_request:
            return Object.assign({}, state,{ request : false });
        case TYPES.enquiry_success:
            return Object.assign({}, state,{ success : action.response , request :true});
        case TYPES.enquiry_failure:
            return Object.assign({}, state,{ error :  action.error , request : true});
        default:
            return state;
    }
}