import { TYPES } from '../Constants/Types' ;

export const loaderReducer = (state = {
    loader: false
}, action) => {
    switch (action.type) {
        case TYPES.enquiry_request:
            return { loader: true };
        case TYPES.enquiry_success:
            return { loader: false };
        case TYPES.enquiry_failure:
            return { loader: false };
        case TYPES.fileKYC_request:
            return { loader: true };
        case TYPES.fileKYC_success:
            return { loader: false };
        case TYPES.fileKYC_failure:
            return { loader: false };       
        default:
            return state;
    }
}