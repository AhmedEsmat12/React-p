import React,{Component} from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import Profile from '../Profile/Profile'
import Socialmedia from '../Socialmedia/Socialmedia'
import Work from '../Work/Work'
class index extends Component{
 render()
 {
    return(
        <div>
            
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <Socialmedia />
            <Footer />
        </div>
    )
}  
 }
export default index