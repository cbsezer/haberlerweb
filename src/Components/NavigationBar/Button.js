import React, { Component } from 'react'
import './Button.css'


class Button extends Component{
    render(){
        return(
            <input className="field"
            type="search"
            aria-label="Search"
            placeholder = "Haberlerde Ara">
            </input>
        )
    }
}

export default Button;