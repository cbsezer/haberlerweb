import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import './Boxes.css'

const Scroll = () => {
    useEffect(() => {
        Aos.init({ duration: 3000});
    },[]);
     return(
        <div className="grids">
            <div className="boxes">1</div>    
            <div data-aos="fade-right"className="boxes">2</div>    
            <div data-aos="fade-right" className="boxes">3</div>    
            <div data-aos="fade-right"className="boxes">4</div>    
            <div data-aos="fade-right"className="boxes">5</div>    
        </div>
    )
}
export default Scroll;
