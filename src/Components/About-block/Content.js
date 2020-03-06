import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {caretRight} from 'react-icons-kit/fa/caretRight'

class Content extends Component {
    render() {
        return (
             <div className="tbl">
                 <div className="tbl-cell">
                    <div className="content">
                        <span>What we do for you</span>
                        <h1>Strategy. Design  Content. Technology Development </h1>
                        <p>There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
                        <a><Icon icon={caretRight} size={20}/> More know About us</a>
                    </div>
                 </div>
             </div>
        );
    }
}

export default Content;