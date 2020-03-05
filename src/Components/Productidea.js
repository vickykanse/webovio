import React, { Component } from 'react';
import Productblock from '../Components/ProductIdea/Productblock';

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
                       <h1>
                       Deation & Evaluation - Best Way <br></br>to Kick off Your Product Idea
                       </h1>
                 </div>
                 <div>
                     <Productblock ></Productblock>
                 </div>
                
            </div>
        );
    }
}

export default Productidea;

