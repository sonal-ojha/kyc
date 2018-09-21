import { TYPES } from '../Constants/Types';
import axios from 'axios';
import { API } from '../Constants/Api';
import { toast } from 'react-toastify';
import { instamojoTrigger } from './instamojoAction';

export const fileKYC_Request = () => {
    return {
        type: TYPES.fileKYC_request
    }
    console.log("request update");
}

export const fileKYC_Success = (response) => {
    return {
        type: TYPES.fileKYC_success,
        response
    }
    console.log("success update");
}

export const fileKYC_Failure = (error) => {
    return {
        type: TYPES.fileKYC_failure,
        error
    }
}

export const fileKYCDetails = (Data) => {
    return (dispatch) => {
        dispatch(fileKYC_Request());
        var url=API.base_url+API.fileKyc;
        let config = {
            headers: {
                Authorization: localStorage.getItem("user")
            }
        };
        axios.post( url , Data , config ).then(
            (response) => {
                console.log(response.data);
                dispatch(fileKYC_Success(response.data));
                toast.success("We have received your order", {
                    position: toast.POSITION.TOP_RIGHT
                });
                dispatch(instamojoTrigger(API.base_url + API.instamojo));
            }
        ).catch(
            (error) => {
                dispatch(fileKYC_Failure(error));
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        )
    }
}