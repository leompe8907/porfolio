import React from 'react';
import Navbar from '../Components/Navbar';
import ContactMe from '../Components/ContactMe';
import Footer from '../Components/Footer';
import '../Static/Style/Contact.scss';

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-content">
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;