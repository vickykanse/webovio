import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from 'react-icons-kit';
import {caretRight} from 'react-icons-kit/fa/caretRight'

class Content extends Component {
    render() {
        return (
             <div className="tbl">
                 <div className="tbl-cell">
                    <div className="content">
                    <ScrollAnimation animateIn='bounceInLeft' duration='1' animateOnce>
                        <span>What we do for you</span>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInLeft' duration='1.2' animateOnce>
                        <h1>Strategy. Design  Content. Technology Development </h1>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInLeft' duration='1.4' animateOnce>
                        <p>There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
                         </ScrollAnimation>
                         <ScrollAnimation animateIn='bounceInLeft' duration='1.6' animateOnce>
                        <a><Icon icon={caretRight} size={20}/> More know About us</a>
                        </ScrollAnimation>
                    </div>
                 </div>
             </div>
        );
    }
}

export default Content;