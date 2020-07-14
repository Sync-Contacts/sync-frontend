import React, { useState, useEffect } from 'react';
import Contact from '../Contact/Contact'
import "./ContactDash.scss";

interface ContactProps {
  id: number,
  linked_user_id: number,
  contact_name: string,
  phone: string,
  email: string,
  contact_address: string,
  last_contact: string,
  contact_frq: number
}

//more explicity interface the contact details
const createContacts = (contactDetails: object[]) : object[] => {
  return contactDetails.map((contact: ContactProps) => {
    return <Contact key={contact.id} {...contact} />
  })
}

const ContactDash = () => {
  //should type this more strictly for each property 
  interface ContactState {
    contacts: object[];
  }
  const [contacts, setContacts] = useState<ContactState | undefined>(undefined);

  useEffect(() => {
    //hardcoded initial test fetch for user 1 
    fetch('http://localhost:3000/contacts/1')
      .then(resp => resp.json())
      .then(data => setContacts(data))
  }, [])

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