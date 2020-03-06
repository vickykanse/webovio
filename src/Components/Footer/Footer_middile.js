import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {facebook} from 'react-icons-kit/icomoon/facebook';
import {twitter} from 'react-icons-kit/icomoon/twitter';
import {googlePlus} from 'react-icons-kit/icomoon/googlePlus';
import {linkedin} from 'react-icons-kit/entypo/linkedin'

class Footer_middile extends Component {
    render() {
        return (
            <div className="footer-middle">
                <ul>
                    <li>
                        <span>Services</span>
                    </li>
                    <li>
                        <a>Strategy Design</a>
                    </li>
                    <li>
                        <a>Product Design</a>
                    </li>
                    <li>
                        <a>Content Strategy</a>
                    </li>
                    <li>
                        <a>Brand Strategy</a>
                    </li>
                    <li>
                        <a>Development</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>Help And Advice</span>
                    </li>
                    <li>
                        <a>How it works</a>
                    </li>
                    <li>
                        <a>Contact Support</a>
                    </li>
                    <li>
                        <a>Privacy Policy</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>Company</span>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>Jobs</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>Get in Touch</span>
                    </li>
                    <li>
                        <a>Feel free to get in touch with us vai email</a>
                    </li>
                    <li>
                        <a><h1>info.webovio@gmail.com</h1></a>
                    </li>
                    <li>
                         <ul>
                             <li>
                                 <a> <Icon icon={facebook} size={20} /></a>
                             </li>
                             <li>
                                 <a> <Icon icon={twitter} size={20} /></a>
                             </li>
                             <li>
                                 <a><Icon icon={googlePlus} size={20} /></a>
                             </li>
                             <li>
                                 <a><Icon icon={linkedin} size={20} /></a>
                             </li>
                         </ul>
                    </li>
                   
                </ul>
            </div>
        );
    }
}

export default Footer_middile;