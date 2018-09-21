import { TYPES } from '../Constants/Types';
import axios from 'axios';
import { API } from '../Constants/Api';
import { toast } from 'react-toastify';

export const updateEnquiryRequest = () => {
    return {
        type: TYPES.enquiry_request
    }
    console.log("request update");
}

export const updateEnquirySuccess = (response) => {
    return {
        type: TYPES.enquiry_success,
        response
    }
    console.log("success update");
}

export const updateEnquiryFailure = (error) => {
    return {
        type: TYPES.enquiry_failure,
        error
    }
}

export const updateEnquiryDetails = (Data) => {
    return (dispatch) => {
        dispatch(updateEnquiryRequest());
        var url=API.base_url+API.enquiry;
        console.log("url",url);
        let config = {
            headers: {
                Authorization: localStorage.getItem("user")
            }
        };
        axios.post( url , Data , config ).then(
            (response) => {
                console.log(response.data);
                dispatch(updateEnquirySuccess(response.data));
                toast.success("Your Enquiry has been received ... will get back to you shortly ....", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        ).catch(
            (error) => {
                dispatch(updateEnquiryFailure(error));
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        )
    }
}