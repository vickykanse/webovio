import React, { Component } from 'react';
import about_img from '../../images/avitar/avitar-about.png'

class Card_about extends Component {
    render() {
        return (
             <div className="card-about">
                 <p>With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed</p>
                 <div className="auther-name">
                     <div className="image">
                         <img src={about_img} />
                     </div>  
                     <div className="title-card">
                         <h1>Genevieve Rodriquez</h1>
                         <span>Founder & CEO, Webovio</span>
                     </div>

                 </div>
             </div>
        );
    }
}

export default Card_about;