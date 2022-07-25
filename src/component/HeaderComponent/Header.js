import React from 'react';
import './header.scss';
import logo from './../../asset/VeniaLogo.png';
import shopping_bag_icon from './../../asset/shopping-bag.png';
import menu_icon from './../../asset/menu.png';
import {Link} from 'react-router-dom';
 

class Header extends React.Component {
    state = {flag: false}
    render() {
      return(
        <>
        <header>
            <div className="menu-icon" onClick={() =>{
                this.setState({flag: !this.state.flag})
            }}>
                <img src={menu_icon} className="menu-icon" alt="menu_icon" />
            </div>
            <Link to={`/capstonev1`}>
                <img src={logo} className="App-logo" alt="VeniaLogo" />
            </Link>
                <nav>
                    <div className="nav-list">
                    <Link to={`/capstonev1`}>
                        <lable>Home</lable>
                        <div className='header-underline-home'></div>
                    </Link>
                        <lable>Women</lable>
                        <lable>Men</lable>
                        <lable>Electronics</lable>
                        <lable>Jewellery</lable>
                    </div>
                    
                    <div className="nav-Shopping-Cart">
                    <div className="shopping-cart-icon">
                            <img src={shopping_bag_icon} className="header-icon" alt="shopping_bag_icon" />
                        </div>
                    </div>
                    
                </nav>
        </header>
            
             {this.state.flag?<div className="nav-sm-list">
               
                        <lable>Home</lable>
                        <lable>Women</lable>
                        <lable>Men</lable>
                        <lable>Electronics</lable>
                        <lable>Jewellery</lable>
                </div>
                :""}
            </>
        ) 
        
      
    }
  }

export default Header;
