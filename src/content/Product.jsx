import React from 'react';
import '../style/style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const Product = (props) => {
  
    return(
      <Router>
       <div className="product_site">
            <Link to="#"> <img  src={props.img}/></Link>
            <h2> {props.h2}</h2>
            <p> {props.p}</p>
          </div>
    </Router>
  
    )
  
}
export default Product;

