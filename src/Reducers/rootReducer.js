import { combineReducers } from 'redux';
import { updateEnquiryReducer } from './enquiryReducer';
import { updateFileKYCReducer } from './fileKYCReducer';
import { loaderReducer } from './LoaderReducer';
import { instamojoReducer } from './instamojoReducer';

const rootReducer=combineReducers(
    {   
        updateEnquiryReducer,
        updateFileKYCReducer,
        instamojoReducer,
        // Lioader reducer always in bottom
        loaderReducer
    }
)

export default rootReducer;