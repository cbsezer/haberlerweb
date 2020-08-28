import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import './Boxes.css'
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types';

const Scroll = props => {
    useEffect(() => {
        Aos.init({ duration: 3000});
    },[]);
     return(
         
        <div className="grids">
        <Grid stackable columns={5}>
        {
          props.news.map((haber, key) => (
            <Grid.Column key={key}>
            <div image = {haber.photo} header={haber.title} data-aos="fade-right"className="boxes"><i className="far fa-newspaper"></i></div>    
            </Grid.Column>
          ))
        }
      </Grid>
        </div>
    )
}
Scroll.propTypes = {
	news: PropTypes.array.isRequired
};
Scroll.defaultProps = {};
export default Scroll;
