import React from 'react';
import "./ContactDetails.scss";
import userImg from "../resource/user.svg"

const ContactDetails = () => {
    return (
        <section className="contact-align">
            <section className="contact-container">
                <img src={userImg} alt="An icon of a generic user"></img>
                <section className="contact-details">
                    <h1>Contact Name</h1>
                    <h2>Date Last Spoke: 11/11/11</h2>
                    <h4>Contact Frequency</h4>
                    <h3>Phone</h3>
                    <h3>Email</h3>
                    <h3>Address</h3>
                </section>
                <h2>Talking Points:</h2>
                <article className="contact-talk-points">
                    <dl>
                        <dt>Nightshades</dt>
                        <dd>Does Tom Brady eat them?</dd>

                        <dt>Ostriches</dt>
                        <dd>They're profitable.</dd>

                        <dt>Nicholas Cage</dt>
                        <dd>The one true profit.</dd>
                    </dl>
                </article>
            </section>
        </section>
    );
}

//contactId integer primaryKey notNull,
    //add this as key value on component 
// userID integer foreignKey notNull,
//     name text * split to first / last notNull,
//         phone integer
// email text
// address text *break out to separate pieces
// dateLastSpoke text * can store in any type https://www.sqlite.org/datatype3.html
// contactFrequency integer
// contactImg blob

export default ContactDetails;