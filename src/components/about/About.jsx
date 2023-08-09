import React from "react"
import './About.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
const About =()=>
{
    return(
       <section id ='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image"/>

                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h2>Experience</h2>
                        <h3>1+ years Working as Ducat Trainee</h3>
                    </article>
                    
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h2>Education</h2>
                        <h3>B.tech</h3>
                    </article>
                    
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h2>Education</h2>
                        <h3>Intermediate</h3>
                    </article>
                </div>
                <p>
                As a MERN Full Stack Developer with one years of trainning at Ducat Institute New Delhi India. I have a strong background in developing full-stack web applications using HTML,CSS,JavaScripts,Reactjs,React Native in Front-end and Nodejs,Express.js,MongoDB,SQL and MySQL in Back-end.
                I have good knowledge of various languages like c,c++ and Java.
                Skilled in building RESTfull APIs,implementing user authentication and authorization, integrating third-party APIs. Proficient in using GIT for version control.Passionate about creating responsive, scalable, and user-friendly applications that meet business requirements and exceed customer expectations.Strong problem-solving skills and ability to work effectively in a collaborative team environment.
                </p>
                <a href="#contact" className ='btn btn-primary'>Let's talk</a>

            </div>
        </div>
       </section>
    )
}
export default About