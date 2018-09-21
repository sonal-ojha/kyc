import React from 'react';
import GIF from '../../images/Animated-logo.gif';

export default class Loader extends React.Component{
    render(){
        return (
            <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                height: '100vh',
                width: '100vw',
                background: 'rgba(0,0,0,0.5)'
            }}>
                <img src={GIF} alt="Loader" style={{
                    height: '100px',
                    width: '100px',
                    position: 'fixed',
                    top: 'calc(50vh - 50px)',
                    left: 'calc(50vw - 50px)',
                }}/>
            </div>
        )
    }
}