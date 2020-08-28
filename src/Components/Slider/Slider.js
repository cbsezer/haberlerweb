import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
 
class Slider extends Component {
  
  state = {
    items: [
      {id: 1, title: <img src= {require('./assets/haber1.jpg')} alt="logo" width="861.59px" height="491.5px"></img> },
      {id: 2, title: <img src= {require('./assets/haber2.jpg')} alt="logo" width="861.59px" height="491.5px"></img > },
      {id: 3, title: <img src= {require('./assets/haber3.jpg')} alt="logo" width="861.59px" height="491.5px"></img> },
      {id: 4, title: <img src= {require('./assets/haber4.jpg')} alt="logo" width="861.59px" height="491.5px"></img> },
      {id: 5, title: <img src= {require('./assets/haber5.jpg')} alt="logo" width="861.59px" height="491.5px"></img> },
    ]
  }
  render () {
    const { items } = this.state;
    return (
     <div className="card">
     <Carousel>
     {items.map(item => <div key={item.id}>{item.title}</div>)}
   </Carousel>
     </div>
    )
  }
}
export default Slider;