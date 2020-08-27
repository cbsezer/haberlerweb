import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

const Error = () => {
  return (<h1>This page was not found</h1>)
}

class MenuItems extends React.Component{
  render(){
  return (
    <Router>
    <NavLink activeStyle = {{color: 'black'}} exact to = "/gundem">Gündem</NavLink> <br></br>
    <NavLink activeStyle = {{color: 'black'}} exact to = "/ekonomi">Ekonomi</NavLink> <br></br>
    <NavLink activeStyle = {{color: 'black'}} exact to = "/dunya">Dünya</NavLink> <br></br>
    <NavLink activeStyle = {{color: 'black'}} exact to = "/spor">Spor</NavLink> <br></br>
    <NavLink activeStyle = {{color: 'black'}} exact to = "/magazin">Magazin</NavLink> <br></br>
    <div>
    <br></br>
      <Switch>
      <Route 
      path = '/' 
      exact
      />
      <Route 
      path = '/gundem' 
      exact
      strict/>
      <Route 
      path = '/ekonomi' 
      exact
      strict
    />
      <Route 
      path = '/dunya' 
      exact
      strict
     />
      <Route 
      path = '/spor' 
      exact
      strict
     />
      <Route 
      path = '/magazin' 
      exact
      strict
      />
      <Route
      component={Error}/>
    </Switch>
    </div>
    </Router>
    
  );
}
}
export default MenuItems;
