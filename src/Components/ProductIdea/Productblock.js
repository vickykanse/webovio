import React, { Component } from 'react';

class Productblock extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            data: [
                {
                    title: 'Product Design Sprint',
                    description: 'A five-day workshop that will help you answer crucial business questions'
                },
                {
                    title: 'Scoping Session',
                    description: 'A workshop aimed at shaping your business idea, answering questions regarding project planning'
                },
                {
                    title: 'UX Review',
                    description: 'An evaluation which will help you radically improve your product.'
                },
                {
                    title: 'Code Review',
                    description: 'Do you know what one of the key secrets of success is what makes people successful in business'
                },
                

            ]
        }
       
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((rowdata,i) =>
                     <div>
                          <h1>
                              {rowdata.title}
                          </h1>
                          <p>
                              {rowdata.description}
                          </p>
                          <a>Read More</a>
                     </div>
                    )
                }
            </div>
        );
    }
}

export default Productblock;