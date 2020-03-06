import React, { Component } from 'react';
import Footerbottom from '../Components/Footer/Footer_bottom';
import Footermid from '../Components/Footer/Footer_middile';
import Footertop from '../Components/Footer/Footer_top';
 
class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <Footertop></Footertop>
                    <Footermid></Footermid>
                    <Footerbottom></Footerbottom>
                </div>
            </div>
        );
    }
}

export default footer;