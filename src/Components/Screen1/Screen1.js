import React from 'react';
import './Screen1.css';
import logo from '../../images/docket.png';

class Screen1 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="screen1">
                <div className={"s1_container" +  " " + (this.props.displayAnimation ?  "w3-animate-left" : '')} >
                    <img src={logo} alt="Logo" className="logo" />
                    <hr className="HR"/>
                    <div className="row-sm-12">
                        <p>
                            <p className="giantText">UPDATE YOUR</p>
                            <strong className="giantText"> DIRECTOR KYC </strong>  WITH <br />
                            <strong className="giantText"> REGISTRAR OF COMPANIES </strong> <br />
                            <strong className="amtTxt">@ RS 799/- </strong>
                        </p>
                    </div>
                    <hr className="HR" />
                    <div className="row-sm-12 footer">
                        <p>
                            * Mandatory as per Companies Act 2013
                            <p> * Govt fee of Rs.500 applicable till 5th October</p>
                    </p>
                    </div>
                </div>

            </div>
        )

    }
}

export default Screen1;