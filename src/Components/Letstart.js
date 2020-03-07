import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Letstart extends Component {
    render() {
        return (
            <div className="left-Container">
                <div className="letsdo">
                <ScrollAnimation animateIn='bounceInLeft' duration="1.2"  animateOnce>
                     <h1>Let’s make something <br></br>amazing together.</h1>
                     </ScrollAnimation>
                     <ScrollAnimation animateIn='bounceInLeft' duration="1.4"   animateOnce>
                     <a>LET'S GET STARTED</a>
                     </ScrollAnimation>
                </div>
                
            </div>
        );
    }
}

export default Letstart;