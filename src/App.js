import React from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Slider from './Components/Slider/Slider';
import Scroll from './Components/Slider/Scroll';

function App() {
  return (
    <div className="App">
    <NavigationBar></NavigationBar>
    <br></br>
    <Slider></Slider>
    <Scroll></Scroll>
    
    </div>
  );
}

export default App;
