import React, { Component } from 'react';
import logo from '../images/logo.svg';
import remove from '../images/e-remove.svg'
import MenuToggle from '../images/toggle-btn.svg'
import HeaderContent from './header/Header_content'
class Header extends Component {
     
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
  
    render() {
        return (
            <div className="header-block">
                 <div className="container">
                     <div className="header-top">
                         <img src={logo} />
                         <button type="button" className="nav-toggle-btn" onClick={this.handleToggle}>
                            <img src={MenuToggle} alt="toggle icon" />
                        </button>

                     </div>  
                     <div className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                         <span className="close-menu" onClick={this.handleToggle}><img src={remove} /></span>
                          <ul >
                            {this.props.navItem.menu.map((menu,i) => <li key={i}><a href="#">{menu}</a></li>)}
                          </ul>
                     </div>
                     
                       
                 </div>
                 <HeaderContent></HeaderContent>
                
            </div>
        );
    }
}

export default Header;