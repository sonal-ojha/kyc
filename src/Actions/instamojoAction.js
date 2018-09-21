import { TYPES } from '../Constants/Types';
import axios from 'axios';
import { API } from '../Constants/Api';
import { toast } from 'react-toastify';

export const instamojo_Request = () => {
    return {
        type: TYPES.fileKYC_request
    }
    console.log("request update");
}

export const instamojo_Success = (response) => {
    return {
        type: TYPES.fileKYC_success,
        response
    }
    console.log("success update");
}

export const instamojo_Failure = (error) => {
    return {
        type: TYPES.fileKYC_failure,
        error
    }
}

export const instamojoTrigger = (url) => {
    return (dispatch) => {
        dispatch(instamojo_Request());
        let config = {
            headers: {
                Authorization: localStorage.getItem("user")
            }
        };
        axios.post( url  , config ).then(
            (response) => {
                console.log(response.data);
                dispatch(instamojo_Success(response.data));
                // toast.success("", {
                //     position: toast.POSITION.TOP_RIGHT
                // });
            }
        ).catch(
            (error) => {
                dispatch(instamojo_Failure(error));
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        )
    }
}