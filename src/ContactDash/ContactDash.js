import React from 'react';
import Contact from '../Contact/Contact'

const ContactDash = () => {
    return (
      <main className="ContactDash">
        <h2>To contact this week:</h2>
        <section className="WeekContact">
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