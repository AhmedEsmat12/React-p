import React,{Component} from 'react'
import axios from 'axios'
import './style.css'

class Work extends Component{
    state={
        work:[]
    }
    componentDidMount()
    {
        axios.get('json/data.json').then(res=> {this.setState({work:res.data.works})});
    }
    render()
{
    const worktitle=this.state.work.map((item)=>
    {
        return(

                <div key={item.id}>
                    <i className={item.icon_name} />
                    <h4>{item.title}</h4>
                    <hr />
                    <p>                   
                     {item.body}
                    </p>
                </div>
                )
    })
    return(
        <div className="work">
        <div className="container">
            <h2>my work</h2>
        {worktitle}
        </div>
        </div>
    )
}  
}
export default Work