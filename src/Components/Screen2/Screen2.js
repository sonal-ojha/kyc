import React from 'react';
import './Screen2.css';

class Screen2 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="screen2">
                <div className="row s2_container w3-animate-right" >
                    <div className="Q1 row-2" >
                        <div className="Question" >
                            <p> Who has to file eForm DIR-3 KYC?</p>
                        </div>
                        <div className="Answer" >
                            <p>
                                As per MCAs recent announcement, any director who was allotted a DIN by or on 31st of March 2018 and whose DIN is in approved status, will have to submit his KYC details to the MCA. Further, this procedure is mandatory for Disqualified directors too.
                            </p>
                        </div>
                    </div>
                    <div className="Q2 row-5">
                        <div className="Question" >
                            <p> What are the checkpoints involved in filing the eForm DIR-3 KYC?</p>
                        </div>
                        <div className="Answer" >
                            <ul>
                                <li>Every director’s unique personal mobile number and email address will have to be provided while filing the eForm. This number and email address will be verified by a one-time password (OTP).</li>
                                <li>The second check implanted here would be that the director has to use his own Digital Signature while filing this eForm.</li>
                                {/* <li>Further, the third test to ensure that complete and right information is provided will be that the eForm should be certified by a practicing Chartered Accountant or Company Secretary or Cost and Management Accountant.</li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="Q3 row-5">
                        <div className="Question" >
                            {/* <p> What happens if eForm DIR-3 KYC is not filed within the due date specified?</p> */}
                            <p>Important Note :</p>
                        </div>
                        <div className="Answer" >
                            <ul>
                                {/* <li> In cases when the director who is supposed to file the eForm does not file it by the 15th of September 2018 on MCA 21 portal, the department will mark the DIN of such director as ‘Deactivated’ with the reason shown as ‘Non-filing of DIR-3 KYC’.</li>
                                <li>If the director wishes to re-activate his DIN in future by filing the missed out eForm DIR-3 KYC, he can do so only after a specified fee is paid.</li> */}
                                {/* <li>This is a very simple process when ClearTax is there for you. We will file your Form DIR-3 KYC in minutes just for INR 499/- only! Click here now.</li> */}
                                <li> As you are aware the last date for filing form DIR-3 KYC without fee has expired on 15th September 2018. The process of deactivating the non-compliant DINs has since been completed and their status has been updated as ‘Deactivated due to non-filing of DIR-3 KYC’. </li>
                                <li>However, the non-compliant DIN holders may file DIR-3 KYC with a fee of Rs.500 (Rupees Five Hundred Only) from 21st September till 5th October 2018(both days inclusive) to get their DINs reactivated. From 6th October 2018 onwards, a fee of Rs.5000 (Rupees Five Thousand Only) becomes payable for reactivation.</li>
                            </ul>
                        </div>
                    </div>

                </div>
                </div>
            // </div>
        )

    }
}

export default Screen2;