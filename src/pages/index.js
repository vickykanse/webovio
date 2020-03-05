import React, { Component } from 'react';
import Header from '../Components/Header';
import Partners from '../Components/Partners';
import About_block from '../Components/About_block';
import ProductIdea from '../Components/Productidea';

class index extends Component {
    
    render() {
        var nav_item = {
            menu: ["Home", "Service", "Work", "Hire"]
           }
       
        return (
            <div >
                <Header navItem={nav_item}></Header>
                <Partners></Partners>
                <About_block></About_block>
                <ProductIdea ></ProductIdea>
                
            </div>
        );
    }  
}

export default index;