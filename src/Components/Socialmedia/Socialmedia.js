import React,{Component} from 'react'
import './style.css'
import axios from 'axios'
class Socialmedia extends Component
{
    state={
        dat:[]
    }
    componentDidMount()
    {
        axios.get('json/data.json').then((res)=>
        {
            
            this.setState({
                 dat:res.data.social
            })
        })
       

    }
  

    render()
    {
     const rrrr=(this.state.dat).map((item)=>
    {
        return(
            <div className="social" key={item.id}>
            <div >
                <i className={item.icon} />
                </div>
            <div>
                <p>{item.title}</p>
                <p>{item.body}</p>
            </div>
            </div>
          )
    })       
    return(
        <div className="e">
        {rrrr}
         </div>
    )
}  
}
export default Socialmedia