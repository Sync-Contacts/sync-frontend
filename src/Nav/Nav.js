import React from "react";
import Search from '../Search/Search'
import "./Nav.scss";

const Nav = () => {
  return (
    <section className="nav">
        <h1>Sync</h1>
        <Search />
        <button className="nav-btn-contact">+</button>
    </section>
  )
};

export default Nav;
