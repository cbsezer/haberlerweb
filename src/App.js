import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Anasayfa from './Components/pages/Anasayfa'
import Ekonomi from './Components/pages/Ekonomi'
import Magazin from './Components/pages/Magazin'
import Spor from './Components/pages/Spor'
import Dunya from './Components/pages/Dunya'
import Gundem from './Components/pages/Gundem'
import Detay from './Components/pages/Detay'

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
