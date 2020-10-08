import React from 'react';

function HaberDetayi(props) {
    const style1 = {
        fontFamily: 'Raleway',
        fontWeight:'bold',
        fontSize:22,
      };
      const style2 = {
        fontFamily: 'Raleway',
        color: "black",
        fontWeight:'bold',
      };
    return (
        <div>
            
            <h3 style = {style1}>{props.title}</h3>
            <p style = {style2}>{props.detail}</p>
            
        </div>
    );
}

export default HaberDetayi;