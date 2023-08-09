import React from "react"
import './Services.css'
import{BiCheck}from'react-icons/bi'
const Services =()=>{
    return(<> 
       <section id ="services">
       <h5>What I offer</h5>
       <h2>Services</h2>


       <div className="container services__container">
        <article className="service">
            <div className="service__head">
            <h3>UI Design</h3>
            </div>
            <ul className='service__list'>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>1.Visual Design  </p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>2.Grids </p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>3.Icons</p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>4.Motion Design</p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>5.App Design </p>
                
                
                

            </li>
            </ul>
        </article>
    {/*     ============================================== */}
    <article className="service">
            <div className="service__head">
            <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>1.Experts in both frontend and backend development.</p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>2.Supervise the development and guide on best practices.</p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>3.Know both business requirements and user interface requirements. </p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>4.Ensure responsive and addative User interface.</p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>5.Manage services like APIs,data storage for the web applications.</p>

            </li>
            </ul>
        </article>
   {/*      =============================================== */}
   <article className="service">
            <div className="service__head">
            <h3>UX Design</h3>
            </div>
            <ul className='service__list'>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>1.Competitor analysis </p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>2.Customer analysis and user research</p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>3.Product structure and strategy</p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>4.Content development</p>

            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>5.Testing and Iteration </p>

            </li>
            </ul>
        </article>
       </div>
        </section>
        </>
    )
}
export default Services