import React, {Component} from 'react';
import '../style/style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class Menu extends Component {
  render() {
    return(
      <Router>
        <div className="header">
            <div className="containerr">
                <Link to=""><img src={require('./images/header_z.PNG')}/></Link>
                <ul>
                        <Link to="" className="li">WANITA</Link>
                        <Link to="" className="li">PRIA</Link>
                        <Link to="" className="li">ANAK-ANAK</Link>
                        
                </ul>
                <input className="input" type="text"/>
              
                  <div className="iconcari">
                    <img src={require('./images/search_30px.png')}/>
                  </div>
                <Link to="#"><img src={require('./images/header1.PNG')}/></Link>
                <Link to="#"><img src={require('./images/header2.PNG')}/></Link>
                <Link to="#"><img src={require('./images/header3.PNG')}/></Link>
               
            </div>
        </div>
    
    </Router>
  
    );
  }
}
export default Menu;

