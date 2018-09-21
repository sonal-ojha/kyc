import React from 'react';
import './Home.css';
import Form  from '../Form/Form';
import Screen1 from '../Screen1/Screen1';
import Screen2 from '../Screen2/Screen2';
import Screen3 from '../Screen3/Screen3';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage : 1,
            applyScreen1Animation:false,
        }
        this.handleNavClick = this.handleNavClick.bind(this);

    }
    handleNavClick(e){
        e.preventDefault();
        var val = this.state.currentPage;
        if (this.state.currentPage == 3){
            val = 1;
            this.setState({
                applyScreen1Animation : true
            })
        }
        else{
            val = val + 1;
        } 
        console.log("page no", val)
        this.setState({
            currentPage : val
        })
    }
    render() {
        return (

            <div className="row backImg fadeIN">
                <div className={"col-md-6 col-sm-6" + " " +(this.state.currentPage != "1" ? "screenBackground" : '')}>
                    {this.state.currentPage == "1" && <Screen1 displayAnimation={this.state.applyScreen1Animation} />}
                    {this.state.currentPage == "2" && <Screen2 /> } 
                    {this.state.currentPage == "3" && <Screen3 /> } 
                </div>
                <div className="btnNavigateContainer" >
                    {this.state.currentPage != "3" &&
                        <button className="btnNavigate" onClick={this.handleNavClick} > V </button>
                    }
                    {this.state.currentPage == "3" &&
                        <button className="btnNavigate" onClick={this.handleNavClick} > ^ </button>
                    }
                </div>
                <div className="col-md-6 col-sm-6">
                    <Form />
                </div>
            </div>

        )

    }
}

export default Home;