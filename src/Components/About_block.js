import React, { Component } from 'react';
import Content from '../Components/About-block/Content';
import Card from '../Components/About-block/Card_about';

class About_block extends Component {
    render() {
        return (
            <div className="container">
                <div className="about-block">
                      <div className="two-column-grid">
                            <div className="column">
                                 <Content></Content>
                            </div>
                            <div className="column">
                                  <Card></Card>
                            </div>
                      </div>
                </div>
            </div>
        );
    }
}

export default About_block;