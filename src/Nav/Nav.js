import React from "react";
import Search from '../Search/Search'

const Nav = () => {
  return (
    <section className="Nav">
        <h1>Sync</h1>
        <Search />
        <button className="AddContact"></button>
    </section>
  )
};

export default Nav;
