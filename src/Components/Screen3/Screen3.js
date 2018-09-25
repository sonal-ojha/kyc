import React from 'react';
import './Screen3.css';
import tel from '../../images/phone-call.svg';
import envelope from '../../images/envelope.svg';
import facebook from '../../images/facebook-logo.svg';
import google from '../../images/google-plus-social-logotype.svg';
import twitter from '../../images/twitter-social-logotype.svg';

class Screen3 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="screen3">
                <div className="col-12 s3_container w3-animate-right" >
                    <div className="displayBold row-12" >Get In Touch</div>
                    <div className="tinyText row-12">[We'd love to hear from you]</div>
                    <hr className="smallHR" />
                    {/* <div className="VRLine" >
                        <div class="vl"> </div>
                    </div> */}
                    <div>
                        <div className="contact_container row-12 col-12">
                            <div className="contact" >
                                <div>
                                    <img src={tel} alt="Call To" className="img" />
                                    <pre className="displayBold">+91-8073573206</pre>
                                </div>
                            </div>
                            <div className="or" >
                                <div className="" >
                                    <div class="vl"> </div>
                                </div> 
                                <p className="tinyText" >or</p>
                                <div className="" >
                                    <div class="vl"> </div>
                                </div>
                            </div>
                            <div className="mail" >
                                <div>
                                    <img src={envelope} alt="Call To" className="img" />
                                    <p className="displayBold">services@dockettech.com</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="VRLine" >
                            <div class="vl"> </div>
                        </div> */}
                        <hr className="smallHR col-12" />
                    </div>
                    <div>
                        <div className="displayBold row-12">
                            Docket Tech Solutions Private Limited
                        </div>
                        <div>
                            <p className="tinyText" >
                                Mayur Tower, #10, 1st road, 3rd Man Rd <br />
                                Ashwini Layout, Ejipura, Bangalore - 560047 <br />
                                Karnataka, India
                            </p>
                        </div>
                        <div>
                            <hr className="smallHR spaceHR" />
                        </div>
                        <div>
                            <div className="displayBold"> Follow Us </div>
                            <div className="social_container" >
                                <div className="socialItem" >
                                    <a href="https://www.facebook.com/dockettech" target="_blank">
                                        <img src={facebook} alt="facebook" className="imglogo" />
                                    </a>
                                </div>
                                <div className="socialItem" >
                                    <a href="https://twitter.com/dockettech" target="_blank">
                                        <img src={twitter} alt="twitter" className="imglogo" />
                                    </a>
                                </div>
                                <div className="socialItem" >
                                    <a href="https://plus.google.com/u/1/+DocketTechSolutionsPrivateLimitedBengaluru" target="_blank">
                                        <img src={google} alt="google+" className="imglogo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className="smallHR" />
                        </div>
                        <div>
                            <p className="tinyText">@2018-19 Docket Tech Solutions Private Limited. All Rights Reserved.</p>
                        </div>
                    </div>

                </div>
            </div>
        )

    }
}

export default Screen3;