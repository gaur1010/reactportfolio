import React from "react"
import './Experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'
const Experience =()=>{
    return(<> 
        <section id='experience' >
        
            <h5 >What Skills I Have</h5>
            <h2>My Experience</h2>
           


            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Forntend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                            <h4>HTML
                            </h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                            
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                            <h4>CSS
                            </h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                            
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                            <h4>Bootstrap
                            </h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                          
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div> <h4>JavaScripts
                            </h4>
                            <small className='text-light'>Experienced</small></div>
                            
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                            <h4>React.js
                            </h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                            
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>   <h4>ReactNative
                            </h4>
                            <small className='text-light'>Experienced</small></div>
                         
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
             {/*        =======================================================  */}
                <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                            <h4>JAVA
                            </h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                            
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div> <h4>Node.js
                            </h4>
                            <small className='text-light'>Experienced</small></div>
                           
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div> <h4>Express.js
                            </h4>
                            <small className='text-light'>Experienced</small></div>
                           
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div><h4>MongoDB
                            </h4>
                            <small className='text-light'>Experienced</small> </div>
                            
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div><h4>SQL
                            </h4>
                            <small className='text-light'>Experienced</small></div>
                            
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>  <h4>MySQL
                            </h4>
                            <small className='text-light'>Experienced</small></div>
                          
                        </article>
                    </div>
                </div>

                </div>
            
             </section>
             </>
    )

}
export default Experience