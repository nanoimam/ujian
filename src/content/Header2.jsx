import React from 'react';
import '../style/style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const Menu2 = (props) => {
  
    return(
      <Router>
       
                <img  src={props.img}/>
                <Link to="#">{props.menu2}</Link>
                
            
    
    </Router>
  
    )
  
}
export default Menu2;

