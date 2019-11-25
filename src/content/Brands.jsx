import React from 'react';
import '../style/style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const Brands = (props) => {
  
    return(
      <Router>
       
                <Link to=""><img  src={props.img}/></Link>
                
                
            
    
    </Router>
  
    )
  
}
export default Brands;

