import React from "react";
import "./Contact.scss";
import userImg from '../resource/user.svg';
import { Link } from 'react-router-dom';

interface ContactDetails {
  id: number,
  linked_user_id: number,
  contact_name: string,
  phone: string,
  email: string,
  contact_address: string,
  last_contact: string,
  contact_frq: number
}

interface ContactProps {
  contact_details: ContactDetails[];
}

const Contact: React.SFC<ContactProps> = ({ id, contact_name, phone }) => {
  return (
    <section className='contact-overflow'>
      <Link to="/contactDetails" className="contact">
        <img src={userImg} alt="A contact"></img>
        <h3>{contact_name}</h3>
        <h3>{phone}</h3>
      </Link>
    </section>
  );
};

export default Contact;
