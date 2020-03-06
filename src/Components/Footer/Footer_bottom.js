import React, { Component } from 'react';
import footerlogo from '../../images/logo.svg'

class Footer_bottom extends Component {
    render() {
        return (
           
                <div className="footer-bottom">
                    <div className="pull-left">
                        <img src={footerlogo} />
                    </div>
                    <div className="pull-right">
                        <span>© 2020@webovio. All Rights Reserved.</span>
                    </div>

                </div>
                
          
        );
    }
}

export default Footer_bottom;