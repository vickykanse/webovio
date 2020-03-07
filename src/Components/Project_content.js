import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Project_content extends Component {
    render() {
        return (
            <div className="container">

            
            <div className="awsome-project">
                <ScrollAnimation animateIn='bounceInLeft' className="colume" animateOnce>
                   <h1>We Have Some Awesom Project.</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' className="colume" animateOnce>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </ScrollAnimation>
            </div>
            </div>
        );
    }
}

export default Project_content;