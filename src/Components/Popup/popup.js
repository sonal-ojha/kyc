import React from 'react';
import './popup.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closeScreen: false,
        }
        this.close = this.close.bind(this);
        console.log("url", this.props.urlInstamojo)
    }
    close(e) {
        this.setState({
            ...this.state, closeScreen: true
        })
        this.props.dataFromParent(this.state.closeScreen);
    }
    render() {
        return (
            // <div className="backgroundDisplay" >
            <div className="popup_container">
                {this.props.displayPopUp &&
                    <div>
                        <h4> Received your order !! </h4>
                        {/* <h4> Please click below to complete payment </h4>
                        <h4> Invoice has been sent to your mailID</h4> */}
                        <div className="PriceDetails" >
                            <h6 className="orderHeader" > Order Details</h6>
                            <h6>Base Price : Rs.699 </h6>
                            <h6>GST (18%) : Rs.125 </h6>
                            <h6>Total Price : Rs.824 </h6>
                        </div>
                        <button name="ok" onClick={(e) => this.close(e)}>
                            <a href={this.props.urlInstamojo} > PROCEED TO PAY </a>
                        </button>
                    </div>
                }
            </div>
            // </div>
        )
    }
}

export default Popup;