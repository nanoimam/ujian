import React, {Component} from 'react';

import './App.css';
import './style/style.css';
import Menu from './content/Header';
import Menu2 from './content/Header2';
import Brands from './content/Brands';
import Product from './content/Product';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
class App extends Component {
  render(){
  return (
    <div className="layout">
       <Menu/>
       <div className="wrapper">
          <div className="header2">
              <div className="left">
                  <Menu2 img={require('./content/images/bar1.PNG')} menu2="PRODUK ORIGINAL & TERJAMIN" />
                  <Menu2 img={require('./content/images/bar2.PNG')} menu2="RIBUAN FASHION BRAND" />
                  <Menu2 img={require('./content/images/bar3.PNG')} menu2="GRATIS PENGEMBALIAN" />
                  <Menu2 img={require('./content/images/bar4.PNG')} menu2="PERTANYAAN?" />
              </div>
              <div className="right">
                  <a href="#"><img src={require('./content/images/diskon.PNG')}/></a>
              </div>
          </div>
          
          <div id="carouselExampleIndicators" className="slider carousel slide"  data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="img-fluid d-block w-100" src={require('./content/images/slider.PNG')}/>
              </div>
              <div className="carousel-item active">
                <img className="img-fluid d-block w-100" src={require('./content/images/sliderrr.jpg')}/>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">previous</span>
              </a>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="slider2">
              <a href="#"><img src={require('./content/images/banner.PNG')}/></a>
          </div>
          <div className="slider3">
            <a href="#"><img src={require('./content/images/bank.PNG')}/></a>
          </div>
          <div className="brands">
            <h1>Featured Brands</h1>
            <Brands img={require('./content/images/zalora.png')}/>
            <Brands img={require('./content/images/sb.png')}/>
            <Brands img={require('./content/images/cotton.png')}/>
            <Brands img={require('./content/images/mango.png')}/>
            <Brands img={require('./content/images/keds.png')}/>
            <Brands img={require('./content/images/levis.png')}/>
            <Brands img={require('./content/images/puma.png')}/>
            <Brands img={require('./content/images/addidas.png')}/>
            <Brands img={require('./content/images/casio.png')}/>
            <Brands img={require('./content/images/vans.png')}/>
            <Brands img={require('./content/images/river.png')}/>
            <Brands img={require('./content/images/guess.png')}/>
            <Brands img={require('./content/images/nike.png')}/>
            <Brands img={require('./content/images/raven.png')}/>
          </div>
          <div className="product">
            <h1>New This Weak</h1>
            <Product img={require('./content/images/promo1.PNG')} h2="ALL UNDER RP188.000" p="Semua produk fashion untuk jiwa stylish Anda di bawah Rp188.000"/>
            <Product img={require('./content/images/promo2.PNG')} h2="KEMEJA DI BAWAH RP249.000" p="Temukan pilihan kemeja santai hingga formal disini"/>
            <Product img={require('./content/images/promo3.PNG')} h2="THE CROSSBODY BAGS UP TO 70% OFF" p="Style tas paling populer untuk menemani hari-hari kasual Anda."/>
          </div>
          

       </div>
    </div>
  );
  }
}

export default App;
