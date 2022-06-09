import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3qb56kb', 'template_gb5ety7', form.current, 'j8nnNS0HV18Ji9K9P')
        e.target.reset();
    };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">

                <div className="contact_options">

                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>alimran21feb@gmail.com</h5>
                        <a href="mailto:alimran21feb@gmail.com">Send a message</a>
                    </article>

                    <article className='contact_option'>
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>Al-Imran</h5>
                        <a href="https://www.facebook.com/profile.php?id=100056213696658" target="_blank">Send a message</a>
                    </article>

                    <article className='contact_option'>
                        <FaLinkedin className='contact_option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Al-Imran</h5>
                        <a href="https://linkedin.com/in/al-imran-a68742215" target="_blank">Send a message</a>
                    </article>

                </div>

                {/* END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>

        </section>
    );
};

export default Contact;