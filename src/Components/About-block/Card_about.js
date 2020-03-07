import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import about_img from '../../images/avitar/avitar-about.png'

class Card_about extends Component {
    render() {
        return (
             <ScrollAnimation animateIn='bounceInRight' className="card-about" animateOnce>
                  <ScrollAnimation animateIn='bounceInRight' duration='1.5' animateOnce>
                  <p>With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed</p>
                  </ScrollAnimation>
               
                 <div className="auther-name">
                     <ScrollAnimation animateIn='bounceInRight' duration='1.8' className="image" animateOnce>
                         <img src={about_img} />
                     </ScrollAnimation>  
                     <ScrollAnimation animateIn='bounceInRight' duration='2' className="title-card" animateOnce>
                         <h1>Genevieve Rodriquez</h1>
                         <span>Founder & CEO, Webovio</span>
                     </ScrollAnimation>

                 </div>
             </ScrollAnimation>
        );
    }
}

export default Card_about;