import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import p1 from '../images/partners/p1.png';
import p2 from '../images/partners/p2.png';
import p3 from '../images/partners/p3.png';
import p4 from '../images/partners/p4.png';
import p5 from '../images/partners/p5.png'

class Partners extends Component {
    render() {
        return (
            <div className="right-Container">
                 <div className="partners">
                      <ScrollAnimation animateIn='bounceInRight' duration="1.8" className="image-grid" offset="1" animateOnce>
                           <img src={p1} />
                      </ScrollAnimation>
                      <ScrollAnimation animateIn='bounceInRight' duration="2" className="image-grid" offset="1" animateOnce>
                           <img src={p2} />
                      </ScrollAnimation>
                      <ScrollAnimation animateIn='bounceInRight' duration="2.2" className="image-grid" offset="1" animateOnce>
                           <img src={p3} />
                      </ScrollAnimation>
                      <ScrollAnimation animateIn='bounceInRight' duration="2.4" className="image-grid" offset="1" animateOnce>
                           <img src={p4} />
                      </ScrollAnimation>
                      <ScrollAnimation animateIn='bounceInRight' duration="2.6" className="image-grid " offset="1" animateOnce>
                           <img src={p5} />
                      </ScrollAnimation>
                 </div>
            </div>
        );
    }
}

export default Partners;