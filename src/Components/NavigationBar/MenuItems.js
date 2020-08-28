import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

const Error = () => {
  return (<h1>This page was not found</h1>)
}

class MenuItems extends React.Component{
  render(){
  return (
    <Router>
    <div className="nav-menu">
    <NavLink 
    className="navbar__link" exact to = "/gundem">Gündem</NavLink> 
    <NavLink 
    className="navbar__link" exact to = "/ekonomi">Ekonomi</NavLink> 
    <NavLink 
    className="navbar__link" exact to = "/dunya">Dünya</NavLink> 
    <NavLink 
    className="navbar__link" exact to = "/spor">Spor</NavLink> 
    <NavLink 
    className="navbar__link" exact to = "/magazin">Magazin</NavLink> 
    </div>
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
