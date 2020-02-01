import React from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import ContactDash from '../ContactDash/ContactDash';

function App() {
  return (
    <section className="main">
      <Nav />
      <ContactDash />
    </section>
  );
}

export default App;
