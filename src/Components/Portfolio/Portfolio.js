import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './style.css'
const Portfolio=()=>
{
    const [image,setImage]=useState([]);
    useEffect(()=>
    {
        axios.get('https://ahmedesmat12.github.io//template-with-react/blob/gh-pages/json/data.json').then((res)=>{setImage(res.data.portfolio)})
    },[])
    const rrrr=image.map((item)=>
    {
        return(
            <div className="port" key={item.id}>
            <img src={item.image} alt="ss"/>
            <div className="overlay">
                <button>show image</button>
            </div>
            </div>
        )
    })

    return(
        <div className="portfolio">
            <h1>my portfolio</h1>
            <ul>
                <li>all</li>
                <li>html</li>
                <li>photoshop</li>
                <li>wordpress</li>
                <li>mobile</li>
            </ul>
            {rrrr}
            </div>
    )
}  
export default Portfolio
