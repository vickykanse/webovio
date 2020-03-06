import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {caretRight} from 'react-icons-kit/fa/caretRight'

class CaseStudyblock extends Component {
    state = {
        Casestudytext : [
         
         
      ]

  };
  constructor(props)
  {
      super(props)
      this.state = {
          data: [
             { 
                title: 'The wall new Balenciaga.com', 
                description:'This article is floated online with an aim to help you find the best dvd printing solution. \n\n Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs.',
                file: require('../images/casestudy/c1.png'),
                testimonial: '"In my history of working with trade show vendors, I can honestly say that there is not one company that I have ever worked with that has better service than Exhibit Systems."',
                testimonial_name: "Angel Armstrong",
                testimonial_des: "Founder & CEO, Google",
                auther:require('../images/avitar/a1.png')
            },
            { 
              title: 'Is this the future of 3D model?', 
              description:'While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space. \n\n It is those feelings that drive our love of astronomy and our desire to learn more and more about it. ',
              file: require('../images/casestudy/c2.png'),
              testimonial: '“I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems."',
              testimonial_name: 'Lina Hart',
              testimonial_des: 'Founder & CEO, Jico',
              auther:require('../images/avitar/a2.png')
            },
            { 
                title: ' Is this the future of Online Booking', 
                description:'You should be able to find several indispensable facts about motivation in the following paragraphs. \n\n If there’s at least one fact you didn’t know before, imagine the difference it might make.',
                file: require('../images/casestudy/c3.png'),
                testimonial: '“I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems."',
                 testimonial_name: 'Lina Hart',
                testimonial_des: 'Founder & CEO, Jico',
                auther:require('../images/avitar/a3.png')
             },
          ]
      }
     
  }
    render() {
        return (
            <div className="full-container">
                <div className="casestudy-grid">
                `    {
                        this.state.data.map((rowdata,i) =>
                        <div className="casestudy-grid-item">
                             <div className="img">
                                 <img src={rowdata.file} />
                                 <div className="testimonial-box">
                                     <p>{rowdata.testimonial}</p>
                                     <div className="testimonial-title">
                                         <div className="testimonial-img">
                                             <img src={rowdata.auther} />
                                         </div>
                                         <div className="testimonial-des">
                                              <h1>{rowdata.testimonial_name}</h1>
                                              <span>{rowdata.testimonial_des}</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div className="tbl">
                                 <div className="tbl-cell">
                                     <div className="content">
                                        <h1>
                                            {rowdata.title}
                                        </h1>
                                        <p>
                                            {rowdata.description}
                                        </p>
                                        <a><Icon icon={caretRight} size={20}/> See Case Study</a>
                                     </div>
                                 </div>
                             </div>
                             
                           
                           
                        </div>
                        )
                    }`
                </div>
                
            
            </div>
        );
    }
}

export default CaseStudyblock;