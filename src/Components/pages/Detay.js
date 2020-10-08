import React from 'react';
import HaberDetayi2 from './HaberDetayi2';
import SideBar from './SideBar'

function Detay() {
  const container = {
    display:"flex",
    justifyContent: "space-between",


  };
    return (
      <div style={container}>
      <HaberDetayi2></HaberDetayi2>
      <SideBar></SideBar>
      </div>
    );
  }
  
  export default Detay;
  