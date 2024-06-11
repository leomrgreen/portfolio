import React, { useState, useRef } from 'react';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import chatimg from "../images/Chat-pana.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [buttonText, setButtonText] = useState('Copy My Gmail');
    const formRef = useRef();

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("jonssonleonardo@gmail.com")
            .then(() => {
                setButtonText('Copied To Clipboard!');
            })
            .catch(error => {
                console.error('Error copying text: ', error);
            });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((result) => {
                console.log(result.text);
                alert('Email sent!')
                formRef.current.reset();  
            }, (error) => {
                console.log(error.text, 'error');
            });
    }

    return (
        <>
            <section className='contact-section hidden' id='contact-section'>
                <div className="contact-title">
                    <h2>Contact</h2>
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="contact-card">
               <div className='form-container'>
               <span className="contact-subtitle">Fill Out This Form</span>
                    <form className='contact-form' onSubmit={sendEmail} ref={formRef}>
                        <label htmlFor="emailFrom">Your Email:</label>
                        <input type="text" name='email_from' id='emailFrom' className='email-from' placeholder='person@example.com'/>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" rows={10} className='message-box' placeholder='Write me something...'></textarea>
                        <button type='submit' className='send-btn'>SEND <FontAwesomeIcon icon={faPaperPlane} /></button>
                    </form>
               </div>
                    <img src={chatimg} alt="man standing next to a big phone" className='hidden'/>
                    <div className="btn-container-contact hidden">
                        <span className="contact-subtitle">Or Just</span>
                        <button onClick={copyEmailToClipboard}>
                            {buttonText} 
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
