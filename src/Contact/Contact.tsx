import React from "react";
import userImg from "../resource/user.svg";
import "./Contact.scss";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className='contact-overflow'>
      <Link to="/contactDetails" className="contact">
        <img src={userImg} alt="A contact"></img>
        <h3>Name</h3>
        <h3>(111) 222-3333</h3>
      </Link>
    </section>
  );
};

export default Contact;
