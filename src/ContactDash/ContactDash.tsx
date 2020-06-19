import React, { useState, useEffect } from 'react';
import Contact from '../Contact/Contact'
import "./ContactDash.scss";

const ContactDash = () => {
  //should type this more strictly for each property 
    interface ContactState {
      contacts: object[];
    }

  const [contacts, setContacts] = useState<ContactState | undefined>(undefined);

    return (
      <main className="contact-dash">
        <h2>To contact this week:</h2>
        <section className="weekcontent">
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </section>
        {/* add birthday section in fucture */}
      </main>
    );
}

export default ContactDash;