import React, { Component } from 'react'
import './Button.css'


class Button extends Component{
    state={
        title:" "
    }
    handleChange(event) {
        this.setState({title: event.target.value})
      }
      render() {
        return <div>
        <input className="container" type="text"  placeholder="Haberlerde Ara" value={this.state.title} 
        onChange={this.handleChange.bind(this)}/>
        <button type ="button" className="btn btn-primary">Ara</button>
        </div>
      }
}

export default Button;
