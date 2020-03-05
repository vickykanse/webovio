import React, { Component } from 'react';
import p1 from '../images/partners/p1.png';
import p2 from '../images/partners/p2.png';
import p3 from '../images/partners/p3.png';
import p4 from '../images/partners/p4.png';
import p5 from '../images/partners/p5.png'

class Partners extends Component {
    render() {
        return (
            <div className="right-Container">
                 <div className="partners">
                      <div className="image-grid">
                           <img src={p1} />
                      </div>
                      <div className="image-grid">
                           <img src={p2} />
                      </div>
                      <div className="image-grid">
                           <img src={p3} />
                      </div>
                      <div className="image-grid">
                           <img src={p4} />
                      </div>
                      <div className="image-grid">
                           <img src={p5} />
                      </div>
                 </div>
            </div>
        );
    }
}

export default Partners;