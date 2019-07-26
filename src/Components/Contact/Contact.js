import React from 'react'
import Footer from'./../Footer/Footer.js'
import './style.css' 
const Contact=()=>
{
    return(
        <div className="contact">
            <h1>drop me aline</h1>
            <form>
                <input type="text" placeholder="your name" />
                <input type="text" placeholder="your email" />   
                <input type="text" placeholder="your subject"/>
                <textarea  placeholder="your message"></textarea>
                <button>Send Message</button>
            </form>
            <Footer />
        </div>
    )
}  
export default Contact