import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {caretRight} from 'react-icons-kit/fa/caretRight';
import ScrollAnimation from 'react-animate-on-scroll';

class Productblock extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            data: [
                {
                    title: 'Product \n Design Sprint',
                    description: 'A five-day workshop that will help you answer crucial business questions'
                },
                {
                    title: 'Scoping \n Session',
                    description: 'A workshop aimed at shaping your business idea, answering questions regarding project planning'
                },
                {
                    title: 'UX \n Review',
                    description: 'An evaluation which will help you radically improve your product.'
                },
                {
                    title: 'Code \n Review',
                    description: 'Do you know what one of the key secrets of success is what makes people successful in business'
                },
                

            ]
        }
       
    }
    render() {
        return (
            <ScrollAnimation animateIn='fadeInUp' animateOnce className="product-grid">
                {
                    this.state.data.map((rowdata,i) =>
                     <div className="product-grid-item">
                          <h1>
                              {rowdata.title}
                          </h1>
                          <p>
                              {rowdata.description}
                          </p>
                          <a><Icon icon={caretRight} size={20}/> Read More</a>
                     </div>
                    )
                }
            </ScrollAnimation>
        );
    }
}

export default Productblock;