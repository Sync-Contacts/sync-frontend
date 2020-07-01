import React from "react";
import "./Contact.scss";
import userImg from '../resource/user.svg';
import { Link } from 'react-router-dom';

interface ContactProps {
  id: number,
  name: string,
  number: string
}

const Contact: React.SFC<ContactProps> = ({id, name, number}) => {
  return (
    <section className='contact-overflow'>
      <Link to="/contactDetails" className="contact">
        <img src={userImg} alt="A contact"></img>
        <h3>{name}</h3>
        <h3>{number}</h3>
      </Link>
    </section>
  );
};

export default Contact;
