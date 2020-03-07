import React, { Component, useEffect, useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


class Header_content extends Component {
  
    render() {
        return (
            <div className="tbl">
                <div className="tbl-cell">
                    <div className="container">
                        <div className="header-content">
                        <ScrollAnimation animateIn='bounceInLeft'  duration="1" animateOnce> 
                               <span  className="title-header">Digital Design Studio</span>
                         </ScrollAnimation>
                         <ScrollAnimation animateIn='bounceInLeft' duration="1.2" animateOnce> 
                             <h1 > A creative agency for Innovative ideas</h1>
                         </ScrollAnimation>
                         <ScrollAnimation animateIn='bounceInLeft' duration="1.4" animateOnce>  
                             <p>We are the answer for both the individual needs of clients as well as complete projects - from idea to execution.</p>
                             </ScrollAnimation>
                             <ScrollAnimation animateIn='bounceInLeft' duration="1.6" animateOnce> 
                             <button className="btn-header">Get Started</button>
                             </ScrollAnimation>
                        </div>
                   
                    </div> 
                </div>
            </div>
        );
    }
}

export default Header_content;