import React from "react"
import './Header.css'
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from "./HeaderSocials";
const Header=()=>{

    return(

    <header>
        <div className="container header__container">
            <h2>Hello I'm </h2>
            <h1>GAURAV SINGH</h1>
            <h3 className="text-light">MERN FullStack Developer</h3>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
                <img src={ME} alt="me"/>
            </div>
            <a href="#contact" className='scroll__down'>
                Scroll Down</a> 
       </div>
        
    </header>
        
    
    )
}
export default Header