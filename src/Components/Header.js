import React, {Component} from 'react';
import './Header.css';
import logo from '../logo.jpg';

class Header extends Component
{
    render()
    {
        
        return(    
            
            <div className="Header">
                <img src={logo}width="300"/> 
            </div>
        );
    }
}

export default Header;