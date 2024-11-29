import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pp997u9', // Replace with your EmailJS service ID
      'template_14lgybk', // Replace with your EmailJS template ID
      form.current,
      'gjvG2OQmI5xIfiUeR' // Replace with your EmailJS public key
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset(); // Clear the form fields after successful submission
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
    });
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="from_name" required />
        
        <label>Email:</label>
        <input type="email" name="reply_to" required />
        
        <label>Message:</label>
        <textarea name="message" required />
        
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
