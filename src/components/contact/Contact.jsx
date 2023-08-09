import React from "react"
import "./Contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = ()=>{
    const form =useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_9eiij8o','template_gpu7pga',form.current,'s6b1_WqbvA6TJXKQv')
        e.target.reset()
    };
    return( <> 
        <section id ='contact'>
            <h5>Get in touch</h5>
            <h2>Contact Me </h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail/>
                        <h4>Email</h4>
                        <h5>Send a Message</h5>
                        <a href="mailto:singhgaurav67295@gmail.com" target="_blank">Click the link Here</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp/>
                        <h4>WhatsApp</h4>
                       <a href="https://api.whatsapp.com/send?phone+91-7983235862" target="_blank">Click the Link Here</a>
                    </article>
                    
                    </div>
                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" name='name' placeholder='Your full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
        </>
    )
}
export default Contact