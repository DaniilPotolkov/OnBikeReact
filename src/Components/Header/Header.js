import React from "react";
import './Header.css'
import { NavLink, Switch } from 'react-router-dom'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import Logo from './logo_black.png';

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="nav-yellow">
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                <Navbar.Brand><NavLink to="/glawnay" activeClassName="selected" className="menu_item" ><img src="{Logo}" alt=""></img></NavLink></Navbar.Brand>
                </div>
                <div className="col-xl-2 offset-xl-1">
                <Nav><NavLink to="/dostavka" activeClassName="selected" className="menu_item" ><button>Доставка и оплата</button></NavLink></Nav>
                </div>
                <div className="col-xl-2">
                <Nav><NavLink to="/garantee" activeClassName="selected" className="menu_item" ><button>Гарантия</button></NavLink></Nav>
                </div>
                <div className="col-xl-2">
                <Nav><NavLink to="/contact" activeClassName="selected" className="menu_item" ><button>Контакты</button></NavLink></Nav>
                </div>
                <div className="col-xl-2">
                    <p>+7 960 312 01 07</p>
                </div>
            </div>
        </div>
    </div>
    <section className="nav-black">
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                <Nav><NavLink to="/gotov" activeClassName="selected" className="menu_item" ><button>Готовые наборы</button></NavLink></Nav>
                </div>
                <div className="col-lg-2">
                    <button>Мотор-колеса</button>
                </div>
                <div className="col-lg-2">
                    <button>Аккумуляторы</button>
                </div>
                <div className="col-lg-2">
                    <button>Контроллеры</button>
                </div>
                <div className="col-lg-2">
                    <button>Аксессуары</button>
                </div>
                <div className="col-lg-2">
                    <button>Электровелосипеды</button>
                </div>
            </div>
        </div>
        </section>
        </>
    )
  };
}

export default Header