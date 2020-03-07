import React, { Component, lazy, Suspense } from 'react';

import Header from '../Components/Header';

const Partners = React.lazy(()=>import('../Components/Partners'));
const About_block = React.lazy(()=>import('../Components/About_block'));
const Project_content = React.lazy(()=>import('../Components/Project_content'));
const Casestudyblock = React.lazy(()=>import('../Components/CaseStudyblock'));
const ProductIdea = React.lazy(()=>import('../Components/Productidea'));
const Letsdo = React.lazy(()=>import('../Components/Letstart'));
const Footer = React.lazy(()=>import('../Components/footer'));

class index extends Component {
    
    render() {
        var nav_item = {
            menu: ["Home", "Service", "Work", "Hire"]
           }
       
        return (
            <>
                <Header navItem={nav_item}></Header>
                <Suspense fallback={<div>loading ..</div>}>
                    <Partners></Partners>
                    <About_block></About_block>
                    <Project_content></Project_content>
                    <Casestudyblock></Casestudyblock>
                    <ProductIdea ></ProductIdea>
                    <Letsdo></Letsdo>
                    <Footer></Footer>
                </Suspense>
            </>
        );
    }  
}

export default index;