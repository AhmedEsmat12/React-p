import React,{useState,useEffect} from 'react'
import './profile.css'
import axios from 'axios';

const Profile=()=>
{
    const [c,setList]=useState([]);
    useEffect(()=>
    {
        axios.get("json/data.json").then(item =>
            {
                setList(item.data.profile)
            })
            },[]);
            const rrrr=c.map((item)=>
    {
        const rr=item.size;
        return(
          <li key={item.id} >
              {item.name}<span>{rr}</span>
              <hr style={{width:item.size}}/>
          </li>
        )
    })
    return(
        <div className="profile">
         <div className="container">
             <div className="info">
                 <h1>my profile</h1>
                 <div><span>name</span><p>Hazem Nabil</p></div>
                 <div><span>birthday</span><p>20/8/1993</p></div>
                 <div><span>address</span><p>Zagazig</p></div>
                 <div><span>phone</span><p>252584555</p></div>
                 <div><span>email</span><p>Ahmed@Ahmed</p></div>
                 <div><span>website</span><p style={{color:'orange'}}>www.google.com</p></div>
             </div>
             <div className="skill">
                 <h1>some skills</h1>
                 <p>Lorem ipsum dolor sit amet, 
                     consectetur adipisicing elit. Quos praesentium blanditiis esse 
                     cupiditate, omnis similique</p>
                     <ul>
                     {rrrr}
                     </ul>
             </div>
         </div>
        </div>
    )
}  
export default Profile