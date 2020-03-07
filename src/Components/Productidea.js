import React, { Component } from 'react';
import Productblock from '../Components/ProductIdea/Productblock';
import ScrollAnimation from 'react-animate-on-scroll';

class Productidea extends Component {
    
    render() {
    //     var product_block = {
    //         Producttext : [
    //           {id: '1', title: 'Product Design Sprint', age:'20'},
    //           {id: '2', title:'Scoping Session', age:'30'},
    //           {id: '3', title: 'UX Review', age:'20'},
    //           {id: '4', title:'Code Review', age:'30'}
    //       ]
    
    //   };
        return (
            <div className="container">
                 <div className="product-idea-wrapper">
                     <ScrollAnimation animateIn='fadeInUp' animateOnce>
                       <h1>
                       Deation & Evaluation - Best Way <br></br>to Kick off Your Product Idea
                       </h1>
                       </ScrollAnimation>
                       <div >
                     <Productblock ></Productblock>
                 </div>
                 </div>
                
                
            </div>
        );
    }
}

export default Productidea;

