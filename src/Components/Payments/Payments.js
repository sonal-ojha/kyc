import React from 'react';
import './Payments.css';
import { API } from '../../Constants/Api';
import logo from '../../images/payumoney_logo.png';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.payumoney = this.payumoney.bind(this);
    }

    payumoney() {
        // data object for payumoney
        // console.log("BEFORE"+this.props.updateFileKYCReducer);
        if (this.props.updateFileKYCReducer.success.hasOwnProperty('responseData')) {
        // console.log("AFTER"+this.props.updateFileKYCReducer);
        
            console.log("money data", this.props.updateFileKYCReducer.success.responseData);
            var filekycResponse = this.props.updateFileKYCReducer.success.responseData;
            var pd = {
                key: '',
                txnid: filekycResponse.order_id,
                amount: '10' ,
                // merchantId:'5321854',                              
                firstname: filekycResponse.name,
                email: filekycResponse.email_id,
                phone: filekycResponse.mobile,
                productinfo: 'kyc update',
                surl: 'https://www.google.com',
                furl: 'https://www.facebook.com',
                hash: '',
                service_provider: 'payu_paisa'
            }

            // data object to get the hash key from backend
            let data = {
                'txnid': pd.txnid,
                'email': pd.email,
                'amount': pd.amount,
                'productinfo': pd.productinfo,
                'firstname': pd.firstname
            }

            let self = this;

            // call api to get haskkey
            fetch(API.base_url + '/payment/payumoney', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(function (a) {
                    return a.json(); // call the json method on the response to get JSON
                })
                .then(function (json) {
                    // assigning hash key to the data object
                    pd.hash = json['hash'];
                    pd.key = json['key'];
                    console.log("pd data", pd);
                    self.redirectToPayU(pd);
                });

        }
    }
    // Redirecting payumoney
    /*global someFunction bolt:true*/
    redirectToPayU(pd) {
        bolt.launch(pd, {
            responseHandler: function (response) {
                // your payment response Code goes here
                fetch(API.base_url + '/payment/payumoney/response', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(response.response)
                })
                    .then(function (a) {
                        return a.json(); // call the json method on the response to get JSON
                    })
                    .then(function (json) {
                        console.log(json);
                    });
            },
            catchException: function (response) {
                // the code you use to handle the integration errors goes here
                console.log(response);
            }
        });

    }

    render() {
        console.log("pay render")
        return (
            <div className="pay_screen">
                {/* <img src={logo} className="PayLogo" onClick={this.payumoney} /> */}
                {this.props.updateFileKYCReducer.success && this.props.updateFileKYCReducer.success.status == "Success" && this.payumoney() }
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return state
}

export default withRouter(connect(mapStateToProps)(Payment));

// export default Payment;