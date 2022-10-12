import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lzwyuer', 'template_6a6pgtf', form.current, 'M5xabJfkezHgxWJfK')
     e.target.reset()
    };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>contacto@webdeveloperseo.com</h5>
            <a href="mailto:contacto@webdeveloperseo.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>pendiente</h5>
            <a href="https://m.me/davidbeslanga" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>9999999999</h5>
            <a href="walink" target="_blank">Send a message</a>
          </article>
        </div>

        {/*End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
        <button type="submit" className="btn btn-primary"> Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
