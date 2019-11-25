import React from 'react';
import '../style/style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const Slider = (props) => {
  
    return(
      <Router>
       <div className="carousel-item active">
            <img className="img-fluid d-block w-100" src={props.img}/>
        </div>
        
    </Router>
  
    )
  
}
export default Slider;

