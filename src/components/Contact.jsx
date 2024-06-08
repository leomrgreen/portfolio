import React, { useState } from 'react';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import chatimg from "../images/Chat-pana.png";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [buttonText, setButtonText] = useState('Copy My Gmail');

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("jonssonleonardo@gmail.com")
            .then(() => {
                setButtonText('Copied To Clipboard!');
            })
            .catch(err => {
                console.error('Error copying text: ', err);
            });
    }

    return (
        <section className='contact-section hidden' id='contact-section'>
            <div className="contact-title">
                <h2>Contact</h2>
                <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="contact-card">
                <img src={chatimg} alt="man standing next to a big phone" className='hidden'/>
                <div className="btn-container-contact hidden">
                    <button onClick={copyEmailToClipboard}>
                        {buttonText} 
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                    <div className="media"> 
                        <a href="https://github.com/leomrgreen"> <FontAwesomeIcon icon={faGithub} /> </a>
                        <a href="https://www.linkedin.com/in/leo-jonsson-b98048304/"> <FontAwesomeIcon icon={faLinkedin} /> </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
