import React, { Component } from 'react';
import Header from '../Components/Header';
import Partners from '../Components/Partners';
import About_block from '../Components/About_block';
import ProductIdea from '../Components/Productidea';
import Letsdo from '../Components/Letstart';
import Casestudyblock from '../Components/CaseStudyblock'; 
import ProjectContent from '../Components/Project_content';
import Footer from '../Components/footer'
import Project_content from '../Components/Project_content';
 
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
                <Project_content></Project_content>
                <Casestudyblock></Casestudyblock>
                <ProductIdea ></ProductIdea>
                <Letsdo></Letsdo>
                <Footer></Footer>
                
            </div>
        );
    }  
}

export default index;