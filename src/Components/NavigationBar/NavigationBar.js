import React, { Component } from 'react';
import MenuItems from './MenuItems';
import './NavigationBar.css'
import Button from './Button'

 class NavigationBar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">HBR <i className="fab fa-galactic-republic"></i></h1>
               
                  <MenuItems></MenuItems>
                <Button/>
            </nav>
        )
    }
}
export default NavigationBar;