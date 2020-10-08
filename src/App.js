import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Anasayfa from './components/pages/Anasayfa'
import Ekonomi from './components/pages/Ekonomi'
import Magazin from './components/pages/Magazin'
import Spor from './components/pages/Spor'
import Dunya from './components/pages/Dunya'
import Gundem from './components/pages/Gundem'
import Detay from './components/pages/Detay'

const Deneme = () => {
  return <div className="container"></div>;
};

function App() {
  return (
    <div className="App">
  <Router>
  <Navbar/>
  <Switch>
  <Route path='/' exact component={Anasayfa}/>
  
      <Route 
      path = '/gundem' 
      exact component={Gundem}/>
      <Route 
      path = '/ekonomi' 
      exact component={Ekonomi}/>
      <Route 
      path = '/dunya' 
      exact component={Dunya}/>
      <Route 
      path = '/spor' 
      exact component={Spor}/>
      <Route 
      path = '/magazin' 
      exact component={Magazin}/>
      <Route 
      path = '/deneme' 
      exact component={Deneme}/>
      <Route
      component={Detay}/>
      </Switch>
  </Router>
    </div>
  );
}

export default App;
