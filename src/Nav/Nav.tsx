import React from "react";
import Search from '../Search/Search'
import "./Nav.scss";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <section className="nav">
        <h1>Sync</h1>
        <Search />
        <NavLink to='/contactForm' className="nav-btn-contact">+</NavLink>
    </section>
  )
};

export default Nav;
