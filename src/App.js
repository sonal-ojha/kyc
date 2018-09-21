import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as  Router, Route } from "react-router-dom";
import  Home from './Components/Home/Home';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import Loader from './Components/Loader/Loader' ;

 class App extends Component {
  render() {
    return (
      <div className="">
        <Router >
            <Route exact path="/" component={Home} />
        </Router>
        <ToastContainer autoClose={2000}/>
        {this.props.loader && <Loader />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return state.loaderReducer;
}

export default connect(mapStateToProps)(App);
