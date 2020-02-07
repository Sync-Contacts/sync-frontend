import React from "react";
import userImg from "../resource/user.svg"
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <img src={userImg} alt="A contact"></img>
      <h3>Name</h3>
      <h3>(111) 222-3333</h3>
    </section>
  );
};

export default Contact;
