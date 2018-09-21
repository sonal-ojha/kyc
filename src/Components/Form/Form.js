import React from 'react';
import './Form.css';
import upload from '../../images/upload.svg';
import { updateEnquiryDetails } from '../../Actions/enquiryAction';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { fileKYCDetails } from '../../Actions/fileKYCAction';
import Payment from '../Payments/Payments';
import Popup from '../Popup/popup';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultFormType: "kyc",
            name: "",
            phone: "",
            email_id: "",
            din: "",
            pan_number: "",
            pan: "",
            aadhar: "",
            voterid: "",
            displaySuccessScreen: true,
        }
        this.handleInputData = this.handleInputData.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePayment = this.handlePayment.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick(e, type) {
        e.preventDefault();
        this.setState({
            defaultFormType: type
        })
    }
    handleFiles(e) {
        e.preventDefault();
        var name = e.target.name;
        if (e.target.files[0] === undefined) {
            return;
        }
        else {
            var value = e.target.files[0].name;
        }
        console.log("target files", name, value, e.target.files[0]);
        switch (name) {
            case "pan":
                this.setState({
                    pan: value,
                })
                break;
            case "aadhar":
                this.setState({
                    aadhar: value
                })
                break;
            case "voterid":
                this.setState({
                    voterid: value
                })
                break;
        }
    }
    handleInputData(e) {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        if (this.state.defaultFormType == "kyc") {
            switch (name) {
                case "name":
                    this.setState({
                        name: value
                    })
                    break;
                case "phone":
                    this.setState({
                        phone: value
                    })
                    break;
                case "email_id":
                    this.setState({
                        email_id: value
                    })
                    break;
                case "din":
                    this.setState({
                        din: value
                    })
                    break;
                case "pan_number":
                    this.setState({
                        pan_number: value
                    })
                    break;
                default:
            }
        }
        else {
            switch (name) {
                case "name":
                    this.setState({
                        name: value
                    })
                    break;
                case "phone":
                    this.setState({
                        phone: value
                    })
                    break;
                case "email_id":
                    this.setState({
                        email_id: value
                    })
                    break;
                default:
            }
        }
        console.log("state", this.state)
    }
    handlePayment(e) {
        e.preventDefault();
        this.setState({
            ...this.state, displaySuccessScreen : true
        })  
        if (this.state.name == "" || this.state.email_id == "" || this.state.phone == "" || this.state.din == "" || this.state.pan_number == "") {
            toast.error("Please enter all the details", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        if (this.state.phone.length != "10") {
            toast.error("Please enter valid Contact number", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        if (this.state.din.length != "8") {
            toast.error("Please enter valid DIN number", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        if (this.state.pan_number.length != "10") {
            toast.error("Please enter valid PAN number", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        var upload_pan = document.getElementById("pan").files[0];
        var upload_voterid = document.getElementById("voterid").files[0];
        var upload_aadhar = document.getElementById("aadhar").files[0];

        if (this.state.pan && this.state.aadhar && this.state.voterid) {
            var formData = new FormData();
            formData.append("name", this.state.name);
            formData.append("phone", this.state.phone);
            formData.append("din", this.state.din);
            formData.append("pan_number", this.state.pan_number);
            formData.append("email_id", this.state.email_id);
            formData.append("pan", upload_pan);
            formData.append("aadhar", upload_aadhar);
            formData.append("voterid", upload_voterid);

            console.log("formdata", formData);
            this.props.fileKYCDetails(formData);                    //API call

        } else {
            toast.error("All 3 files are required to be uploaded");
        }

    }
    handleSubmit(e) {      
        e.preventDefault();
        console.log("this.state", this.state)
        if (this.state.name == "" || this.state.email_id == "" || this.state.phone == "") {
            toast.error("Please enter all the details", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        var obj = {
            "name": this.state.name,
            "phone": this.state.phone,
            "email_id": this.state.email_id
        };
        // console.log("obj", obj);
        this.props.updateEnquiryDetails(obj);          //API call
    }
    handleClose(e){
        this.setState({
            ...this.state, displaySuccessScreen : false
        })
    }
    render() {
        console.log("render")
        return (
            <div className="row form_container">
                <div className="row-12 header" >
                    <div name="kyc" onClick={(e) => this.handleClick(e, "kyc")} className={this.state.defaultFormType != "kyc" ? "disable" : "headerType"} > FILE KYC </div>
                    <div name="enquiry" onClick={(e) => this.handleClick(e, "enquiry")} className={this.state.defaultFormType != "enquiry" ? "disable" : "headerType"} > ENQUIRY </div>
                </div>
                {this.state.defaultFormType == "enquiry" &&
                    <div className="kycdata" >
                        <div className="label">Name</div>
                        <div>
                            <input type="text" name="name" onChange={this.handleInputData} value={this.props.updateEnquiryReducer.success && this.props.updateEnquiryReducer.success.status == "Success" ? '' : this.state.name} className="input" />
                        </div>
                        <div className="label">Phone Number</div>
                        <div>
                            <input type="number" name="phone" onChange={this.handleInputData} value={this.props.updateEnquiryReducer.success && this.props.updateEnquiryReducer.success.status == "Success" ? '' : this.state.phone} className="input" />
                        </div>
                        <div className="label">Email Id</div>
                        <div>
                            <input type="email" name="email_id" onChange={this.handleInputData} value={this.props.updateEnquiryReducer.success && this.props.updateEnquiryReducer.success.status == "Success" ? '' : this.state.email_id} className="input" />
                        </div>
                        <div className="label">
                            <p> Loren lipsum has been industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book</p>
                        </div>
                        <div className="btnContainer" >
                            <button type="submit" name="submit" onClick={(e) => this.handleSubmit(e)} className="submitBtn btn"> SUBMIT </button>
                        </div>
                    </div>
                }
                {this.state.defaultFormType == "kyc" &&
                    <div className="enquiryData" >
                        <div className="label">Name</div>
                        <div>
                            <input type="text" name="name" onChange={this.handleInputData} value={this.props.updateFileKYCReducer.success && this.props.updateFileKYCReducer.success.status == "Success" ? '' : this.state.name} className="input" />
                        </div>
                        <div className="label">Phone Number</div>
                        <div>
                            <input type="number" name="phone" onChange={this.handleInputData} value={this.props.updateFileKYCReducer.success && this.props.updateFileKYCReducer.success.status == "Success" ? '' : this.state.phone} className="input" maxLength="10" />
                        </div>
                        <div className="label">Email Id</div>
                        <div>
                            <input type="email" name="email_id" onChange={this.handleInputData} value={this.props.updateFileKYCReducer.success && this.props.updateFileKYCReducer.success.status == "Success" ? '' : this.state.email_id} className="input" />
                        </div>
                        <div className="label">DIN Number</div>
                        <div>
                            <input type="number" name="din" onChange={this.handleInputData} value={this.props.updateFileKYCReducer.success && this.props.updateFileKYCReducer.success.status == "Success" ? '' : this.state.din} className="input" />
                        </div>
                        <div className="label">PAN Number</div>
                        <div>
                            <input type="text" name="pan_number" onChange={this.handleInputData} value={this.props.updateFileKYCReducer.success && this.props.updateFileKYCReducer.success.status == "Success" ? '' : this.state.pan_number} className="input" minLength="10" maxLength="10" />
                        </div>
                        <div className="file_container" >
                            <div className="label panLabel" > PAN Copy </div>
                            <label for="pan" className="label uploadLabel" name="pan" >
                                <span className="selectedFileBlock" >
                                    <img for="pan" src={upload} alt="upload file" className="upload" name="pan" />
                                    {this.props.updateFileKYCReducer.success && this.props.updateFileKYCReducer.success.status == "Success" ? '' : this.state.pan != "" &&
                                        <span>{this.state.pan}</span>
                                    }
                                </span>
                            </label>

                            <input id="pan" type="file" accept="" name="pan" className="file" onChange={this.handleFiles} />
                        </div>
                        <hr className="line" />
                        <div className="file_container" >
                            <div className="label panLabel" > Aadhar Copy </div>
                            <label for="aadhar" className="label uploadLabel" name="aadhar">
                                <span className="selectedFileBlock" >
                                    <img for="aadhar" src={upload} alt="upload file" className="upload" name="aadhar" />
                                    {this.props.updateFileKYCReducer.success && this.props.updateFileKYCReducer.success.status == "Success" ? '' : this.state.aadhar != "" &&
                                        <span>{this.state.aadhar}</span>
                                    }
                                </span>
                            </label>
                            <input id="aadhar" type="file" accept="" name="aadhar" className="file" onChange={this.handleFiles} />
                        </div>
                        <hr className="line" />
                        <div className="file_container" >
                            <div className="label panLabel" > Voter Id Copy </div>
                            <label for="voterid" className="label uploadLabel" name="voterid">
                                <span className="selectedFileBlock" >
                                    <img for="voterid" src={upload} alt="upload file" className="upload" />
                                    {this.props.updateFileKYCReducer.success && this.props.updateFileKYCReducer.success.status == "Success" ? '' : this.state.voterid != "" &&
                                        <span>{this.state.voterid}</span>
                                    }
                                </span>
                            </label>
                            <input id="voterid" type="file" accept="" name="voterid" className="file" onChange={this.handleFiles} />
                        </div>
                        <hr className="line" />
                        {this.state.defaultFormType == "kyc" &&
                            <div className="btnContainer" >
                                {/* <button type="submit" name="payNow" onClick={this.handlePayment} className="submitBtn"> PAY NOW </button> */}
                                <button type="submit" name="payNow" onClick={this.handlePayment} className="submitBtn"> SUBMIT </button>
                            </div>
                        }
                    </div>
                }
                {/* { this.state.displaySuccessScreen && */}
                {this.props.updateFileKYCReducer.success && this.props.updateFileKYCReducer.success.status === "Success" && this.props.instamojoReducer.success && this.props.instamojoReducer.success.status == "Success" && this.state.displaySuccessScreen && 
                     /* <Payment /> */
                    <div>
                        {/* <a href={this.props.instamojoReducer.success.data}>pay now</a> */}
                        <Popup displayPopUp={this.state.displaySuccessScreen} dataFromParent={(e)=>this.handleClose(e)} urlInstamojo ={this.props.instamojoReducer.success.data}/>
                    </div>
                }
            </div>

        )

    }
}

const mapStateToProps = (state) => {
    return state
}

export default withRouter(connect(mapStateToProps, { updateEnquiryDetails, fileKYCDetails })(Form));
